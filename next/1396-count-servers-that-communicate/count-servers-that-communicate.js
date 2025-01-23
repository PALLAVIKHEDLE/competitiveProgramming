/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let serverCanCommunicate = 0;

    // Initialise server count for each row and column
    const serverInRow = [];
    const serverInCol = [];
    for(let row = 0; row < grid.length; row++) {
        serverInRow.push(0);
    }
    for(let col = 0; col < grid[0].length; col++) {
        serverInCol.push(0);
    }

    // Traverse grid to figure out server count in each row and column
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] === 1) {
                serverInRow[row] = ++serverInRow[row];
                serverInCol[col] = ++serverInCol[col];
            }
        }
    }

    // A server can communicate if there are more that 2 servers (including itself) in that row or column
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] === 1) {
                if(serverInRow[row] > 1 || serverInCol[col] > 1) {
                    serverCanCommunicate++;
                }
            }
        }
    }

    return serverCanCommunicate;
};