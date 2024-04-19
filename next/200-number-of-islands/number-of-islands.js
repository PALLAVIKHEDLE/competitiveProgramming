/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
     let totalIslands=0
     for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]=='1')totalIslands+=islands(grid,i,j)
        }
     }
  return totalIslands   
};

//explore and mark all connected '1's 
function islands(grid, i,j){
    if(i<0||j<0||i>=grid.length||j>=grid[0].length||grid[i][j]=='0')return 
    //adjacent positions in four directions: right, down, left, and up.
    grid[i][j]=0  // Mark current cell as visited by setting it to '0'
    islands(grid, i+1,j)
    islands(grid, i,j+1)
    islands(grid, i-1,j)
    islands(grid, i,j-1)

    return true// Indicates that this cell is part of an island
}