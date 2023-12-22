/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let max=0;let right=0;let left=0;
     for(let i=0;i<s.length;i++){
        if(s[i]=="1")right++;
    }
    for(let i=0;i<s.length-1;i++){
        if(s[i]=="1")right--;
        else left++;

    if(max<(right+left))max=(right+left)
}
return max;
}