export default function (prop) {
  return (a, b) => parseFloat(a[prop]) - parseFloat(b[prop]);
}
