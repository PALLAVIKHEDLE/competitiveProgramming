/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    let result=[]
    for( let i=1; i<mountain.length;i++){
        if(mountain[i]>mountain[i-1]&&mountain[i]>mountain[i+1])result.push(i)
    }
 return result   
};