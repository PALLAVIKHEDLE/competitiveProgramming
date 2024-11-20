/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
        let n = s.length;
        let l = 0, r = 0;
        let ans = n;
        let a = 0, b = 0, c = 0;

        // Count total occurrences of 'a', 'b', and 'c'
        let totalA = 0, totalB = 0, totalC = 0;
        for (let ch of s) {
            if (ch === 'a') totalA++;
            else if (ch === 'b') totalB++;
            else if (ch === 'c') totalC++;
        }

        // If there are not enough 'a', 'b', or 'c', return -1
        if (totalA < k || totalB < k || totalC < k) {
            return -1;
        }

        // Reset counters and start sliding window
        while (r < n) {
            if (s[r] === 'a') a++;
            if (s[r] === 'b') b++;
            if (s[r] === 'c') c++;
            r++;

            // Shrink window if it exceeds the limits
            while (a > totalA - k || b > totalB - k || c > totalC - k) {
                if (s[l] === 'a') a--;
                if (s[l] === 'b') b--;
                if (s[l] === 'c') c--;
                l++;
            }

            // Update the answer with the minimum number of characters to remove
            ans = Math.min(ans, n - (r - l));
        }

        return ans;
}