
var RecentCounter = function() {
    this.count=[]
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.count.push(t)//everytime we receive a ping
    while(this.count[0]<t-3000)this.count.shift()

     // When the loop ends the length of calls will be the length of the array
    return this.count.length
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */