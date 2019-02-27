// this is an example of improting data from JSON
import orders from '../data/orders.json';

export default (function () {
  // create table headings
  const app = document.querySelector('#app');
  const tableContainer = document.createElement('div');
  tableContainer.setAttribute('class', 'table-container');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const tbody = document.createElement('tbody');
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
    let th = document.createElement('th')
    th.textContent = heading;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  orders.forEach(order => {
    let orderRow = document.createElement('tr');
    let orderId = `order_${order.id}`;
    orderRow.setAttribute('id', orderId);
    let transactionId = document.createElement('td'); 
    transactionId.textContent = order.transaction_id;
    orderRow.appendChild(transactionId);
    let userData = document.createElement('td');
    userData.textContent = order.user_id;
    userData.setAttribute('class', 'user_data');
    orderRow.appendChild(userData);
    let createdAt = document.createElement('td');
    createdAt.textContent = order.created_at;
    orderRow.appendChild(createdAt);
    let orderAmount = document.createElement('td');
    orderAmount.textContent = `$${order.total}`;
    orderRow.appendChild(orderAmount);
    let cardNumber = document.createElement('td');
    cardNumber.textContent = hideCardNumber(order.card_number);
    orderRow.appendChild(orderAmount);
   



    // for (let prop in order) {
    //   let td = document.createElement('td');
    //   td.textContent = order[prop];
    //   tr.appendChild(td);
    // }
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  tableContainer.appendChild(table);
  app.appendChild(tableContainer);


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
  return (typeof cardNumber === 'string' && cardNumber.length === 16 && cardNumber === /[0-9]+/) ? cardNumber.split().splice(2, 10, '**********').join(',') : null;

}


}());
