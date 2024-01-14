/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
// var canVisitAllRooms = function(rooms) {
//       let map = {};//map will keep track of visited rooms.

//     function dfs(room) {
//         //If the room is not visited, marks the room as visited by setting its value to true 
//         if (map[room] === undefined)  map[room] = true;
//         for (let i of rooms[room]) if (!map[i]) dfs(i);
//     }

//     dfs(0);//start from room 0

// // if the number of keys in the map object is equal to the total number of rooms
//     return Object.keys(map).length === rooms.length;
// };
var canVisitAllRooms = function(rooms) {
 const visited = new Set();

    function visit(i) {
        visited.add(i);
        const keys = rooms[i];
        for (const key of keys) {
            if (!visited.has(key)) {
                visit(key);
            }
        }
    }
    visit(0);

    return visited.size === rooms.length;
}