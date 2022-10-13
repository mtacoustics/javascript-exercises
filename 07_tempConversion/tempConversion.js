const ftoc = function(degree) {
  let conversion = ((degree - 32) * 0.5556)
  if (Number.isInteger(conversion)) {
    roundUp = conversion
  } else {
    roundUp = +conversion.toFixed(1)
  }
  return roundUp
};

const ctof = function(degree) {
  let conversion = ((degree * 1.8) + 32)
  if (Number.isInteger(conversion)) {
    roundUp = conversion
  } else {
    roundUp = +conversion.toFixed(1)
  }
  return roundUp

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
