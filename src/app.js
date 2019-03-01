import orders from '../data/orders.json';
import users from '../data/users.json';
import createElement from './utils/createElement.js';
import createOrderRow from './utils/createOrderRow.js';


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

  //fill user info
  users.forEach(user => {
    orders.forEach(order => {
        if (user.id=== order.user_id) {
          let gender = (user.gender === 'Male') ? 'Mr.' : 'Ms.';
          let message = `${gender} ${user.first_name} ${user.last_name}`;
          let link = document.createElement('a');
          link.setAttribute('href', '#');
          link.textContent = message;
          let userData = document.querySelector(`#order_${order.id} .user-data`);
          userData.textContent = '';
          userData.appendChild(link);
        }
    });
  });  
  
  // orders.forEach(order => {
  //   console.log(convertTimestamp(order.created_at));
  // });



  // function addZero (num) {
  //   return (num < 10) ? '0' + num : num.toString();
  // }



// user example
// {
//   "id": 1,
//   "first_name": "Gaylord",
//   "last_name": "Vasyutin",
//   "gender": "Male",
//   "birthday": null,
//   "avatar": "https://robohash.org/quibusdamminusea.bmp?size=100x100&set=set1",
//   "company_id": 6
// }

// order example
//  {
//   "id": 1,
//   "transaction_id": "ae35d511-b468-44b4-8529-b3574cd6d319",
//   "created_at": "1543325996",
//   "user_id": 11,
//   "total": "531.57",
//   "card_type": "jcb",
//   "card_number": "3584440309543797",
//   "order_country": "US",
//   "order_ip": "239.24.84.243"
// }



}());
