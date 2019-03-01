import orders from '../data/orders.json';

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

  function createElement(tagName, parentSelector, attributes = {}, content = "") {
    let element = document.createElement(tagName);
    let parent = document.querySelector(parentSelector);
    for (let item in attributes) {
      element.setAttribute(item, attributes[item])
    }
    element.textContent = content;
    parent.appendChild(element);
    // console.log(arguments);
  }

  function createOrderRow(order, parentSelector) {
    let orderId = `#order_${order.id}`;
    createElement('tr', parentSelector, {id: `order_${order.id}`});
      createElement('td', orderId, {class: 'transaction-id'}, order.transaction_id);
      createElement('td', orderId, {class: 'user-data'}, order.user_id);
      createElement('td', orderId, {class: 'created-at'}, order.created_at);
      createElement('td', orderId, {class: 'total'}, order.total);
      createElement('td', orderId, {class: 'card-number'}, hideCardNumber(order.card_number));
      createElement('td', orderId, {class: 'card-type'}, order.card_type);
      createElement('td', orderId, {class: 'location'}, `${order.order_country} (${order.order_ip})`);
  }


// const ord = {
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

function hideCardNumber (cardNumber) {
  return cardNumber.toString().split('').map((char, i) => (i > 1 && i < cardNumber.length - 4) ? '*' : char).join('');
}

}());
