let navMain = document.querySelector('.navigation');
let navHeader = document.querySelector('.main-header');
let navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navHeader.classList.contains('main-header__nav')) {
    navHeader.classList.remove('main-header__nav');
  } else {
    navHeader.classList.add('main-header__nav');
  }
});


navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});
