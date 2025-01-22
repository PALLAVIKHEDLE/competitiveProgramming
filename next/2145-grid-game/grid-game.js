/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
     let l = 0, r = grid[0].length, top = 0, bottom = 0;
    while (l < r) {
        if (top < bottom) top += grid[0][--r];
        else bottom += grid[1][l++];
    }
    return Math.min(top, bottom);
};