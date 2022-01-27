(function sandwichMenu(){

    const btnMobileMenu = document.getElementById('sandwichBtn');
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

    check.addEventListener('change', () => {html.classList.toggle('darkTheme')})

})();