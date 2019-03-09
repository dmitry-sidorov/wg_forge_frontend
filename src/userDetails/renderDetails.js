import createUserDetails from './createDetails.js';
import removeUserDetails from './removeDetails.js';

export default function (order, userDetails) {
  let userDetailsDOM = document.querySelector(`#order_${order.id} .user-details`);
  if (userDetailsDOM === null) {
    createUserDetails(order, userDetails);
  } else {
    removeUserDetails(order);
  }
}