import defaultOrders from '../data/orders.json';
import users from '../data/users.json';
import companies from '../data/companies.json';
import createDOMElement from './DOM/createElement.js';
import createOrderRow from './orders/createRow.js';
import addUserInfo from './users/addInfo.js';
import renderUserDetails from './users/details/renderDetails.js';
import createSpecChar from './DOM/createSpecChar.js';
import sortingController from './sorting/sortingController.js';

let orders = defaultOrders;

export default (function () {
  // create table headings
  const app = document.querySelector('#app');
  // createSpecChar('div', '#app', {}, '&#8595');

  // const arrow = document.createElement('div');
  // arrow.innerHTML = '&#8595';
  // app.appendChild(arrow);


  createDOMElement('div', '#app', {class: 'table-container'});
  createDOMElement('table', '.table-container', {class: 'table table-light table-striped table-sm'});
  createDOMElement('thead', 'table', {class: 'table-dark'});
  createDOMElement('tr', 'thead');
  const tableHeadings = [
    {content: 'Transaction ID', class: 'transaction-id'},
    {content: 'User Info',  class: 'user-info'},
    {content: 'Order Date', class: 'order-date'},
    {content: 'Order Amount',  class: 'order-amount'},
    {content: 'Card Number',  class: 'card-number'},
    {content: 'Card Type', class: 'card-type'},
    {content: 'Location', class: 'location'}
  ];
  tableHeadings.forEach(heading => {
    createDOMElement('th', 'tr', {class: `${heading.class}`}, heading.content)
  });
  createDOMElement('tbody', 'table');
  orders.forEach(order => {
    createOrderRow(order, 'tbody');
  });

  //add user info and details
  orders.forEach(order => {
    users.forEach(user => {
      addUserInfo(order, user);
    });
  });  

// add on-click listener
orders.forEach(order => {
  let userLink = document.querySelector(`#order_${order.id} .user-link`);
  let currentUser = users.filter(user => user.id === order.user_id)[0];
  userLink.addEventListener('click', (e) => {
    renderUserDetails(order, currentUser, companies);
  });
});

//sort
let filteredHeadings = tableHeadings.filter(heading => heading.class !== 'card-number');
filteredHeadings.forEach(heading => {
  let currentSelector = `thead .${heading.class}`;
  let currentHeading = document.querySelector(currentSelector);
  currentHeading.addEventListener('click', (e) => {
    let spanExists = currentHeading.querySelector('.arrow');
    if (spanExists === null) {
      createSpecChar('span', currentSelector, {class: 'arrow'}, '&#8595');
      sortingController(heading.class);
    } else {
      let arrow = currentHeading.querySelector('.arrow');
      currentHeading.removeChild(arrow);
      sortingController(heading.class);
    }
  });
});

}());
