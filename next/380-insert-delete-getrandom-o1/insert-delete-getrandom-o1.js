var RandomizedSet = function() {
   this.map={}//map to store value-to-index mapping
   this.list=[]// array to store values
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map[val]!==undefined) return false// value already exists
    this.map[val] = this.list.length; // Store the index of the value
    this.list.push(val); // Add the value to the end of the array
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map[val] === undefined) return false; // Value doesn't exist
    const indexToRemove = this.map[val]; // Get the index to remove
    const lastVal = this.list.pop(); // Get the last value in the list
    if (indexToRemove !== this.list.length) {
        this.list[indexToRemove] = lastVal; // Replace the removed value with the last value
        this.map[lastVal] = indexToRemove; // Update the index for the last value
    }
    delete this.map[val]; // Remove the value from the mapping
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
     return this.list[Math.floor(Math.random() * this.list.length)];//generate a random index and return the value at the random index
};


/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */