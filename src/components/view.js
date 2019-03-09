import $createTable from "../orders/createTable";
import $createDOMElement from "../DOM/createElement";
import $createOrderRow from "../orders/createRow";
import renderDetails from "../userDetails/renderDetails";

export default function (controller) { 
  const sayHi = () => {
    console.log('Hi! View is here!', this);
  }

  const createTable = (orders, selector, headings) => {
    $createTable(orders, selector, headings);
    renderTableBody(orders);
  }

  const onClickUserData = (order) => {
    let userData = document.querySelector(`#order_${order.id} .user-link`);
    userData.addEventListener('click', () => {
      let userDetails = controller.getUserDetails(order.user_id);
      renderDetails(order, userDetails);
    });
  }

  const renderTableBody = (orders) => {
    let tbody = document.querySelector('tbody');
    let table = document.querySelector('table');
    if (tbody !== null) {
      table.removeChild(tbody);
    }
    $createDOMElement('tbody', 'table');
    orders.forEach(order => {
      $createOrderRow(order, 'tbody');
      onClickUserData(order);
    });
  }

  return { sayHi, createTable };
}
