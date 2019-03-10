import sortString from "./sortString";

export default function (prop) {
  return (a, b) => {
    // const compare = (a, b) => {
    //   if (a > b) {
    //     return 1;
    //   } else if (a < b) {
    //     return -1;
    //   } else {
    //     return 0;
    //   }
    // }

    if (a['order_country'] == b['order_country']) {
      return a[prop].localeCompare(b[prop]);
      // let firstIP = a[prop].split('.').map(part => parseInt(part));
      // let secondIP = b[prop].split('.').map(part => parseInt(part));
      // let firstCompare = compare(firstIP[0], secondIP[0]);
      // if (firstCompare !== 0) {
      //   return firstCompare;
      // } else {
      //   let secondCompare = compare(firstIP[1], secondIP[1]);
      //   if (secondCompare !== 0) {
      //     return secondCompare;
      //   } else { 
      //     let thirdCompare = compare(firstIP[2], secondIP[2]);
      //     if (thirdCompare !== 0) {
      //       return thirdCompare;
      //     } else return compare(firstIP[3], secondIP[3]);
      //   }
      // }
    } else return 0;
  } 
}
