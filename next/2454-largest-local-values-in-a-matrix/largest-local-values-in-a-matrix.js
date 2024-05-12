/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
      let row = grid.length, column = grid[0].length;
     let res = [];

    for (let i = 1; i < row - 1; i++) {
        const tempRow = [];
        for (let j = 1; j < column - 1; j++) {
            let temp = 0;

            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    temp = Math.max(temp, grid[k][l]);
                }
            }

            tempRow.push(temp);
        }
        res.push(tempRow);
    }

    return res;
};