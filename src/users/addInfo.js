import modifyDOMElement from '../DOM/modifyElement.js';
import createDOMElement from '../DOM/createElement.js';

export default function (order, user) {
  if (user.id === order.user_id) {
  let gender = (user.gender === 'Male') ? 'Mr.' : 'Ms.';
  let message = `${gender} ${user.first_name} ${user.last_name}`;
  modifyDOMElement(`#order_${order.id} .user-data`, {id: `user-id_${user.id}`}, '');
  createDOMElement('a', `#order_${order.id} .user-data`, {href: `#order_${order.id}`, class: 'user-link'}, message)
  }
}