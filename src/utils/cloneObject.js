export default (function () {
  Object.prototype.clone = function() {
  let newObject = (this instanceof Array) ? [] : {};
  for (let i in this) {
    if (i == 'clone') continue;
    if (this[i] && typeof this[i] == "object") {
      newObject[i] = this[i].clone();
    } else newObject[i] = this[i]
  } return newObject;
};
})();