import createDOMElement from "../DOM/createElement";
import createOrderRow from "./createRow";

export default function (orders, parentSelector, tableHeadings) {
  createDOMElement('div', parentSelector, { class: 'table-container' });
  createDOMElement('table', '.table-container', { class: 'table table-light table-striped table-sm' });
  createDOMElement('thead', 'table', { class: 'table-dark' });
  createDOMElement('tr', 'thead');
  tableHeadings.forEach(heading => {
    createDOMElement('th', 'tr', { class: `${heading.class}` }, heading.content)
  });
  createDOMElement('tbody', 'table');
  orders.forEach(order => {
    createOrderRow(order, 'tbody');
  });
}