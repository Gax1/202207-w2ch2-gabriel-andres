const strictEquals = function (a, b) {
  let result = Object.is(a, b);
  if (Number.isNaN(a) || Number.isNaN(a)) {
    return (result = false);
  }
  if (!a && !b) {
    result = true;
  }
  return result;
};
console.log(strictEquals());
