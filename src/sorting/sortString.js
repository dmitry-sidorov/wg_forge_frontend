export default function (prop) {
  return (a, b) => a[prop].localeCompare(b[prop]);
}
