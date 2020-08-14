// {/* <h1 class="title">Contact us</h1>
// <div class="info">
//   <div><span class="contact-type">Phone: </span>753 321 9982</div>
//   <div><span class="contact-type">Email: </span>contactus@pickledbanana.com</div>
//   <div><span class="contact-type">Address: </span>423 Spring Turnover, ZX, USA</div>
// </div> */}

let contactPage = document.createElement('section');
contactPage.classList.add('page');
contactPage.id = 'page-contact';

let title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Contact Us'
contactPage.appendChild(title);

let info = document.createElement('div');
info.classList.add('info');
contactPage.appendChild(info);

let ct = ['Phone: ', 'Email: ', 'Address: '];
let cd = ['753 321 9982', 'contactus@bombinbanana.com', '423 Spring Turnover, ZX, USA'];

for (let i = 0; i < 3; i++) {
  let contactContainer = document.createElement('div');
  let contact = document.createElement('span');
  contact.classList.add('contact-type');
  contact.textContent = ct[i];
  contactContainer.appendChild(contact);
  contactContainer.appendChild(document.createTextNode(cd[i]));
  info.appendChild(contactContainer);
}

export {contactPage as default};


