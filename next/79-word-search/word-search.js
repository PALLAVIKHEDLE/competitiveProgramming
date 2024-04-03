/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let row=board[0].length,column=board.length
    for(let i=0; i<column;i++){
        for(let j=0; j<row;j++){
             if (depthFirstSearch(i, j, word, board))return true;
        }
    }
    return false
};

// Apply backtracking on every element to search the
// required word
function depthFirstSearch(row, col, word, grid) {
    if (word.length == 0) return true;
    // Check if the cell is not out of bound or particular
    // grid element is not among required characters
    if (
        row < 0 ||
        row == grid.length ||
        col < 0 ||
        col == grid[0].length ||
        grid[row][col] != word[0]
    ) {
        return false;
    }

    let result = false;
    grid[row][col] = "*";

    // Explore the four neighboring directions that is
    // bottom, right, top, left, by adding (0, 1), (1, 0),
    // (0, -1), (-1, 0) indices respectively
    let offsets = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    for (let offset of offsets) {
        let rowOffset = offset[0],
            colOffset = offset[1];
        result = depthFirstSearch(
            row + rowOffset,
            col + colOffset,
            word.substring(1),
            grid
        );
        // Break instead of implementing all steps and
        // wasting our time
        if (result) break;
    }
    // This will revert the cell to it's original value
    grid[row][col] = word[0];
    return result;
}
