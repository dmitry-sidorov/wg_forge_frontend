import defaultOrders from '../data/orders.json';
import users from '../data/users.json';
import companies from '../data/companies.json';
import addUserInfo from './users/addInfo.js';
import renderUserDetails from './users/details/renderDetails.js';
import createSpecChar from './DOM/createSpecChar.js';
import renderSorting from './sorting/renderSorting.js';
import createTable from './orders/createTable.js';

let orders = defaultOrders;

export default (function () {
  // create table headings
  // const app = document.querySelector('#app');
  const tableHeadings = [
    { content: 'Transaction ID', class: 'transaction-id' },
    { content: 'User Info', class: 'user-info' },
    { content: 'Order Date', class: 'order-date' },
    { content: 'Order Amount', class: 'order-amount' },
    { content: 'Card Number', class: 'card-number' },
    { content: 'Card Type', class: 'card-type' },
    { content: 'Location', class: 'location' }
  ];
  createTable(orders, '#app', tableHeadings);

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
let sortingState = null;
let filteredHeadings = tableHeadings.filter(heading => heading.class !== 'card-number');
filteredHeadings.forEach(heading => {
  let currentSelector = `thead .${heading.class}`;
  let currentHeading = document.querySelector(currentSelector);
  currentHeading.addEventListener('click', (e) => {
    let spanExists = currentHeading.querySelector('.arrow');
    sortingState = renderSorting(sortingState, heading.class);
    if (spanExists === null) {
      createSpecChar('span', currentSelector, {class: 'arrow'}, '&#8595');
    } else {
      let arrow = currentHeading.querySelector('.arrow');
      currentHeading.removeChild(arrow);
    }
  });
});

}());
