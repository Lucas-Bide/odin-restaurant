import '../scss/index.scss';

// Navigation

let menuBar = document.querySelector('#menu-bar');
let navExit = document.querySelector('#nav-exit');
let nav = document.querySelector('#navigation .nav');

menuBar.addEventListener('click', () => {
  nav.style.display = 'flex';
  nav.style.animation = '.5s materialize linear';
  navExit.style.display = 'block';
});

navExit.addEventListener('click', () => {
  nav.style.animation = 'none';
  nav.style.animation = '.5s dematerialize';
  
  setTimeout(() => {
    nav.style.display = 'none';
    navExit.style.display = 'none';
  }, 500);
});