import Model from "./components/model";
import Controller from "./components/controller";
import View from "./components/view";

export default (function () {
  //init
  const model = Model();
  const controller = Controller(model);
  const view = View(controller);
  model.subscribe(view);
  model.print();
  model.initialize();
  let orders = model.getExtendedOrders();
  console.log('orders app: ', orders);
  // orders.forEach(order => {
  //   let tgt = document.querySelector(`#order_${order.id} .user-data`);
  //   tgt.addEventListener('click', e => console.log(order));
  // });
  


// const ordersModel = model(defaultOrders);


// ordersModel.setOrders(defaultOrders);
// console.log(ordersModel.getOrders());
// console.log('init: ', ordersModel);
// ordersModel.setSorting('card_type', sortString );
// console.log('setSorting(): ', ordersModel);
// ordersModel.resetSorting();
// console.log('resetSorting(): ', ordersModel);


// let orders = ordersModel.getOrders();


// const ordersController = controller(ordersModel, true);






  // create table headings
  // const app = document.querySelector('#app');



  //sort
/*
  createTable(orders, '#app', tableHeadings);
  const cardTypeHeading = document.querySelector('thead .card-type');
  console.log('card_type single: ', cardTypeHeading);
  cardTypeHeading.addEventListener('click', (e) => {
    ordersController.setSortingFor('card-type'); 
    orders = ordersModel.getOrders();
    renderTableBody(orders);
  });
*/
  //add user info and details
  // orders.forEach(order => {
  //   users.forEach(user => {
  //     addUserInfo(order, user);
  //   });
  // });  

// add on-click listener
/*
orders.forEach(order => {
  let userLink = document.querySelector(`#order_${order.id} .user-link`);
  let currentUser = users.filter(user => user.id === order.user_id)[0];
  userLink.addEventListener('click', (e) => {
    renderUserDetails(order, currentUser, companies);
  });
});
*/
//sort
/*
let sortingState = null;
let filteredHeadings = tableHeadings.filter(heading => heading.class !== 'card-number');
*/
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
