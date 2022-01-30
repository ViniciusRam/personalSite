const btnMobileMenu = document.getElementById('sandwichBtn');
(function sandwichMenu(){
    
    const links = document.querySelectorAll('.navLinks a');
    const arr = [];
    btnMobileMenu.addEventListener('click', toggleMenu);
    btnMobileMenu.addEventListener('touchstart', toggleMenu);

    function animateLinks(_class){    
            links.forEach((link, index) => {
                if (_class.contains('active')){
                    link.style.animation = `menuLinksFade .3s ease forwards ${index / 7 + 0.001}s`;
                } else {
                    link.style.animation = `menuLinksFadeRev .3s ease forwards`;
                }
            })
    }

    function toggleMenu(event) {


        if (event.type === 'touchstart') {event.preventDefault()};

        arr.push('.');

        const navContainer = document.getElementById('navMenu');
        const _class = navContainer.classList;


        if(( arr.length % 2) !== 0 ){
            _class.add('active');
        } else {
            _class.remove('active');
        }
        const active = navContainer.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);

        active ? event.currentTarget.setAttribute('aria-label', 'fechar menu') : event.currentTarget.setAttribute('aria-label', 'abrir menu');
        
        animateLinks(_class);
    }
})();

(function darkTheme(){
    const html = document.querySelector('html');
    const check = document.querySelector('input[name="iTheme"]');
    
    check.addEventListener('change', () => {html.classList.toggle('darkTheme')});

    const addMods = (event) => {
        if (event.type === 'touchstart') {event.preventDefault()};
        if( !(html.classList.contains('darkTheme'))){
            document.getElementById('imgLogo').src = 'images/logoDark.svg'
            document.getElementById('imgWelc').src = 'images/darkFimg.svg'
        } else {
            document.getElementById('imgLogo').src = 'images/logoLight.svg'
            document.getElementById('imgWelc').src = 'images/lightFImg.svg'
        }
    }
    check.addEventListener('click', addMods)
    check.addEventListener('touch', addMods)

})();

(function smoothScroll(){
    
    const links = document.querySelectorAll('.navLinks a[href^="#"]');

    const topDistance = (element) => {
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    };

    const scrolling = (section) => {

        smoothScrollTo(0, (section - 80), 800)
    };




    const scrollOn = (event) => {
        event.preventDefault();
        const section = topDistance(event.target)
        scrolling(section)

        btnMobileMenu.click();
    };

    links.forEach(x => {
        x.addEventListener('click', scrollOn)
    });

    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
      
        duration = typeof duration !== 'undefined' ? duration : 400;
      
        // Easing function
        const easeInOutQuart = (time, from, distance, duration) => {
          if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
          return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };
      
        const timer = setInterval(() => {
          const time = new Date().getTime() - startTime;
          const newX = easeInOutQuart(time, startX, distanceX, duration);
          const newY = easeInOutQuart(time, startY, distanceY, duration);
          if (time >= duration) {
            clearInterval(timer);
          }
          window.scroll(newX, newY);
        }, 1000 / 60); // 60 fps
      };

})();


(function animatioContentPage(){
    const debounce = function(func, wait, immediate) {
        let timeout;
        return function(...args) {
          const context = this;
          const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          const callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };

    const animationClass = "animation"
    let content = document.querySelectorAll("[data-animate]");
    
    function animateOnScroll(){
        const windowDistance = window.pageYOffset + (window.innerHeight * 0.75);
        content.forEach(function(element){
            if((windowDistance) > element.offsetTop){
                element.classList.add(animationClass)
            } else {
                element.classList.remove(animationClass)
            }

        })

    }
    animateOnScroll()
    
    if(content.length) {
        window.addEventListener('scroll', debounce(function() {
          animateOnScroll();
        }, 100)); 
    }
})();