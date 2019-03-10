import $createSpecChar from "../DOM/createSpecChar";

export default function (headingSelector) {
  $createSpecChar('span', `th .${headingSelector}`, {class: 'arrow'}, '&#8595');
}
