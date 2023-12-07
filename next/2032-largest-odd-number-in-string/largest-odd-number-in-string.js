/**
 * @param {string} num
 * @return {string}
 */

 var largestOddNumber = function(num) {
    num = num.toString(); // Convert number to string
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) return num.slice(0, i + 1); //string up to the current index
        else num = num.slice(0, -1); // Remove the last character of the string
    }
return '';
};