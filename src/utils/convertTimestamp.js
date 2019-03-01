export default function (timestamp) {
  const addZero = num => (num < 10) ? '0' + num : num.toString();
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear().toString().slice(2, 4);
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}