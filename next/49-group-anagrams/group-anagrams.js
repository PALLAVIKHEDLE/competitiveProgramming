/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map={}
    for(let ana of strs){
       let s= ana.split('').sort().join('')
       if(!map[s])map[s]=[]
       map[s].push(ana)
    }
 return Object.values(map)   
};