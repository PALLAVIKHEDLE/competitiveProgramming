/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area=0, left=0, right= height.length-1
    while(left<right){
    // area distance between 2 walls(width) * height (why min height -> water cannot go above the shorter wall.
    //If one wall is shorter, the water level is limited by that wall.)
        let temp= Math.min(height[left], height[right])* (right-left)
        area=Math.max(area, temp)
        if(height[left]>height[right])right--
        else left++
    }
   return area

    // //Brute Force
    // let area=0
    // for(let i=0; i<height.length;i++){
    //     for(let j=i+1; j<height.length;j++){
    //         let temp=Math.min(height[i], height[j])*(j-i)
    //         area=Math.max(temp,area)
    //     }
    // }
    // return area
};