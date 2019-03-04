import createDOMElement from '../DOM/createElement.js';
import hideCardNumber from '../utils/hideCardNumber.js';
import convertTimestamp from '../utils/convertTimestamp.js';

export default function (order, parentSelector) {
  let orderId = `#order_${order.id}`;
  createDOMElement('tr', parentSelector, {id: `order_${order.id}`});
  createDOMElement('td', orderId, { class: 'transaction-id' }, order.transaction_id);
  createDOMElement('td', orderId, { class: 'user-data' }, order.user_id);
  createDOMElement('td', orderId, { class: 'created-at' }, convertTimestamp(order.created_at));
  createDOMElement('td', orderId, { class: 'total' }, order.total);
  createDOMElement('td', orderId, { class: 'card-number' }, hideCardNumber(order.card_number));
  createDOMElement('td', orderId, { class: 'card-type' }, order.card_type);
  createDOMElement('td', orderId, { class: 'location' }, `${order.order_country} (${order.order_ip})`);
}