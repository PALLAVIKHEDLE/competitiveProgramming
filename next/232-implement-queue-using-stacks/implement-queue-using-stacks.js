
var MyQueue = function() {
  this.stack=[]  
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    return this.stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const poppedValue = this.stack.shift(); // Use shift to remove the first element
    return poppedValue !== undefined ? poppedValue : null;
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack.length > 0 ? this.stack[0] : null;
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
//    if(!this.stack.length)return true
//    else return false
   return this.stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */