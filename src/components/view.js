import $createDOMElement from "../DOM/createElement";
import $createOrderRow from "../orders/createRow";
import renderDetails from "../userDetails/renderDetails";
import $createSpecChar from "../DOM/createSpecChar";

export default function (controller) { 

  const createArrow = (headingSelector) => {
    removeArrows();
    $createSpecChar('span', `.${headingSelector}`, { class: 'arrow' }, '  &#8595');
  }

  const removeArrows = () => {
    let arrow = document.querySelector('.arrow');
    if (arrow !== null) {
      let parent = arrow.parentElement;
      parent.removeChild(arrow);
    }
  }

  const createTableHead = (orders, parentSelector, tableHeadings) => {
    $createDOMElement('div', parentSelector, { class: 'table-container' });
    $createDOMElement('table', '.table-container', { class: 'table table-light table-striped table-sm table-bordered' });
    $createDOMElement('thead', 'table', { class: 'table-dark' });
    $createDOMElement('tr', 'thead');
    tableHeadings.forEach(heading => {
      console.log(heading);
      $createDOMElement('th', 'tr', { class: `${heading.class}` }, heading.content);
      if (heading.class !== 'card-number') {
        let selector = document.querySelector(`.${heading.class}`);
        // selector.style.cssText = `th: {cursor: pointer}`;
        selector.addEventListener('click', () => {
          let arrowCreated = controller.handleSorting(heading.class);
          if (!arrowCreated) {
            createArrow(heading.class);
          } else {
            removeArrows();
          }
        });
      }
    });
  }



  const createTable = (orders, selector, headings) => {
    createTableHead(orders, selector, headings);
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

  return { createTable, renderTableBody };
}
