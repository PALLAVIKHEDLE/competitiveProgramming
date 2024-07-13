/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
  let n = positions.length, stack = [], robots = [];
  for (let i = 0; i < n; i++) {
    robots.push({position: positions[i], health: healths[i], direction: directions[i], originalIndex: i})
  }
  robots.sort((a, b) => a.position - b.position); 
  for (let i = 0; i < n; i++) {
    if (robots[i].direction === 'L') {
      // remove right-going robots with smaller health from the top of the stack while decreasing the current robot's health
      while (stack.length && robots[stack[stack.length - 1]].direction === 'R' && robots[stack[stack.length - 1]].health < robots[i].health) {
        stack.pop();
        robots[i].health--;
      }
      if (stack.length === 0 || robots[stack[stack.length - 1]].direction === 'L') stack.push(i); // no more collisions, add current robot to stack
      else if (stack.length > 0 && robots[stack[stack.length - 1]].health === robots[i].health) stack.pop(); // health is same, remove both
      else if (stack.length > 0 && robots[stack[stack.length - 1]].health > robots[i].health) robots[stack[stack.length - 1]].health--; // right-going robot has greater health, remove current robot and decrease right-going robot's health
    } else {
      stack.push(i);
    }
  }
  return stack.sort((a, b) => robots[a].originalIndex - robots[b].originalIndex).map((i) => robots[i].health);
};  