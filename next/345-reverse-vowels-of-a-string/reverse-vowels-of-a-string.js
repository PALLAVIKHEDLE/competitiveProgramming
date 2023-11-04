/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
   let start=0, end=s.length, str=s.split('')
   let vowels=['a','e','i','o','u','A','E','I','O','U']
    while(start<end){
        if(!vowels.includes(str[start]))start++  
        else if(!vowels.includes(str[end]))end-- 
        else{
            let temp=str[start]
            str[start]=str[end]
            str[end]=temp
            start++
            end--   
        }  
    }
return str.join('')
};