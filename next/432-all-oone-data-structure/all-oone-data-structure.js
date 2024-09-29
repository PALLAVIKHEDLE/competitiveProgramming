var AllOne = function () {
  this.minCount = 0;
  this.maxCount = 0;

  this.keyFreqMap = new Map();
  this.freqSetMap = new Map();
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  let count = this.keyFreqMap.get(key);
  let newMaxCount = count;
  let newMinCount = this.minCount;
  if (count) {
    let existing_set = this.freqSetMap.get(count);
    existing_set.delete(key);
    if (existing_set.size == 0) {
      this.freqSetMap.delete(count);
    } else {
      this.freqSetMap.set(count, existing_set);
    }
    if (existing_set.size == 0 && this.minCount == count)
      newMinCount = newMinCount + 1;

    let set = this.freqSetMap.get(count + 1) || new Set();
    set.add(key);
    this.freqSetMap.set(count + 1, set);

    this.keyFreqMap.set(key, count + 1);
    newMaxCount = count + 1;
  } else {
    //not exists in map then set new key value pair
    this.keyFreqMap.set(key, 1);
    let existing_set = this.freqSetMap.get(1) || new Set();
    existing_set.add(key);
    this.freqSetMap.set(1, existing_set);
    newMinCount = 1;
    newMaxCount = 1;
  }
  this.minCount = newMinCount;
  this.maxCount = Math.max(this.maxCount, newMaxCount);
  return null;
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  let count = this.keyFreqMap.get(key);
  if (count) {
    let existing_set = this.freqSetMap.get(count);
    existing_set.delete(key);
    if (existing_set.size == 0) {
      this.freqSetMap.delete(count);
    } else {
      this.freqSetMap.set(count, existing_set);
    }

    if (count == 1) {
      this.keyFreqMap.delete(key);
    } else {
      let set = this.freqSetMap.get(count - 1) || new Set();
      set.add(key);
      this.freqSetMap.set(count - 1, set);

      this.keyFreqMap.set(key, count - 1);
    }

    if (existing_set.size == 0 && this.maxCount == count) this.maxCount -= 1;
    if (existing_set.size == 0 && this.minCount == count) {
      let min = this.maxCount;

      for (let key of this.freqSetMap.keys()) {
        min = Math.min(min, key);
      }
      if (this.freqSetMap.size > 0) this.minCount = min;
    }
  }
  return null;
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  let set = this.freqSetMap.get(this.maxCount) || new Set();
  let firstElement = "";
  for (let val of set) {
    firstElement = val;
    break;
  }
  return firstElement;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  let set = this.freqSetMap.get(this.minCount) || new Set();
  let firstElement = "";

  for (let val of set) {
    firstElement = val;
    break;
  }
  return firstElement;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */