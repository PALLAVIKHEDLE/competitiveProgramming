/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
     let circle = [],cur_ind = 0;
    for (let i = 1; i <= n; i++) circle.push(i);

    while (circle.length > 1) {
        let next_to_remove = (cur_ind + k - 1) % circle.length;
        circle.splice(next_to_remove, 1);
        cur_ind = next_to_remove;
    }

    return circle[0];
};