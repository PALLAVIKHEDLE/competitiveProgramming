/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function(s) {
    let map = {}, start=end =max=0;
    while (end < s.length) {
        // If the character at the end index is not present in the map,
        //If the character at the end index is already present in the map and has a count of 0
        if (map[s[end]] === undefined || map[s[end]] === 0) {
            map[s[end]] = 1;
            end++;
            max = Math.max(max, end - start);
        } else {
            map[s[start]] = 0;  // Reset the count for the character at start index
            start++;
        }
    }

    return max;  

//      let map={}, currentWindowLength, maxLength=0
     
//     for(let i=0; i<s.length;i++){
//         let val=map[s[i]]
//         if(val==undefined){
//             map[s[i]]=i
//             currentWindowLength=Object.keys(map).length//size of map
//             maxLength=Math.max(maxLength,currentWindowLength)
//         }else{
//             resetMap(map,val)
//             map[s[i]]=i
//         }
//     }
//   return maxLength  
};