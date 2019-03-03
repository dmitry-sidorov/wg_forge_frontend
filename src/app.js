import orders from '../data/orders.json';
import users from '../data/users.json';
import companies from '../data/companies.json';
import createElement from './DOM/createElement.js';
import createOrderRow from './orders/createRow.js';
import addUserInfo from './users/addInfo.js';
import renderUserDetails from './users/details/render.js';


export default (function () {
  // create table headings
  const app = document.querySelector('#app');
  createElement('div', '#app', {class: 'table-container'});
  createElement('table', '.table-container');
  createElement('thead', 'table');
  createElement('tr', 'thead');
  const tableHeadings = [
    'Transaction ID',
    'User Info',
    'Order Date',
    'Order Amount',
    'Card Number',
    'Card Type',
    'Location'
  ];
  tableHeadings.forEach(heading => {
    createElement('th', 'tr', {}, heading)
  });
  createElement('tbody', 'table');
  orders.forEach(order => {
    createOrderRow(order, 'tbody');
  });

  //add user info and details
  orders.forEach(order => {
    users.forEach(user => {
      addUserInfo(order, user);
      // addUserDetails(order, user);
    });
  });  

// add on-click listener

orders.forEach(order => {
  let userLink = document.querySelector(`#order_${order.id} .user-link`);
  let currentUser = users.filter(user => user.id === order.user_id)[0];

  // console.log('order: ', order.id);
  // console.log('user_ver.1: ', currentUser);
  userLink.addEventListener('click', (e) => {
    console.log(e);
    renderUserDetails(order, currentUser, companies);
    // renderUserDetails(order, currentUser);
  });
});

}());
