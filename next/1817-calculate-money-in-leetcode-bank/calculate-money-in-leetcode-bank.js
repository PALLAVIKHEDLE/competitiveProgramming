/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    //FIRST
//  let ans = 0,week = 1,additional = 0;
//     for (let i = 1; i <= n; i++) {
//         ans += week + additional;
//         if (i % 7 === 0) {
//             week++;
//             additional = 0;
//         } else additional++;
//     }
// return ans; 

//SECOND
//  let ans = 0
//     for (let i = 0; i < n; i++) {
//        console.log('i%7',i%7,i/7)
//        ans+=Math.floor(i/7)+1+(i%7)
//     }
// return ans; 

//THIRD
let total=0, additional=0, week=0
for(let i=1; i<=n; i++){
    total+=additional+(i%7)
    if(i%7==0){
        week++
        additional++
    }
}
return total+(7*week)
};