/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let  map={},max=0
    for(count of arr){
        if(map[count]==undefined)map[count]=1
        else map[count]=map[count]+1
        max=Math.max(max,map[count])
    }

    for(key in map)if(map[key]==max)return key
};