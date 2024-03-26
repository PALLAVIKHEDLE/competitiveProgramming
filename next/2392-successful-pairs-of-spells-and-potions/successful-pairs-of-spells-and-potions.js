/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
//     let finalResult=[], count=0, product=1, i=0;
//     while(i<spells.length){
//         for(let j=0; j<potions.length;j++){
//             product=spells[i]*potions[j]
//             if(product>=success)count++
//         }
//         finalResult.push(count)
//         i++
//         count=0

//     }
//  return finalResult   

potions.sort((a,b)=>a-b)
let res=[]
for(s of spells){
    let left=0, right=potions.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(s*potions[mid]>=success)right=mid-1, index=mid
        else left=mid+1
    }
    res.push(potions.length-left)
}
return res
};