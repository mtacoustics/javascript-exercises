const sumAll = function(a, b) {
  let arrayForSum = [];
  let sum = 0;
  let isString = (Number.isInteger(b));
  if (isString === false || a < 0 || b < 0) {
    sum = 'ERROR';
  } else if (a < b && a > 0) {
    for (let i = a; i <= b; ++i) {
      arrayForSum.push(i);
    } for (let i = 0; i < arrayForSum.length; i++) {
      sum += arrayForSum[i];
    } 
  } else if (a > b) {
    for (let i = a; i >= b; --i) {
      arrayForSum.push(i);
    } for (let i = 0; i < arrayForSum.length; i++) {
      sum += arrayForSum[i];
    }
  }
  return sum;

} 
console.log(sumAll(1, 4))
// Do not edit below this line
module.exports = sumAll;
