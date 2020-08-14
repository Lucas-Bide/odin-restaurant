import contactPage from './contact.js';
import aboutPage from './about.js';
import menuPage from './menu.js';

let structure = document.querySelector('#structure');

// HEADER
let header = document.createElement('header');
header.id = 'navigation';
let headerTitle = document.createElement('h1');
headerTitle.classList.add('brand-title');
headerTitle.textContent = 'The Bombin\' Banana';
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
  if (navItem.id != 'nav-exit') {
    navItem.addEventListener('click', () => {
      // Select clicked tab
      let navItems = document.querySelectorAll('.nav-item');
      for (let navItem of navItems) {
        navItem.classList.remove('current-tab');
      }
      navItem.classList.add('current-tab');

      // Replace content
      content.style.overflowY = 'scroll';
      let page = content.querySelector('.page');
      let current = document.querySelector('.current-tab');
      let nextPage;
      switch (current.textContent) {
        case 'Homepage':
          nextPage =  null;//homepage;
          break;
        case 'Menu':
          nextPage =  menuPage;//menuPage;
          content.style.overflowY = 'hidden';
          break;
        case 'About':
          nextPage = aboutPage;// aboutPage;
          break;
        case 'Contact':
          nextPage = contactPage;
          break;
      }

      if (page == null) {
        content.appendChild(nextPage);
      }
      else if (page.id != nextPage.id) {
        content.removeChild(page);
        content.appendChild(nextPage);
      }

      // Hide menu on mobile
      let navExit = document.querySelector('#nav-exit');
      if (navExit.style.display == 'block') {
        navExit.dispatchEvent(new Event('click'));
      }
    });
  }
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

// Set default page

content.appendChild(menuPage);

export {structure as default};