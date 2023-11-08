/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
 //Time complexity leading to time limit exceed
// var maximumRemovals = function(s, p, removable) {
//    let i=0, count=0
   
//     for(i=0; i<removable.length; i++){
//         let indexToRemove=removable[i]
//         s=s.slice(0, indexToRemove) +'0'+ s.slice(indexToRemove+1)
//         let pIndex=0
//         for(let j=0; j<s.length && pIndex<p.length; j++)if(s[j]==p[pIndex])pIndex++       
//         if (pIndex === p.length) count++
//         else return count
//     }
//   return count     
// };

var maximumRemovals = function(s, p, removable) {
    const canRemove=(mid)=>{
        let pIndex=0
        let removedIndices=new Set(removable.slice(0,mid))
        for(let i=0; i<s.length && pIndex<p.length;i++){
            if(!removedIndices.has(i)&& s[i]===p[pIndex])pIndex++
        }
        return pIndex === p.length;
    }
    let left=0, right=removable.length, result=0
    while(left<=right){
        let mid=Math.floor((left+right)/2)
           if (canRemove(mid)) {
            result = mid;
            left = mid + 1;
        } else right = mid - 1;
    }
return result     
}