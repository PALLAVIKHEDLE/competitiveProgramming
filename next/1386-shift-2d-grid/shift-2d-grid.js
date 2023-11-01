var shiftGrid = function(grid, k) {
    let rows = grid.length
//perform the shifting k times
     for(let i=0; i<k; i++){
         //iterate over row
         for(let j=0; j<rows; j++){
//extract last element of the c/n row & move it to the beggining of next row
console.log('rows',rows)
        grid[j].unshift(grid[((rows+j-1)%rows)].pop());
         }
     }   
return grid;
};