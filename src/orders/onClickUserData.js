export default function (order, controller) {
  let details = controller.getUserDetails(order.user_id);
  console.log('user details: ', details); 
}