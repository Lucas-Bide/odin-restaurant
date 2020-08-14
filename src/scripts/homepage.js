import front from '../images/storefront.jpg';
import banana from '../images/banana.png';


let homepage = document.createElement('section');
homepage.classList.add('page');
homepage.id = 'page-home';

let title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Welcome to the Bombin\' Banana!';
homepage.appendChild(title);

let storefront = new Image(300);
storefront.src = front;
storefront.classList.add('home-pic');
homepage.appendChild(storefront);

let about = document.createElement('p');
about.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio illum, facere enim quidem perspiciatis saepe tempora ratione, fugiat dicta, aspernatur dolores! Magnam odit labore atque veniam ipsa nisi voluptatibus eos vel corrupti fugiat tempora, architecto velit cumque qui quis hic rem officia ducimus totam, dignissimos itaque! Beatae ex, aliquid expedita, animi quisquam doloremque optio qui doloribus blanditiis accusamus, neque magni distinctio? Fugit quis sed eum, odit quam iste debitis, ratione accusamus necessitatibus velit facere nam delectus fugiat? Illo ipsam accusamus reiciendis eos animi voluptatum natus minus id culpa impedit incidunt nihil cumque, corporis modi consectetur, atque aperiam dolorem commodi dignissimos.';
homepage.appendChild(about);

let b = new Image();
b.src = banana;
b.classList.add('home-banana');
homepage.appendChild(b);


export {homepage as default};
