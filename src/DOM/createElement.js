export default function (tagName, parentSelector, attributes = {}, content = '') {
  let element = document.createElement(tagName);
  let parent = document.querySelector(parentSelector);
  for (let item in attributes) {
    element.setAttribute(item, attributes[item])
  }
  element.textContent = content;
  parent.appendChild(element);
}