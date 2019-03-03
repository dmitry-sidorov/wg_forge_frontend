import createUserDetails from './createDetails.js';
import removeUserDetails from './removeDetails.js';

export default function (order, user, companies) {
  let userDetails = document.querySelector(`#order_${order.id} .user-details`);
  console.log('user details block: ', userDetails);
  if (userDetails === null) {
    createUserDetails(order, user, companies);
  } else {
    removeUserDetails(order);
  }
}