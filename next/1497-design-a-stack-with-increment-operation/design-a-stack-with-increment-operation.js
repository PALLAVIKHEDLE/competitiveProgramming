var CustomStack = function (maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
};

CustomStack.prototype.push = function (x) {
    if (this.stack.length < this.maxSize) this.stack.push(x);
};

CustomStack.prototype.pop = function () {
    if (this.stack.length > 0) {
        let value = this.stack.pop();
        return value;
    } else return -1;
};

CustomStack.prototype.increment = function (k, val) {
    let x = Math.min(k, this.stack.length);
    for (let i = 0; i < x; i++) {
        this.stack[i] += val;
    }
};