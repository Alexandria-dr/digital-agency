const navButton = document.querySelector('.button')
const navItem = document.querySelectorAll('.nav-item, .burger-item')

navButton.addEventListener('click', e =>{
    navButton.classList.toggle('active')
    navItem.forEach(element => {
        element.classList.toggle('hide')
    });
    document.querySelector('.nav__burger').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
})