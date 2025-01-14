/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
     const freq = {};
    const result = [];
    let commonCount = 0;

    for (let i = 0; i < A.length; i++) {
        if (freq[A[i]] === undefined) freq[A[i]] = 1;
        else freq[A[i]]++;

        // Mark element in B
        if (freq[B[i]] === undefined) freq[B[i]] = 1;
        else freq[B[i]]++;
    

        // If any number appears in both arrays, increment common count
        if (freq[A[i]] === 2) commonCount++;
        if (freq[B[i]] === 2 && A[i] !== B[i]) commonCount++;

        // Add the common count to the result array
        result.push(commonCount);
    }

    return result;
}
