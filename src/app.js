import defaultOrders from '../data/orders.json';
import users from '../data/users.json';
import companies from '../data/companies.json';
import createDOMElement from './DOM/createElement.js';
import createOrderRow from './orders/createRow.js';
import addUserInfo from './users/addInfo.js';
import renderUserDetails from './users/details/renderDetails.js';
import createSpecChar from './DOM/createSpecChar.js';

let orders = defaultOrders;

export default (function () {
  // create table headings
  const app = document.querySelector('#app');
  // createSpecChar('div', '#app', {}, '&#8595');

  // const arrow = document.createElement('div');
  // arrow.innerHTML = '&#8595';
  // app.appendChild(arrow);


  createDOMElement('div', '#app', {class: 'table-container'});
  createDOMElement('table', '.table-container', {class: 'table table-light table-hover table-sm'});
  createDOMElement('thead', 'table');
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
    createDOMElement('th', 'tr', {class: `${heading.class} table-dark`}, heading.content)
  });
  createDOMElement('tbody', 'table', {class: ''});
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
let filteredTableHeadings = tableHeadings.filter(heading => heading.class !== 'card-number');
filteredTableHeadings.forEach(heading => {
  let currentSelector = `thead .${heading.class}`;
  let currentHeading = document.querySelector(currentSelector);
  currentHeading.addEventListener('click', (e) => {
    createSpecChar('span', currentSelector, {class: 'arrow'}, '&#8595');
  });
});

}());
