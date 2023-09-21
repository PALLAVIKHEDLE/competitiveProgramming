/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    let aX1=rec1[0],aX2=rec1[2], aY1=rec1[1],aY2=rec1[3]
    let bX1=rec2[0],bX2=rec2[2], bY1=rec2[1],bY2=rec2[3]
    
    let left=Math.max(aX1,bX1) 
    let right=Math.min(aX2,bX2) 

    let bottom=Math.max(aY1,bY1) 
    let top=Math.min(aY2,bY2) 

    if(right>left && top>bottom) return true


return false  
};