/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const heightArray = [...heights];
    const newArr = heights.slice().sort((a, b) => b - a);
    let res = [];
    
    for (let i = 0; i < names.length; i++) {
        res[i] = names[heightArray.indexOf(newArr[i])];
    }

    return res;
};