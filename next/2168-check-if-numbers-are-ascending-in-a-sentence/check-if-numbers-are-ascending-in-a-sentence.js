/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
let arr = s.split(" ");
const numbers = [];

    for (let char of arr) {
        if(parseInt(char)&& parseInt(char)>=0) numbers.push(parseInt(char))
    }
  
console.log('numbers',numbers)
    for (let i = 0; i < numbers.length - 1; i++) {
        if (Number(numbers[i]) >= Number(numbers[i + 1])) {
            return false;
        }
    }

    return true;
};