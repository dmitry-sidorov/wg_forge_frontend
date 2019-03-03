import createElement from "./createElement";
import modifyElement from "./modifyElement";

export default function (order, user) {
  if (user.id === order.user_id) {
  let gender = (user.gender === 'Male') ? 'Mr.' : 'Ms.';
  let message = `${gender} ${user.first_name} ${user.last_name}`;
  modifyElement(`#order_${order.id} .user-data`, {id: `user-id_${user.id}`}, '');
  createElement('a', `#order_${order.id} .user-data`, {href: `#order_${order.id}`, class: 'user-link'}, message)
  }
}