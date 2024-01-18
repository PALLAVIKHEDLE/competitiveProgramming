/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<2)return 1
    let firstStep=secondStep=1, thirdStep=0
    for(let i=2; i<=n;i++){
        thirdStep=firstStep+secondStep
        firstStep=secondStep
        secondStep=thirdStep
    }
    return thirdStep

};