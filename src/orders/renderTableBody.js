import createOrderRow from "./createRow";
import createDOMElement from "../DOM/createElement";
import addUserInfo from "../users/addInfo"
import users from "../../data/users.json"

export default function (orders) {
  let tbody  = document.querySelector('tbody');
  let table = document.querySelector('table');
  if (tbody !== null) {
    table.removeChild(tbody);
  }
  createDOMElement('tbody', 'table');
  orders.forEach(order => {
    createOrderRow(order, 'tbody');
  });
  orders.forEach(order => {
    users.forEach(user => {
      addUserInfo(order, user);
    });
  });  
}