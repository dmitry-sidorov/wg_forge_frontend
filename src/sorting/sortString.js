export default function (prop) {
  return (a, b) => {
    return a[prop].localeCompare(b[prop]);
  };
}
