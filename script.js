var options = {
  strings: [ 'Desenvolvedor Front End', 'Web Designer', 'Desenvolvedor WordPress'],
  loop: true,
  startDelay: 1000,
  typeSpeed: 85,
  smartBackspace: true
};

var typed = new Typed('.element', options);


let menuMobile = document.querySelector('.mobile-menu')
let menuButton = document.querySelector('.mobile-button')
let bxx = document.querySelector('.bx-x')
let itemMenu = document.querySelectorAll('.item')

menuButton.addEventListener('click', menu)

bxx.addEventListener('click', menu)
itemMenu[0].addEventListener('click', menu)
itemMenu[1].addEventListener('click', menu)
itemMenu[2].addEventListener('click', menu)
itemMenu[3].addEventListener('click', menu)
itemMenu[4].addEventListener('click', menu)
itemMenu[5].addEventListener('click', menu)

function menu() {
  menuMobile.classList.toggle('show')
}