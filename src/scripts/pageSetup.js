let structure = document.querySelector('#structure');

// HEADER
let header = document.createElement('header');
header.id = 'navigation';
let headerTitle = document.createElement('h1');
headerTitle.classList.add('title');
headerTitle.textContent = 'The Pickled Banana';
let headerNav = document.createElement('nav');
headerNav.classList.add('nav');

header.appendChild(headerTitle);
header.appendChild(headerNav);

let navItemContent = ['X', 'Homepage', 'Menu', 'About', 'Contact'];
for (let i = 0; i < 5; i++) {
  let navItem = document.createElement('div');
  navItem.classList.add('nav-item');
  if (i == 0) {
    navItem.id = 'nav-exit';
    navItem.style.padding = '5px 10px';
  }
  if (i == 1) {
    navItem.classList.add('current-tab');
  }
  let navLink = document.createElement('a');
  navLink.setAttribute('href', '#');
  navLink.textContent = navItemContent[i];
  navItem.appendChild(navLink);

  // change #content's children here
  navItem.addEventListener('click', () => {
    let navItems = document.querySelectorAll('.nav-item');
    for (let navItem of navItems) {
      navItem.classList.remove('current-tab');
    }
    navItem.classList.add('current-tab');
  });


  headerNav.appendChild(navItem);
}

let menuBar = document.createElement('div');
menuBar.id = 'menu-bar';
let menuBarLink = document.createElement('a');
menuBarLink.setAttribute('href', '#');
menuBarLink.textContent = '=';
menuBar.appendChild(menuBarLink);
header.appendChild(menuBar);

structure.appendChild(header);

// TAB CONTENT

let contentTab = document.createElement('section');
contentTab.id = 'content-tab';
let content = document.createElement('div');
content.id = 'content';

contentTab.appendChild(content);
structure.appendChild(contentTab);

export {structure as default};