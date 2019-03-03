export default function (selector, attributes = {}, content = "") {
  let element = document.querySelector(selector);
  for (let item in attributes) {
    element.setAttribute(item, attributes[item])
  }
  element.textContent = content;
}