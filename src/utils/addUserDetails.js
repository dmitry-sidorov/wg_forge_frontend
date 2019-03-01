import createElement from "./createElement";
import convertTimestamp from "./convertTimestamp";
import companies from "../../data/companies.json";

export default function (order, user) {
  if (user.id === order.user_id) {
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
        createElement('a', `${currentOrderId} .company`, {href: currentCompany.url}, currentCompany.title);
        createElement('p', `${currentOrderId} .user-details`, {}, `Industry: ${currentCompany.industry} / ${currentCompany.sector}`);
      }
    }
 
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