export default function (cardNumber) {
  return cardNumber.toString().split('').map((char, i) => (i > 1 && i < cardNumber.length - 4) ? '*' : char).join('');
}