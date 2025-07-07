const burger = document.querySelector('.header-burger');
const nav = document.querySelector('.header-nav');
const close =document.querySelector('.header-nav__close');



burger.addEventListener('click', () => {
  if (window.innerWidth <= 376) {
    nav.classList.add('open');
  }
});

close.addEventListener('click', () => {
  if (window.innerWidth <= 376) {
    nav.classList.remove('open');
  }
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 376) {
    nav.classList.remove('open');
  }
})


