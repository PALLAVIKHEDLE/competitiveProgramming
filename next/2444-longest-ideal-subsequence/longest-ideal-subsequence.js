/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
    let {length}=s, longest=0;
    let maxLength= new Array(length).fill(0);
    const dfs=(index)=>{
         // Base case: if index reaches end of string
        if(index===length)return 0;
        // If maxLength for current index is already calculated, return it
        if(maxLength[index]>0)return maxLength[index]
        let curr=1, currCode=s.charCodeAt(index);
        for(let j=index+1; j<length;j++){
            // Check if the difference in ASCII values is within k
            if(Math.abs(s.charCodeAt(j)-currCode)<=k)curr=Math.max(curr, dfs(j)+1)
             // If next character is same as current, no further exploration needed
            if(s[j]===s[index])break
        }
     // Memoize the maximum length starting from current index
        return maxLength[index]=curr
    }
    for(let i=0; i<length;i++)longest=Math.max(longest, dfs(i));

 return longest   
};