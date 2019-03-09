import $createTable from "../orders/createTable";
import $createDOMElement from "../DOM/createElement";
import $createOrderRow from "../orders/createRow";
// import $renderTableBody from "../orders/renderTableBody";

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
    console.log('from onclick', userData);
    userData.addEventListener('click', () => {
      let details = controller.getUserDetails(order.user_id);
      console.log('user details: ', details);
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
    orders.forEach(order => {
      console.log('cycle!');
      let userData = document.querySelector(`#order_${order.id} .user-link`);
      console.log('from onclick', userData);
      userData.addEventListener('click', () => {
        let details = controller.getUserDetails(order.user_id);
        console.log('user details: ', details);
      });
      // onClickUserData(order);
    });

  }

  const updateTable = (orders) => {
    renderTableBody(orders, controller);
  }
  const onClick = (targetSelector) => {
    // let target = document.querySelector(targetSelector);
    // target.addEventListener('click', (e) => controller.handleEvent(e)); 
  }
  return { sayHi, createTable, updateTable, onClick};
}
