/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    let sum1=sum2=0,mid=Math.floor(num.length/2);
    for(let i=0; i<num.length; i++){
        let digit=num[i]
        if(digit=='?'){
            // If in the first half or last digit in odd-length string
            if (i < mid || (i === mid && num.length % 2 === 1)) {
                sum1 += 4.5; // Adjust for half of 9
            } else {
                sum2 += 4.5; // Adjust for half of 9
            }
        }else{
            let val=parseInt(digit)
            if(i<mid)sum1+=val
            else sum2+=val
        }
 
    }
    
   return sum1 !== sum2;
};