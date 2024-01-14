/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=area=0, right=height.length-1;
    while(left<right){
        let temp=(right-left)* Math.min(height[left], height[right])
        area=Math.max(area, temp)
        if(height[left]>height[right])right--
        else left++
    }
return area    
};