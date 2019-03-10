import $createDOMElement from "../DOM/createElement";
import $createOrderRow from "../table/createRow";
import renderDetails from "../userDetails/renderDetails";
import $createSpecChar from "../DOM/createSpecChar";
import $createStatsTable from "../table/createStatsTable";

export default function (controller) { 

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
    createStats(orders);
  }

  const createStats = (orders) => {
    let stats = controller.getStats(orders);
    $createStatsTable(stats);
  }

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

  const createTableHead = (parentSelector, tableHeadings) => {
    $createDOMElement('div', parentSelector, { class: 'table-container' });
    $createDOMElement('div', '.table-container', {class: 'input-container d-flex'});
    $createDOMElement('input', '.input-container', {class: 'search-field form-control', type: 'text', placeholder: 'Enter here...'});
    // $createDOMElement('div', '.input-container', {class: 'input-group-append'});
    // $createDOMElemeant('button', '.input-group-append', {class: 'btn btn-outline-secondary'}, 'Search');
    const searchField = document.querySelector('.search-field');
    searchField.oninput = function () {
      console.log(searchField.value);
      let search = controller.addSearch(searchField.value);
      console.log('view res', search);
      if (search !== '') renderTableBody(search);
    }
    $createDOMElement('table', '.table-container', { class: 'table table-light table-striped table-sm table-bordered' });
    $createDOMElement('thead', 'table', { class: 'table-dark' });
    $createDOMElement('tr', 'thead');
    tableHeadings.forEach(heading => {
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
    createTableHead(selector, headings);
    renderTableBody(orders);
  }

  const onClickUserData = (order) => {
    let userData = document.querySelector(`#order_${order.id} .user-link`);
    userData.addEventListener('click', () => {
      let userDetails = controller.getUserDetails(order.user_id);
      renderDetails(order, userDetails);
    });
  }

  return { createTable, renderTableBody };
}
