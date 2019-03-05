import defaultOrders from '../data/orders.json';
import users from '../data/users.json';
import companies from '../data/companies.json';
import addUserInfo from './users/addInfo.js';
import renderUserDetails from './users/details/renderDetails.js';
import createSpecChar from './DOM/createSpecChar.js';
import sortBy from './sorting/sortBy.js';
import sortString from './sorting/sortString.js';
import model from './orders/ordersModel.js';
import controller from './orders/ordersController.js';
import createTable from './orders/createTable.js';
import renderTableBody from './orders/renderTableBody.js';

export default (function () {

Array.prototype.sortBy = sortBy;

const ordersModel = model(defaultOrders);


// ordersModel.setOrders(defaultOrders);
// console.log(ordersModel.getOrders());
console.log('init: ', ordersModel);
ordersModel.setSorting('card_type', sortString );
// console.log('setSorting(): ', ordersModel);
ordersModel.resetSorting();
// console.log('resetSorting(): ', ordersModel);


let orders = ordersModel.getOrders();


const ordersController = controller(ordersModel);






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

  //sort
  createTable(orders, '#app', tableHeadings);
  const cardTypeHeading = document.querySelector('thead .card-type');
  console.log('card_type single: ', cardTypeHeading);
  cardTypeHeading.addEventListener('click', (e) => {
    ordersController.setSortingFor('card-type'); 
    orders = ordersModel.getOrders();
    renderTableBody(orders);
  });

  //add user info and details
  // orders.forEach(order => {
  //   users.forEach(user => {
  //     addUserInfo(order, user);
  //   });
  // });  

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

/*
filteredHeadings.forEach(heading => {
  let currentSelector = `thead .${heading.class}`;
  let currentHeading = document.querySelector(currentSelector);
  currentHeading.addEventListener('click', (e) => {
    let spanExists = currentHeading.querySelector('.arrow');
    sortingState = renderSorting(sortingState, heading.class);
    if (spanExists === null) {
      createSpecChar('span', currentSelector, {class: 'arrow'}, '&#8595');
      console.log('class: ', heading.class, typeof heading.class);
      ordersController.setSortingFor(heading.class);
    } else {
      let arrow = currentHeading.querySelector('.arrow');
      currentHeading.removeChild(arrow);
      ordersController.resetAll();
    }
  });
});
*/



/*
if (spanExists === null) {
  createSpecChar('span', 'thead .card-type', {class: 'arrow'}, '&#8595');
  ordersController.setSortingFor('card-type');
} else {
  let arrow = cardTypeHeading.querySelector('.arrow');
  cardTypeHeading.removeChild(arrow);
  ordersController.resetAll();
}
*/


}());
