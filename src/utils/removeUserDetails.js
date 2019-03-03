export default function (order) {
  let userDetails = document.querySelector(`#order_${order.id} .user-details`);
  let userData = document.querySelector(`#order_${order.id} .user-data`);
  userData.removeChild(userDetails);
}