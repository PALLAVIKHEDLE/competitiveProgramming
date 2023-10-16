/**
 * @param {string} s
 * @return {number}
 */

var countPalindromicSubsequence = function(s) {
    let count=0,//total count of unique palindrom
        chars=new Set(s);//unique char in s
    console.log('set', chars)

    for(let char of chars){
  //finds the indices of the first and last occurrences of that character in the input string s.     
        let first=s.indexOf(char),
            last=s.lastIndexOf(char);
        console.log('chars', first, last)
            count+=new Set(s.slice(first+1,last)).size
    }
return count
};