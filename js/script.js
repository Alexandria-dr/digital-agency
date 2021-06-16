const navButton = document.querySelector('#b6')
const navItem = document.querySelectorAll('.nav-item, .burger-item')

navButton.addEventListener('click', e =>{
    // navButton.classList.toggle('active')
    navItem.forEach(element => {
        element.classList.toggle('hide')
    });
    document.querySelector('.nav__burger').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
})

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