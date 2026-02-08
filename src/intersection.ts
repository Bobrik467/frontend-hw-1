const intersection = (arr1: number[], arr2: number[]): number[] => {
  if (arr2 === undefined) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('INVALID_ARGUMENT');
  }

  const validTypes1 = arr1.every((item) => typeof item === 'number');
  const validTypes2 = arr2.every((item) => typeof item === 'number');

  if (!validTypes1 || !validTypes2) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }

  const result: number[] = [];

  for (const item of arr1) {
    if (arr2.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  }

  return result;
};

export default intersection;
