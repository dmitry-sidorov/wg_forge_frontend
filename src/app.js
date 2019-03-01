import orders from '../data/orders.json';
import users from '../data/users.json';
import createElement from './utils/createElement.js';
import createOrderRow from './utils/createOrderRow.js';
import addUserInfo from './utils/addUserInfo.js';
import addUserDetails from './utils/addUserDetails.js';


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
      addUserDetails(order, user);
    });
  });  

// add on-click listener
const userDetails = document.querySelectorAll('.user-details');
userDetails.style.display = 'none';
const userLink = document.querySelector('.user-link');
console.log('user-link', userLink);
userLink.addEventListener('click', (e) => {
  userDetails.style.display = 'block';
  console.log('click', e);
});

}());
