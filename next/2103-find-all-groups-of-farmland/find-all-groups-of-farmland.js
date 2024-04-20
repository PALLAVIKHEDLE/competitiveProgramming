/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
 let row = land.length, col = land[0].length;
    let result = [];

    // Loop through each cell in the land matrix
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (land[i][j] === 1) {
                let arr = [i, j, i, j]; // Initialize coordinates array
                farmer(i, j, arr); // Call helper function to find farmland
                result.push(arr); // Push coordinates to result array
            }
        }
    }

    // Helper function to recursively find farmland boundaries
    function farmer(i, j, arr) {
        // Base case for recursion: out of bounds or not land (0)
        if (i < 0 || j < 0 || i >= row || j >= col || land[i][j] !== 1) return;
        
        // Mark current cell as visited (0)
        land[i][j] = 0;

        // Update boundaries of the current farmland
        if (i < arr[0]) arr[0] = i; // Update min row
        if (j < arr[1]) arr[1] = j; // Update min col
        if (i > arr[2]) arr[2] = i; // Update max row
        if (j > arr[3]) arr[3] = j; // Update max col

        // Recursively check adjacent cells
        farmer(i + 1, j, arr); // Down
        farmer(i - 1, j, arr); // Up
        farmer(i, j + 1, arr); // Right
        farmer(i, j - 1, arr); // Left
    }

    return result; // Return the array of farmland coordinates
};