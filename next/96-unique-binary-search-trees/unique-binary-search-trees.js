/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    //  use a memo since we will be solving the same sub-problems multiple times.
    //first consider what is BST is..... left and right subtree
    const memo=[]
return numTreeMemo(n, memo)
};
function numTreeMemo(n, memo){
    if(n==1)return 1//base case

    //if we solved for n before, return saved answer
    if(memo[n]) return memo[n]

let totalTrees=0
//Pick each node once as the root node
for(let root=1; root<=n; root++){
    let leftTree=1, rightTree=1
    if(root>1)leftTree=numTreeMemo(root-1, memo)//number of BST on the left side 
    if(root<n)rightTree=numTreeMemo(n-root, memo)//number of BST on the right side 

    totalTrees += leftTree * rightTree//If left has 2 unique trees, and right has3
        //that equals 2 * 3 for the total combinations
}
memo[n]=totalTrees
return totalTrees
}