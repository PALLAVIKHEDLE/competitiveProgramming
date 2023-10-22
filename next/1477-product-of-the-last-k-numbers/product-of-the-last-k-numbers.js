
var ProductOfNumbers = function() {
    this.map=[1]
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if(!num) this.map=[1]
    else this.map.unshift(num*(this.map[0]||1))
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    return (this.map[0]/this.map[k])||0
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */