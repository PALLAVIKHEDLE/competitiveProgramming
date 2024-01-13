/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let rows=grid.length, columns=grid[0].length

    const DFS=(row,column)=>{
    const stack=[[row,column]]
    let currRow, currCol, resultArea=0
    while(stack.length){
        [currRow, currCol]=stack.pop()
        if(grid[currRow][currCol]!==1)continue;

        grid[currRow][currCol]=2
        resultArea++
        if(currRow+1 < rows)stack.push([currRow+1, currCol])
        if(currRow-1 >= 0)stack.push([currRow - 1, currCol]);
        if(currCol+1<columns)stack.push([currRow, currCol + 1]);
        if(currCol-1>=0)stack.push([currRow, currCol-1]);
    }
    return resultArea;
}
let maxArea=0
    for(let i=0; i<rows;i++){
        for(let j=0; j<columns;j++){
            if(grid[i][j]===1)maxArea=Math.max(maxArea,DFS(i,j))
        }
    }
    return maxArea
};

