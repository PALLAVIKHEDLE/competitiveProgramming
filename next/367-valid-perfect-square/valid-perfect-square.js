/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
//     let square
//     for(let i=1; i<=num;i++){
//         square=i*i
//         if(square==num)return true
//     }
// return false    
let start=1, end=num
while(start<=end){
    let mid=Math.floor((start+end)/2)
    if(mid*mid==num)return true
    else if(mid*mid>num)end=mid-1
    else start=mid+1
}
return false
};