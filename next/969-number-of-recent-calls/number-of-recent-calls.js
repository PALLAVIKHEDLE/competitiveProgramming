
var RecentCounter = function() {
    this.count=[]
    
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.count.push(t)// Everytime we recieve a ping
     /*
  To exclude the times that are not included within the range of t - 3000,
  we remove the first element from the count while it is less than the calculated range 
  */
    while(this.count[0]<t-3000){
        this.count.shift()
    }
 // When the loop ends the length of calls will be the length of the array
    return this.count.length
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
