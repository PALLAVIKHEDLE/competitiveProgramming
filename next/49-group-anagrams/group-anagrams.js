/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map={}, onceLetter=[]
  for(let i=0; i<strs.length; i++){
  let sortedString=strs[i].split('').sort().join('');
     if (!map[sortedString]) map[sortedString] = [];
     map[sortedString].push(strs[i]);
  }
  return Object.values(map);
}