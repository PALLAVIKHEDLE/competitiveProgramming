/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue= new Array(k)//array to store elements in the circular queue
    this.front=0// front pointer pointing to the first element
    this.rear=-1//rare pointer pointing to the last element, initialized to -1 as the queue is empty
    this.size=0//Current number of elements in the queue
    this.capacity=k//max capacity to circular queue
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    // If the queue is full, cannot enqueue more elements
    if(this.isFull())return false

    this.rear=(this.rear+1)%this.capacity// Move the rear pointer circularly
    this.queue[this.rear]=value//insert the new element at the rear 
    this.size++ // increment the size of the queue

    return true
    
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty())return false
    this.front=(this.front+1)%this.capacity; // Move the front pointer circularly
    this.size-- // Decrement the size of the queue

        // Reset pointers if the queue becomes empty
    if (this.isEmpty()) {
        this.front = 0;
        this.rear = -1;
    }


    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
 return this.isEmpty() ? -1 : this.queue[this.front]; //Return the front element if the queue is not empty
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty()?-1:this.queue[this.rear]// Return the rear element if the queue is not empty
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size==0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size==this.capacity
    
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */