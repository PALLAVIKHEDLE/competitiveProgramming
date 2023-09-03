/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
//    let map={}
//    for(let str of strs){
//        //for each string, sort its characters alphabetically and join them back together into a new string's'
//        let s= str.split('').sort().join('')
//        //check if the map object already has a key for the sorted string 's'. if not, create an empty array for that key.
//        if(!map[s]) map[s]=[]
//        map[s].push(str)
//    }
//    return Object.values(map) //to extract the values (arrays of anagrams) from the map object and return them as an array of arrays.

 const obj={}
    strs.forEach((str)=>{
        const key=str.split("").sort().join("")
        if(!obj[key])obj[key]=[str]
        else obj[key].push(str);
    })
       return Object.values(obj);
};




