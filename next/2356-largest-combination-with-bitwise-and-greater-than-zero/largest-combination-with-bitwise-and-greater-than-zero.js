/**
 * @param {number[]} candidates
 * @return {number}
 */
function largestCombination(candidates) {
    let mx_len = 0;
    
    for (let i = 0; i < 24; i++) {
        const x = 1 << i; // Create a bitmask with only the i-th bit set
        let cnt = 0; // Counter for numbers with the i-th bit set
        
        // Check each number in candidates to see if the i-th bit is set
        for (const num of candidates) {
            if ((num & x) !== 0) cnt++; // Increment count if the i-th bit is 1
        }
        mx_len = Math.max(mx_len, cnt);
    }
    
    return mx_len;
}