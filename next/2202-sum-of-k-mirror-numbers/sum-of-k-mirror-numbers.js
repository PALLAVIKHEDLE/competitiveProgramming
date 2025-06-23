/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function(k, n) {
    let sum=0, length=1;

    while(n>0){
        let halfLength=Math.floor((length+1)/2)
        let minNum = Math.pow(10, halfLength - 1);
        let maxNum = Math.pow(10, halfLength) - 1;

       for (let num = minNum; num <= maxNum; num++) {
        let firstHalf = num.toString();
        let secondHalf = [...firstHalf].reverse().join("");

        let fullPalindrome = length % 2 === 0
          ? firstHalf + secondHalf
          : firstHalf + secondHalf.slice(1);

        let palNum = BigInt(fullPalindrome);
        let baseK = convertToBaseK(palNum, k);

        if (isPalindrome(baseK)) {
          sum += Number(palNum);
          n--;
          if (n === 0) return sum;
        }
       }
      length++; 
      }
    return sum;
}


  // Check if a string is a palindrome
  function isPalindrome(str) {
    let left = 0, right = str.length - 1;
    while (left <= right) {
      if (str[left++] !== str[right--]) return false;
    }
    return true;
  }

  // Convert a number to base-k string representation
function convertToBaseK(num, k) {
  if (num === 0n) return "0";
  let res = "";
  const bigK = BigInt(k);  // convert k to BigInt once
  while (num > 0n) {
    res = (num % bigK).toString() + res;
    num = num / bigK;
  }
  return res;
}

 