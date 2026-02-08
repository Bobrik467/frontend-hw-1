const sum = (...rest) => {
  if (rest.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }

  const allNumbers = rest.every((res) => typeof res === 'number');
  if (!allNumbers) {
    throw new Error('INVALID_ARGUMENT');
  }

  return rest.reduce((acc, item) => acc + item, 0);
};
export default sum;
