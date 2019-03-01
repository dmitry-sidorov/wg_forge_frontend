import createElement from './createElement.js';
import hideCardNumber from './hideCardNumber.js';

export default function (order, parentSelector) {
  let orderId = `#order_${order.id}`;
  createElement('tr', parentSelector, { id: `order_${order.id}` });
  createElement('td', orderId, { class: 'transaction-id' }, order.transaction_id);
  createElement('td', orderId, { class: 'user-data' }, order.user_id);
  createElement('td', orderId, { class: 'created-at' }, order.created_at);
  createElement('td', orderId, { class: 'total' }, order.total);
  createElement('td', orderId, { class: 'card-number' }, hideCardNumber(order.card_number));
  createElement('td', orderId, { class: 'card-type' }, order.card_type);
  createElement('td', orderId, { class: 'location' }, `${order.order_country} (${order.order_ip})`);
}