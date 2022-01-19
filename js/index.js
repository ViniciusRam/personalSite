(function sandwichMenu(){


    function toggleMenu(event) {
        console.log('entrou')

        if (event.type === 'touchstart') {event.preventDefault()}

        arr.push('.')

        const navContainer = document.getElementById('navMenu');
        const _class = navContainer.classList


        if(( arr.length % 2) !== 0 ){
            _class.add('active')
        } else {
            _class.remove('active')
        }
        const active = navContainer.classList.contains('active')
        event.currentTarget.setAttribute('aria-expanded', active)

        active ? event.currentTarget.setAttribute('aria-label', 'fechar menu') : event.currentTarget.setAttribute('aria-label', 'abrir menu')
        
        animateLinks()
    }

    function animateLinks(){    
            links.forEach((link, index) => {
                link.style.animation ? (link.style.animation = ``) : (link.style.animation = `aFade .3s ease forwards ${index / 7 + 0.001}s`);
            })
    }

    const btnMobileMenu = document.getElementById('sandwichBtn')
    const links = document.querySelectorAll('.navMenu')

    const arr = []


    btnMobileMenu.addEventListener('click', toggleMenu)
    btnMobileMenu.addEventListener('touchstart', toggleMenu)

})();