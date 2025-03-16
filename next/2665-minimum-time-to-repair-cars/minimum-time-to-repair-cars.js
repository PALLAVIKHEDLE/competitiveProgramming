/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let res = Infinity;
    let l = Math.min(...ranks);
    let r = Math.max(...ranks) * cars * cars;

    while (l <= r) {
        let guessTime = Math.floor((l + r) / 2);
        
        if (isGood(ranks, guessTime, cars)) {
            res = guessTime;
            r = guessTime - 1;
        } else {
            l = guessTime + 1;
        }
    }

    return res;
};

function isGood(ranks, max, cars) {
    let count = 0;

    for (let i = 0; i < ranks.length; i++) {
        let temp = Math.floor(max / ranks[i]);
        count += Math.floor(Math.sqrt(temp));
        if (count >= cars) return true;
    }
    return false;
}