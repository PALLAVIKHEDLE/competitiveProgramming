/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let res = 0;
    for(let i = 0; i < grid.length; i++) {
        let row = grid[i];

        for(let col = 0; col < grid.length; col++) {
            let count = 0;
            for(let j = 0; j < grid.length; j++) {
                if(row[j] !== grid[j][col]) break;
                count++;
            }
            if(count === grid.length)res++; 
        }
    }
    return res;
};