import $createDOMElement from "../DOM/createElement";

export default function (stats) {
  $createDOMElement('tr', 'tbody', { class: 'stats-count' });
  $createDOMElement('td', '.stats-count', { class: 'text', colspan: 2 }, 'Orders Count: ');
  $createDOMElement('td', '.stats-count', { class: 'value', colspan: 5 }, `${stats.count}`);
  $createDOMElement('tr', 'tbody', { class: 'stats-total' });
  $createDOMElement('td', '.stats-total', { class: 'text', colspan: 2 }, 'Orders Total: ');
  $createDOMElement('td', '.stats-total', { class: 'value', colspan: 5 }, `${stats.total}`);
  $createDOMElement('tr', 'tbody', { class: 'stats-median' });
  $createDOMElement('td', '.stats-median', { class: 'text', colspan: 2 }, 'Median Value: ');
  $createDOMElement('td', '.stats-median', { class: 'value', colspan: 5 }, `${stats.median}`);
  $createDOMElement('tr', 'tbody', { class: 'stats-average' });
  $createDOMElement('td', '.stats-average', { class: 'text', colspan: 2 }, 'Average Check: ');
  $createDOMElement('td', '.stats-average', { class: 'value', colspan: 5 }, `${stats.average}`);
  $createDOMElement('tr', 'tbody', { class: 'stats-average-female' });
  $createDOMElement('td', '.stats-average-female', { class: 'text', colspan: 2 }, 'Average Check (Female): ');
  $createDOMElement('td', '.stats-average-female', { class: 'value', colspan: 5 }, `${stats.averageFemale}`);
  $createDOMElement('tr', 'tbody', { class: 'stats-average-male' });
  $createDOMElement('td', '.stats-average-male', { class: 'text', colspan: 2 }, 'Average Check (Male): ');
  $createDOMElement('td', '.stats-average-male', { class: 'value', colspan: 5 }, `${stats.averageMale}`);
}