export default function (tagName, parentSelector, attributes = {}, charCode = '') {
  let element = document.createElement(tagName);
  let parent = document.querySelector(parentSelector);
  for (let item in attributes) {
    element.setAttribute(item, attributes[item])
  }
  element.innerHTML = charCode;
  parent.appendChild(element);
}