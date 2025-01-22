/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    
  let stack = [];
  
  const visited = new Set();
  
  for(let i=0; i<isWater.length; i++) {
    for(let j=0; j<isWater[i].length; j++) {
      if(isWater[i][j]===1) {
        isWater[i][j]=0
        stack.push([i, j, 0]); 
        visited.add([i, j].toString());
      } else {
        isWater[i][j]=1;
      }
    }
  }
  
  const getAdjacents = function(i, j) {
    let arr = [];
    if(i>0) arr.push([i-1, j]);
    if(j>0) arr.push([i, j-1]);
    if(i<isWater.length-1) arr.push([i+1, j]);
    if(j<isWater[i].length-1) arr.push([i, j+1]);
    return arr;
  }
  
  while(stack.length) {
    let newStack = [];
    while(stack.length) {
      let [i, j, val] = stack.pop();
      let arr = getAdjacents(i, j);
      for(let index=0; index<arr.length; index++) {
        let [newI, newJ] = arr[index];
        //console.log(visited)
        if(visited.has([newI, newJ].toString())) continue;
        visited.add([newI, newJ].toString());
        isWater[newI][newJ] = val+1; 
        newStack.push([newI, newJ, val+1]);
      }
    }
    stack = newStack;
  }
  
  return isWater;
};