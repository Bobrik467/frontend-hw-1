const removeAnagrams = (arrs: string[]): string[] => {
  if (!Array.isArray(arrs)) {
    throw new Error('INVALID_ARGUMENT');
  }

  const validTypes: boolean = arrs.every((item) => typeof item === 'string');

  if (!validTypes) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }

  const countMap = new Map();
  const result: string[] = [];

  for (const item of arrs) {
    const normalizedArr = item.toLowerCase().split('').sort().join('');
    countMap.set(normalizedArr, (countMap.get(normalizedArr) || 0) + 1);
  }

  for (const word of arrs) {
    const sorted = word.toLowerCase().split('').sort().join('');
    if (countMap.get(sorted) === 1) {
      result.push(word);
    }
  }

  return result;
};

export default removeAnagrams;
