import $createTable from "../orders/createTable";
import $renderTableBody from "../orders/renderTableBody";

export default function (controller) { 
  const sayHi = () => {
    console.log('Hi! View is here!', this);
  }
  const createTable = (orders, selector, headings) => {
    $createTable(orders, selector, headings);
  }
  const updateTable = (orders, selector, headings) => {
    $renderTableBody(orders);
  }
  return { sayHi, createTable, updateTable };
}
