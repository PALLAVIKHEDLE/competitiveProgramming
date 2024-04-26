/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
    let row=grid.length; col=grid[0].length, res=Number.MAX_SAFE_INTEGER;

    const dp=new Array(row).fill().map(()=> new Array(col).fill(-1));

    for(let j=0; j<col;j++){
        dp[0][j]=grid[0][j]
    }

    for(let i=1;i<row;i++){
        for(let j=0; j<col;j++){
            let temp=Number.MAX_SAFE_INTEGER;
            for(let k=0;k<col;k++){
                if(j!==k)temp=Math.min(temp, grid[i][j] + dp[i-1][k]);
            }
            dp[i][j]=temp;
        }
    }


    for(let j=0; j<col;j++){
        res=Math.min(res, dp[row-1][j])
    }  
 return res;   
};