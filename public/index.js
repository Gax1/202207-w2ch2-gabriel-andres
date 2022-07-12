const strictEquals = function (a, b) {
  let result = Object.is(a, b);
  if (!a && !b) {
    if (Number.isNaN(a) && Number.isNaN(a)) {
      return (result = false);
    }
    result = true;
  }
  return result;
};
console.log(strictEquals());
