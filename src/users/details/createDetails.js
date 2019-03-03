import createElement from "../../DOM/createElement";
import convertTimestamp from "../../utils/convertTimestamp";

export default function (order, user, companies) {
  let currentOrderId = `#order_${order.id}`;
  createElement('div', `${currentOrderId} .user-data`, {class: 'user-details'});
  if (user.birthday !== null) {
    let birthday = `Birthday: ${convertTimestamp(user.birthday)}`;
    createElement('p', `${currentOrderId} .user-details`, {}, birthday);
  }
  if (user.avatar !== null) {
    createElement('p', `${currentOrderId} .user-details`, {class: 'image-container'});
    createElement('img', `${currentOrderId} .image-container`, {src: user.avatar, width: '100px'});
  }
  if (user.company_id !== null) {
    createElement('p', `${currentOrderId} .user-details`, {class: 'company'}, 'Company:');
    let currentCompany = {};
    companies.forEach(company => {
      if (company.id === user.company_id) {
        currentCompany = company;
      }
    });
    if (currentCompany.industry !== 'n/a' && currentCompany.sector !== 'n/a') {
      createElement('a', `${currentOrderId} .company`, {href: currentCompany.url, target: '_blank'}, currentCompany.title);
      createElement('p', `${currentOrderId} .user-details`, {}, `Industry: ${currentCompany.industry} / ${currentCompany.sector}`);
    }
  }
}