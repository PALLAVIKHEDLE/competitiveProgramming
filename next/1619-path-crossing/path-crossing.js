var isPathCrossing = function(path) {
    //visited keeps track of the current position with x and y coordinates, and map is used to store visited positions.
    let visited = { x: 0, y: 0 }, map = { '0,0': true };

    for (let direction of path) {
        if (direction === 'E') visited.x++;
        else if (direction === 'W') visited.x--;
        else if (direction === 'N') visited.y++;
        else if (direction === 'S') visited.y--;

        let currentPosition = `${visited.x},${visited.y}`;

        if (map[currentPosition] !== undefined) return true;
        else map[currentPosition] = true;
    }
return false;
};
