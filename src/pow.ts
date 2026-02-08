function checkNumber(value) {
  if (typeof value !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }
}
const pow = (base, exponent) => {
  checkNumber(base);
  if (exponent !== undefined) {
    checkNumber(exponent);
    return base ** exponent;
  }
  return function (exponent) {
    checkNumber(exponent);
    return base ** exponent;
  };
};
export default pow;
