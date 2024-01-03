/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
  let curr, prev=0, n=bank.length, m=bank[0].length, ans=0
  for(let i=0; i<n;i++){
        curr = 0; // Reset the current count of security devices for each row
         for (let j = 0; j < m; j++) {
             // Count the number of security devices in the current row
                if (bank[i][j] == '1') curr++; 
        }
          if (curr != 0) {
                // Accumulate the product of current count and previous count
                ans += curr * prev;
                prev = curr; // Update the previous count for the next iteration
            }
  }
  return ans
};