/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let freqMap={}
    arr2.forEach((num, index)=>{
        freqMap[num]=index
    })
    // Separate arr1 into elements that are in arr2 and those that are not
    let inArr2=[], notInArr2=[];
    arr1.forEach(num=>{
        if(freqMap.hasOwnProperty(num))inArr2.push(num)
        else notInArr2.push(num)
    })

    // Sort elements that are in arr2 according to the order in arr2
    inArr2.sort((a, b) => freqMap[a] - freqMap[b]);

    // Sort elements that are not in arr2 in ascending order
    notInArr2.sort((a, b) => a - b);

    // Concatenate the two lists
    return inArr2.concat(notInArr2);
};


    