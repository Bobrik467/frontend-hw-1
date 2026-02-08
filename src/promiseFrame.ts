type Fn<T = any> = () => Promise<T> | T;

const promiseFrame = <T>(functions: Fn<T>[], limit?: number): Promise<T[]> => {
  if (!Array.isArray(functions)) {
    return Promise.reject(new Error('INVALID_ARGUMENT'));
  }

  if (limit !== undefined && (typeof limit !== 'number' || limit <= 0)) {
    return Promise.reject(new Error('INVALID_ARGUMENT'));
  }

  if (limit === undefined) {
    return new Promise((resolve, reject) => {
      const results: T[] = new Array(functions.length);
      let finished = 0;
      let rejected = false;

      functions.forEach((fn, index) => {
        try {
          Promise.resolve(fn())
            .then((value) => {
              if (rejected) return;
              results[index] = value;
              finished++;
              if (finished === functions.length) {
                resolve(results);
              }
            })
            .catch((err) => {
              if (rejected) return;
              rejected = true;
              reject(err);
            });
        } catch (err) {
          if (rejected) return;
          rejected = true;
          reject(err);
        }
      });
    });
  }

  return new Promise((resolve, reject) => {
    const results: T[] = new Array(functions.length);
    let index = 0;
    let active = 0;
    let finished = 0;
    let rejected = false;

    const runNext = () => {
      if (rejected) return;

      while (active < limit && index < functions.length) {
        const current = index++;
        active++;

        try {
          Promise.resolve(functions[current]())
            .then((value) => {
              if (rejected) return;
              results[current] = value;
              active--;
              finished++;

              if (finished === functions.length) {
                resolve(results);
              } else {
                runNext();
              }
            })
            .catch((err) => {
              if (rejected) return;
              rejected = true;
              reject(err);
            });
        } catch (err) {
          if (rejected) return;
          rejected = true;
          reject(err);
        }
      }
    };

    runNext();
  });
};

export default promiseFrame;
