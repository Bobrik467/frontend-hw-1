// @ts-nocheck

const patchArrays = (): void => {
  Array.prototype.count = function () {
    return this.length;
  };

  Array.prototype.insert = function (index: number, value: unknown) {
    if (typeof index !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }

    if (index < 0) {
      this.splice(0, 0, value);
      return this;
    }

    if (index > this.length) {
      this.splice(this.length, 0, value);
      return this;
    }

    this.splice(index, 0, value);
    return this;
  };

  Array.prototype.remove = function (value) {
    const index = this.indexOf(value);

    if (index === -1) {
      return this;
    } else {
      this.splice(index, 1);
      return this;
    }
  };
};

export default patchArrays;
