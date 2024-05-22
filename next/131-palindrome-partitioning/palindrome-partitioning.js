/**
 * @param {string} s
 * @return {string[][]}
 */


var partition = function(s) {
    const result = [], path = [];
    
    const isPalindrome = (str) => {
        let left = 0, right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            
            left++;
            right--;
        }
        return true;
    }
    
    const backtrack = (start) => {
        if (start === s.length) {
            result.push([...path]);
            return;
        }
        for (let end = start + 1; end <= s.length; end++) {
            const substr = s.substring(start, end);
            if (isPalindrome(substr)) {
                path.push(substr);
                backtrack(end);
                path.pop();
            }
        }
    }

    backtrack(0);
    return result;
}