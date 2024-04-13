/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0;
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxArea = 0;
    
    // Create a 2D array to store the heights of consecutive '1's
    const heights = Array.from(Array(rows), () => Array(cols).fill(0));
    
    // Initialize the heights for the first row
    for (let j = 0; j < cols; j++) {
        heights[0][j] = parseInt(matrix[0][j]); // Convert string '1'/'0' to number
    }
    
    // Fill the heights for subsequent rows based on matrix values
    for (let i = 1; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            heights[i][j] = matrix[i][j] === '1' ? heights[i - 1][j] + 1 : 0;
        }
    }
    
    // Calculate the largest rectangle area using heights array for each row
    for (let i = 0; i < rows; i++) {
        maxArea = Math.max(maxArea, largestRectangleArea(heights[i]));
    }
    
    return maxArea;
};

function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    heights.push(0); // Append 0 at the end to ensure all bars are popped from stack
    
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            const h = heights[stack.pop()];
            const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }
    
    heights.pop(); // Remove the appended 0
    return maxArea;
}
