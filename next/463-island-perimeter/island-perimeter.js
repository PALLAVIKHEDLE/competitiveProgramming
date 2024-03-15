/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
 let rows = grid.length, cols = grid[0].length;
    let perimeter = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {
                // If the current cell is land, check its neighbors
                perimeter += 4;
             
                if(i>0 && grid[i-1][j]==1)perimeter-=2
                if(j>0 && grid[i][j-1]==1)perimeter-=2

            }
        }
    }
    return perimeter;
};
 