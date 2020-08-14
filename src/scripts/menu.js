import appetizer1 from '../images/appetizer-1.jpg';
import appetizer2 from '../images/appetizer-2.jpg';
import appetizer3 from '../images/appetizer-3.jpg';
import entree1 from '../images/entree-1.jpg';
import entree2 from '../images/entree-2.jpg';
import entree3 from '../images/entree-3.jpg';
import soup1 from '../images/soup-1.jpg';
import soup2 from '../images/soup-2.jpg';
import soup3 from '../images/soup-3.jpg';
import salad1 from '../images/salad-1.jpg';
import salad2 from '../images/salad-2.jpg';
import salad3 from '../images/salad-3.jpg';
import desert1 from '../images/dessert-1.jpg';
import desert2 from '../images/dessert-2.jpg';
import desert3 from '../images/dessert-3.jpg';


let menuPage = document.createElement('section');
menuPage.classList.add('page');
menuPage.id = 'page-menu';

let menuTabs = document.createElement('nav');
menuTabs.classList.add('menu-nav');
menuPage.appendChild(menuTabs);

let tc = ['Appetizers', 'Entrees', 'Soups', 'Salads', 'Desserts', 'Drinks'];
for (let i = 0; i < 6; i++) {
  let tab = document.createElement('div');
  tab.classList.add('menu-nav-tab');

  if (i == 0) {
    tab.classList.add('current-menu-tab');
  }
  
  tab.addEventListener('click', () => {
    let tabs = document.querySelectorAll('.menu-nav-tab');
    for (let tab of tabs) {
      tab.classList.remove('current-menu-tab');
    }
    tab.classList.add('current-menu-tab');

    // Replace content
    let page = document.querySelector('.menu-page');
    let current = document.querySelector('.current-menu-tab');
    let nextPage;
    switch (current.textContent) {
      case 'Appetizers':
        nextPage =  appetizer;
        break;
      case 'Entrees':
        nextPage =  entree;
        break;
      case 'Soups':
        nextPage = soup;
        break;
      case 'Salads':
        nextPage = salad;
        break;
      case 'Desserts':
        nextPage = dessert;
        break;
      case 'Drinks': 
        nextPage = drinks;
        break;
    }

    if (page.id != nextPage.id) {
      menuContent.removeChild(page);
      menuContent.appendChild(nextPage);
    }
  });

  let tabLink = document.createElement('a');
  tabLink.classList.add('menu-nav-tab-link');
  tabLink.setAttribute('href', '#');
  tabLink.textContent = tc[i];
  tab.appendChild(tabLink);

  menuTabs.appendChild(tab);
}
/// Need to append appetizers
let menuContent = document.createElement('div');
menuContent.classList.add('menu-content');
// menuContent.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, omnis molestias aut illo dignissimos eligendi reprehenderit similique cumque dolor exercitationem perspiciatis, quia sapiente temporibus. Inventore earum natus dolores omnis nostrum, perspiciatis aliquid. Placeat et dignissimos commodi amet labore magni vel consequatur, eaque laudantium ipsum exercitationem, facilis repudiandae debitis quae repellat sint! Excepturi consequuntur fugit magnam provident, repudiandae corporis, totam maiores ea deleniti reiciendis itaque officia architecto aut repellendus est iusto non, nesciunt aspernatur! Itaque nisi qui similique fugit ad ex odit dolores! Perspiciatis quas molestiae unde molestias dolor corrupti alias, ad vel optio nostrum voluptates animi deleniti adipisci quaerat labore reiciendis sed a, qui, aspernatur veritatis? Voluptate laborum, quibusdam doloribus harum voluptatum provident. Officia quaerat autem ad sapiente tempora nam minus, unde hic quod maiores reprehenderit recusandae, harum repellendus ab, eum perferendis tempore. Cumque vitae, accusantium voluptatem dicta facilis aperiam assumenda ex doloremque odio nisi rerum natus eaque ipsa cupiditate iusto voluptatum nemo voluptatibus autem excepturi blanditiis tempore! Recusandae veritatis provident vitae aliquam. Sint repudiandae facere nostrum, libero cupiditate earum quia quas quae, accusamus tempora exercitationem magnam sunt quos! Laborum deserunt eligendi atque! Dignissimos minus magni aliquam iste temporibus, iure beatae vel perferendis libero? Aperiam quam blanditiis perspiciatis quidem quae?';
menuPage.appendChild(menuContent);


// // Delete
// let tester = document.createElement('div');
// tester.classList.add('tester');
// menuContent.appendChild(tester);

let appetizer = menuCategory('appetizer', appetizer1, appetizer2, appetizer3);
let entree = menuCategory('entree', entree1, entree2, entree3);
let soup = menuCategory('soup', soup1, soup2, soup3);
let salad = menuCategory('salad', salad1, salad2, salad3);
let dessert = menuCategory('dessert', desert1, desert2, desert3);
let drinks = menuCategory('drinks');


menuContent.appendChild(appetizer);

export {menuPage as default};

function menuItem(picHref) {
  let item = document.createElement('div');
  item.classList.add('menu-item');

  let pic = new Image();//document.createElement('div');//img');
  pic.src = picHref;
  pic.classList.add('menu-item-pic');
  // pic.setAttribute('src', picHref);
  // pic.setAttribute('alt', 'A menu Item');

  let title = document.createElement('h1');
  title.classList.add('subtitle');
  title.textContent = 'Lorem Dorem - ';

  let price = document.createElement('span');
  price.classList.add('emphasis');
  price.textContent = `$${Math.floor(Math.random() * 20) + 1}.00`;
  title.appendChild(price);

  let desc = document.createElement('p');
  desc.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, facere incidunt!';

  item.appendChild(pic);
  item.appendChild(title);
  item.appendChild(desc);
  
  return item;
}

function menuCategory(id, ...pics) {
  let cat = document.createElement('div');
  cat.classList.add('menu-page');
  cat.id = `menu-${id}`;

  if (id != 'drinks') {
    for (let pic of pics) {
      cat.appendChild(menuItem(pic));
    }
  }
  else {
    // Some paragraphs with nonalcoholic, alcoholic, smoothie, etc.
    let types = ['Nonalcoholic', 'Alcoholic', 'Hot'];
    let drinks = [['Soda', 'Water', 'Smoothie'], ['Wine', 'Beer', 'Whiskey', 'Mimosa'], ['Coffee', 'Milk', 'Tea']];
    for (let i = 0; i < 3; i++) {
      let type = document.createElement('h1');
      type.classList.add('subtitle');
      type.textContent = types[i];
      cat.appendChild(type);

      for (let drink of drinks[i]) {
        let d = document.createElement('p');
        d.textContent = drink;
        cat.appendChild(d);
      }
    }
  }
  return cat;
}