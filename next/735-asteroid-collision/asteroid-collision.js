/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  // Initialize an empty stack to keep track of asteroids
    let stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        // Get the top asteroid on the stack (if stack is not empty)
        let top = stack.length > 0 ? stack[stack.length - 1] : null;

        // Current asteroid
        let curr = asteroids[i];

        // Check conditions for asteroid collisions
        if (!stack.length > 0 || curr > 0 || top < 0) {
            // Conditions for not colliding: 
            // 1. If the stack is empty.
            // 2. If the current asteroid is positive (moving to the right).
            // 3. If the top asteroid on the stack is negative (moving to the left).
            // In such cases, the current asteroid can continue moving without colliding.
            stack.push(curr);
        } else if (-curr === top) {
            // Conditions for a head-on collision:
            // If the current asteroid has the same absolute value as the top asteroid on the stack,
            // they will collide and destroy each other. Remove both from the stack.
            stack.pop();
        } else if (-curr > top) {
            // Conditions for the current asteroid destroying the top asteroid on the stack:
            // If the current asteroid is larger (absolute value) than the top asteroid on the stack,
            // the top asteroid on the stack will be destroyed. Move the index back to reevaluate the current asteroid.
            stack.pop();
            i--;
        }
    }

    // Return the remaining asteroids after all collisions
    return stack;
};