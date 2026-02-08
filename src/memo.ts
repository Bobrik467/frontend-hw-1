const memo = <T extends (...args: any[]) => any>(
  func: T,
  time?: number
): ((...args: Parameters<T>) => ReturnType<T>) => {
  if (typeof func !== 'function') {
    throw new Error('INVALID_ARGUMENT');
  }

  if (time !== undefined && (typeof time !== 'number' || time < 0)) {
    throw new Error('INVALID_ARGUMENT');
  }

  const cache = new Map<
    string,
    { value: ReturnType<T>; expiresAt: number | null }
  >();

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);
    const now = Date.now();

    const cached = cache.get(key);

    if (cached) {
      if (cached.expiresAt === null || cached.expiresAt > now) {
        // продлеваем TTL
        if (time !== undefined) {
          cached.expiresAt = now + time;
        }
        return cached.value;
      }
    }

    const result = func(...args);

    cache.set(key, {
      value: result,
      expiresAt: time === undefined ? null : now + time,
    });

    return result;
  };
};

export default memo;
