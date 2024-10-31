/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */


var minimumTotalDistance = function(robot, factory) {
    // Sort positions
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);
    
    const m = robot.length;
    const n = factory.length;
    
    // Create DP table
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Base case initialization
    for (let i = 0; i < m; i++) {
        dp[i][n] = Infinity;
    }
    
    // Process each factory from right to left
    for (let j = n - 1; j >= 0; j--) {
        let prefix = 0;
        const qq = [[m, 0]];
        
        // Process each robot from right to left
        for (let i = m - 1; i >= 0; i--) {
            // Add distance to current factory
            prefix += Math.abs(robot[i] - factory[j][0]);
            
            // Remove elements outside factory limit window
            if (qq[0][0] > i + factory[j][1]) {
                qq.shift();
            }
            
            // Maintain monotonic queue property
            while (qq.length && qq[qq.length - 1][1] >= dp[i][j + 1] - prefix) {
                qq.pop();
            }
            
            qq.push([i, dp[i][j + 1] - prefix]);
            dp[i][j] = qq[0][1] + prefix;
        }
    }
    
    return dp[0][0];
};