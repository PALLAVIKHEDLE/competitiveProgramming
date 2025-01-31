/**
 * @param {number[][]} grid
 * @return {number}
 */var largestIsland = function (grid) {
    <!--  initialize row col and directions -->

    let row = grid.length;
    let col = grid[0].length;
    let directions = [[1, 0], [0, 1], [0, -1], [-1, 0]];
    <!-- well start from index 2 -->

    let index = 2;
    <!-- Set an new map for storing rhe values of max islands  -->
    let islands = new Map();

    <!-- first set the max isands is zero -->

    let max_island = 0;
    let hasZero = false;
    
    <!--initialize  the helpeer function to perfotm dfs  -->

    function dfs(r, c, index) {
     <!-- set base cases -->
        if (r < 0 || c < 0 || r >= row || c >= col || grid[r][c] !== 1) {
            return 0;
        }
        grid[r][c] = index;
        let size = 1;
     <!-- illiterate through driections and update the size -->

        for (const [dr, dc] of directions) {
            size += dfs(r + dr, c + dc, index);
        }
        return size;
    }

    <!-- // Step 1: Identify islands and store their sizes -->

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] === 1) {
                let size = dfs(r, c, index);
                islands.set(index, size);
                max_island = Math.max(max_island, size);
                index++;
            } else if (grid[r][c] === 0) {
                hasZero = true;
            }
        }
    }

    // If the entire grid is filled with 1s, return its size
    if (!hasZero) return row * col;

    // Step 2: Try flipping each 0 and calculate max possible island
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] === 0) {
                let seen = new Set();
                let size = 1; // Flip this 0 to 1
                
                for (const [dr, dc] of directions) {
                    let nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nc >= 0 && nr < row && nc < col && grid[nr][nc] > 1) {
                        let islandIndex = grid[nr][nc];
                        if (!seen.has(islandIndex)) {
                            size += islands.get(islandIndex);
                            seen.add(islandIndex);
                        }
                    }
                }

                max_island = Math.max(max_island, size);
            }
        }
    }

    return max_island;
};