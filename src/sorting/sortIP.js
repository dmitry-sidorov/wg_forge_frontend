import sortString from "./sortString";

export default function (prop) {
  return (a, b) => {
    if (a['order_country'] == b['order_country']) {
      return a[prop].localeCompare(b[prop]);
    } else return 0;
  } 
}
