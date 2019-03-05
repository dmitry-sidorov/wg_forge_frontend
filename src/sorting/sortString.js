export default function (prop) {
  console.log('prop in sortString(): ', prop, typeof prop);
  return (a, b) => {
    console.log('prop in (a,b): ', prop);
    return a[prop].localeCompare(b[prop]);
  };
}
