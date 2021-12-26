/* PreLoader */
    let loader = document.getElementById('preloader')
    const disabledScroll = () => {
        window.scrollTo(0, 0)
    }
    
    window.addEventListener('load', () => {
        window.addEventListener('scroll', disabledScroll)
        setTimeout(() => {
            window.removeEventListener('scroll', disabledScroll)
            loader.classList.add('preloader--fade-out')
        }, 1500);
    })

/* Nav */
    const button = document.getElementById('menu-bars')
    const nav = document.getElementById('nav-list')
    const toggleIcon = document.getElementById('toggle')
    
    
    button.addEventListener('click', () => {
        nav.classList.toggle('nav-list--active')
        let click = nav.classList.contains('nav-list--active')

        if(click == true){
            toggleIcon.classList.toggle('fa-times', 'fa-bars')
            
        } else{
            toggleIcon.classList.remove('fa-times')
        }
    })

    window.addEventListener('scroll', () => {
        let scroll = document.documentElement.scrollTop

        if (scroll > 1) {
            toggleIcon.classList.remove('fa-times')
            nav.classList.remove('nav-list--active')
        }
    })


/* Swiper by swiperjs.com */
    var swiper = new Swiper(".home-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
        delay: 7600,
        disableOnInteraction: false,
        },
        loop: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        grabCursor: true
    });

    var swiper = new Swiper(".reviews-swiper", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        grabCursor: true,
        loop: true, 
        breakpoints: {
         1030: {
            slidesPerView: 1.5,
        },
        1500: {

        },
        2100: {
            slidesPerView: 2,
        }},
        
    });


/* Observers */
    const links = document.querySelectorAll('.nav-list__item')
    const sections = document.querySelectorAll('.ob')
    const observer = new IntersectionObserver( (entries) => {
        
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const id = '#' + entry.target.id;
                history.pushState({}, entry.target.innetText, id)

                links.forEach(link => {
                    link.classList.remove('nav-list__item--active')
                    const href = link.attributes.href.nodeValue;

                    if(href === id){
                        link.classList.add('nav-list__item--active')
                    } 
                })
            }
        })
    }, {
        threshold: .2,
        rootMargin: '0px 0px -50% 0px'
    });

    sections.forEach(section => {
        observer.observe(section)
    })
