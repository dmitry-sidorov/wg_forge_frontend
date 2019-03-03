import createUserDetails from './create.js';
import removeUserDetails from './remove.js';

export default function (order, user, companies) {
  let userDetails = document.querySelector(`#order_${order.id} .user-details`);
  console.log('user details block: ', userDetails);
  if (userDetails === null) {
    createUserDetails(order, user, companies);
  } else {
    removeUserDetails(order);
  }
}

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