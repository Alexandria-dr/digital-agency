const navButton = document.querySelector('#b6')
const navItem = document.querySelectorAll('.nav-item, .burger-item')

let anim2 = document.querySelectorAll('.burger-item');
let anim1 = document.querySelectorAll('.nav-item');

function navAnimation(){ 
    anim1.forEach(element => {
        if (element.classList.contains('hide') == true){
            gsap.fromTo(element, {y:0, opacity:1},
                {y:30, duration:0.8, delay:0.2, opacity:0, ease: "power1"
            })
        }
        else{
            gsap.fromTo(element, {y:30, opacity:0},
                {y:0, duration:0.6, delay:0.2,  opacity:1, ease: "power1"})

        }
    });


    anim2.forEach(element => {
        if (element.classList.contains('hide') == true){
            gsap.fromTo(element, {y:0, opacity:1},
                {y:30, duration:0.5, delay:0, opacity:0, ease: "power1"
            })
        }
        else{
            gsap.fromTo(element, {y:30, opacity:0},
                {y:0, duration:0.6, delay:0.6,  opacity:1, ease: "power1"})

        }
    });
}


navButton.addEventListener('click', e =>{
    navItem.forEach(element => {
        element.classList.toggle('hide')
    });
    document.querySelector('.nav__burger').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
    navAnimation()
})


const nav = document.querySelector('nav')
function toggleTopMenu (){
    if (pageYOffset > 30) {
      nav.classList.add('is-scroll')}
       else
      {nav.classList.remove('is-scroll')}
      }
window.addEventListener('scroll', toggleTopMenu);

const menuLinks = document.querySelectorAll(".menu-link[data-goto]")
if (menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    })
    function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".nav__content").offsetHeight + 20;
            if(menuLink.classList.contains("burger-item")){
                navButton.click();
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
            e.preventDefault()
        }
    }

}


























let swiper = new Swiper(".mySwiper", {
    autoHeight: false,
    slidesPerView: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    loop: false,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: ".swiper-pagination",
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return current + ' — ' + (total); 
        }
    },
    breakpoints: {
        1100:{
            slidesPerView:4,
        },
        800:{
            slidesPerView:3,
        },
        500:{
            slidesPerView: 2,

        }
    }
  });