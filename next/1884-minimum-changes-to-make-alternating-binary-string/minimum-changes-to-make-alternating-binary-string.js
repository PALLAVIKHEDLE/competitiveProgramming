/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let n=s.length, count1=0, count2=0

    for(let i=0;i<n;i++){
        if(i%2==0){
            count1+=s[i]!=='0'?1:0
            count2+=s[i]!=='1'?1:0
        }else{
             count1+=s[i]!=='1'?1:0
            count2+=s[i]!=='0'?1:0
        }
    }
     return Math.min(count1, count2);
};