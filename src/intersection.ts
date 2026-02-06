const intersection = (arr1, arr2) => {
  if (arr2 === undefined) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('INVALID_ARGUMENT');
  }
  
  const allNumbers1 = arr1.every(item => typeof item === 'number')
  const allNumbers2 = arr2.every(item => typeof item === 'number')
  
  if (!allNumbers1 || !allNumbers2) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY')
  }
  
  const result = [] 
  
  for (let item of arr1) {
    if (arr2.includes(item) && !result.includes(item)) {
    result.push(item);
  }
  }
  
  return result;
}

export default intersection;
