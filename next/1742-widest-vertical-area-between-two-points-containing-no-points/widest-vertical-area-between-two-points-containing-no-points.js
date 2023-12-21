/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    //sort the points based on their x-cordinates
    points.sort((a,b)=>a[0]-b[0])
    console.log('points,', points)
    let max_width=Number.MIN_SAFE_INTEGER

    for(let i=1; i<points.length;i++){
        let width=points[i][0]-points[i-1][0]
        max_width=Math.max(max_width,width)
    } 
return max_width
};