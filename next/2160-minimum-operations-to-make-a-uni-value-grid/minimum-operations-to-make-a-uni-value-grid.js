/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    let arr = [];
    for (let row of grid) {
        for (let num of row) {
            arr.push(num);
        }
    }
    
    arr.sort((a, b) => a - b);
    let median = arr[Math.floor(arr.length / 2)];
    let operations = 0;

    for (let num of arr) {
        let diff = Math.abs(num - median);
        if (diff % x !== 0) return -1;
        operations += diff / x;
    }
    return operations;
};