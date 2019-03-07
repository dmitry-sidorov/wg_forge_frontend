import $createTable from "../orders/createTable";
import $renderTableBody from "../orders/renderTableBody";
import $onClickUserData from "../orders/onClickUserData";

export default function (controller) { 
  const sayHi = () => {
    console.log('Hi! View is here!', this);
  }
  const createTable = (orders, selector, headings) => {
    $createTable(orders, selector, headings);
  }
  const updateTable = (orders, selector, headings) => {
    $renderTableBody(orders);
    $onClickUserData(order, controller);
  }
  const onClick = (targetSelector) => {
    let target = document.querySelector(targetSelector);
    target.addEventListener('click', (e) => controller.handleEvent(e)); 
  }
  return { sayHi, createTable, updateTable, onClick};
}
