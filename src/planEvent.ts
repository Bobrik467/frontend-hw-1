const planEvent = (cd: () => any, timeout: number): Promise<any> => {
  if (typeof cd !== 'function' || typeof timeout !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }

  return new Promise((resolve) => {
    if (timeout <= 0) {
      resolve(cd());
    } else {
      setTimeout(() => {
        resolve(cd());
      }, timeout);
    }
  });
};

export default planEvent;
