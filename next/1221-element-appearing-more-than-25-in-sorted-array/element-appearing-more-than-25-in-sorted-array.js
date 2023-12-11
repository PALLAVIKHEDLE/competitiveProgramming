/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    // let  map={},max=0
    // for(count of arr){
    //     if(map[count]==undefined)map[count]=1
    //     else map[count]=map[count]+1
    //     max=Math.max(max,map[count])
        
    // }

    // for(key in map)if(map[key]==max)return key

     if (arr.length === 1) return arr[0];
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) {
            count++;
        } else {
            count = 1;
        }
        if (count > arr.length/4) return arr[i];
    }
};