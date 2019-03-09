import $createElement from "../DOM/createElement";
import convertTimestamp from "../utils/convertTimestamp";

export default function (order, userDetails) {
  let currentOrderId = `#order_${order.id}`;
  $createElement('div', `${currentOrderId} .user-data`, {class: 'user-details'});
  if (userDetails.birthday !== null) {
    let birthday = `Birthday: ${convertTimestamp(userDetails.birthday)}`;
    $createElement('p', `${currentOrderId} .user-details`, {}, birthday);
  }
  if (userDetails.avatar !== null) {
    $createElement('p', `${currentOrderId} .user-details`, {class: 'image-container'});
    $createElement('img', `${currentOrderId} .image-container`, {src: userDetails.avatar, width: '100px'});
  }
    $createElement('p', `${currentOrderId} .user-details`, {class: 'company'}, 'Company: ');
  if (userDetails.company.industry !== 'n/a' && userDetails.company.sector !== 'n/a') {
    $createElement('a', `${currentOrderId} .company`, {href: userDetails.company.url, target: '_blank'}, userDetails.company.title);
    $createElement('p', `${currentOrderId} .user-details`, {}, `Industry: ${userDetails.company.industry} / ${userDetails.company.sector}`);
  }
}
