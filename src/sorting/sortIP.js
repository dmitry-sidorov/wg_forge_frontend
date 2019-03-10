export default function (prop) {
  return (a, b) => {
    const compare = (a, b) => {
      if (a > b) {
        // console.log('return 1');
        return 1;
      } else if (a < b) {
        // console.log('return -1');
        return -1;
      } else {
        // console.log('return 0');
        return 0;
      }
    }


    
    let firstIP = a[prop].split('.').map(part => parseInt(part));
    let secondIP = b[prop].split('.').map(part => parseInt(part));
    // console.log('first: ', firstIP, typeof firstIP);

    /*
    // recursive
    function compareIP (first, second) {
      for (let i = 0; i < 3; i++) {
        let compared = compare(first[i], second[i]);
        console.log('compared: ', compared);
        if (compared !== 0) {
          return compared;
        } else if (i !== 3) {
          compareIP(first[i + 1], second[i + 1])
        } else return compared;
      }
    }
    */

    // console.log('ip-1: ', firstIP, 'ip-2: ', secondIP);
      let firstCompare = compare(firstIP[0], secondIP[0]);
      if (firstCompare !== 0) {
        return firstCompare;
      } else {
        let secondCompare = compare(firstIP[1], secondIP[1]);
        if (secondCompare !== 0) {
          return secondCompare;
        } else { 
          let thirdCompare = compare(firstIP[2], secondIP[2]);
        if (thirdCompare !== 0) {
        return thirdCompare;
      } else return compare(firstIP[3], secondIP[3]);
        }
      }

    // compareIP(firstIP, secondIP);
  } 
}
