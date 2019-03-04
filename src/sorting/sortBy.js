export default function (prop, compareFunction) {
  return this.sort(compareFunction(prop));
}
