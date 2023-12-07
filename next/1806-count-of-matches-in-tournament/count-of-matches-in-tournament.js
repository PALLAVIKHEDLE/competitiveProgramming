/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matches=0, teamAdv=0, total=0
    while(n>1){
    if(n%2==0){
        matches=n/2
        teamAdv=n/2
    }else{
        matches=(n-1)/2
        teamAdv=(n-1)/2+1
    }    
    n=teamAdv
total+=matches
}

return total
};