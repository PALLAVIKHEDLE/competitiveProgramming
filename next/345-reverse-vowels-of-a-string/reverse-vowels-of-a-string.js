/**
 * @param {string} s
 * @return {string}
 */
// var reverseVowels = function(s) {
//    let start=0, end=s.length, str=s.split('')
//    let vowels=['a','e','i','o','u','A','E','I','O','U']
//     while(start<end){
//         if(!vowels.includes(str[start]))start++  
//         else if(!vowels.includes(str[end]))end-- 
//         else{
//             let temp=str[start]
//             str[start]=str[end]
//             str[end]=temp
//             start++
//             end--   
//         }  
//     }
// return str.join('')
// };
var reverseVowels = function(s) {
    let start = 0,end = s.length-1
    let output = s.split('')
    let vow = ['a', 'e', 'i', 'o', 'u'];

    while (start < end){
        if (vow.includes(s[start].toLowerCase()) && vow.includes(s[end].toLowerCase())){
            let temp = output[start];
            output[start] = output[end];
            output[end] = temp
            start++;
            end--;
        } if (!vow.includes(s[start].toLowerCase())){
            start++;
        } if (!vow.includes(s[end].toLowerCase())){
            end--;
        }
    }
    return output.join('');
};