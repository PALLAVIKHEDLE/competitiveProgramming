/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
       let points = [p1, p2, p3, p4];
    points.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);//The points are sorted first based on x axis, if they are the same then they are sorted based on the y axis in ascending order. 
    
    [p1, p2, p3, p4] = [...points];////The sorted points are then assigned back to the original variables
    
    const distance = (point1, point2) => {
        return Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2);
    };
     //It checks that the distances between the opposite vertices are equal, and the distances between adjacent vertices are also equal
    return (distance(p1, p2) !== 0) && (distance(p1, p2) === distance(p1, p3) && distance(p3, p4) === distance(p4, p2)) && (distance(p1, p4) === distance(p2, p3));

};
