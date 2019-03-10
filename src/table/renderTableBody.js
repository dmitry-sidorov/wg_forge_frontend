import $createOrderRow from "./createRow";
import $createDOMElement from "../DOM/createElement";

export default function (orders, controller) {
  let tbody  = document.querySelector('tbody');
  let table = document.querySelector('table');
  if (tbody !== null) {
    table.removeChild(tbody);
  }
  $createDOMElement('tbody', 'table');
  orders.forEach(order => {
    $createOrderRow(order, 'tbody');
  });
  orders.forEach(order => $onClickUserData(order, controller));
}
