const multiply = (num1: number) => {
  if (typeof num1 !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }

  return function multiplyBy(num2: number): number {
    if (typeof num2 !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }

    return num1 * num2;
  };
};

export default multiply;
