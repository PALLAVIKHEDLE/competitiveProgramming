/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let x = 0, y = 0; // Current location
    let dirs = [ // Possible directions
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    let max = 0; // max distance from the origin
    let dir = 0; // current direction (index to dirs)
    let obs = {}; // set object of obstacles for faster lookup
    
    // Store obstacles in an object for quick lookup
    for(let obstacle of obstacles) {
        obs[obstacle] = true;
    }
    
    // Iterate through each command
    for(let command of commands) {
        switch(command) {
            // Commands -1 and -2 only change direction
            case -1:
                dir++;
                if(dir >= dirs.length) dir = 0;
                break;
            case -2:
                dir--;
                if(dir < 0) dir = 3;
                break;
            default:
                // Take each step one at a time, looking for obstacles
                while(command--) {
                    // Record prev position in case we need to backtrack due to an obstacle
                    let prevX = x;
                    let prevY = y;
                    
                    // Move in current direction
                    x += dirs[dir][0];
                    y += dirs[dir][1];
                    
                    // Check if an obstacle is in that position
                    if(obs[x+','+y]) {
                        // Move back out of obstacle
                        x = prevX;
                        y = prevY;
                        break;
                    }
                }
        }
        // Record max distance seen so far after each command b/c the maximum distance might not be at the last position
        max = Math.max(max, x**2 + y**2);
    }
    return max;
};