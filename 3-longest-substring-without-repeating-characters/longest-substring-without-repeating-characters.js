/**
 * @param {string} s
 * @return {number}
 */



function resetMap(map,val){
    for(key in map){
        // console.log(map[key],val)
        if(map[key]<=val)delete map[key]
    }
}

var lengthOfLongestSubstring = function(s) {
     let map={}, currentWindowLength, maxLength=0
     
    for(let i=0; i<s.length;i++){
        let val=map[s[i]]
        if(val==undefined){
            map[s[i]]=i
            currentWindowLength=Object.keys(map).length//size of map
            maxLength=Math.max(maxLength,currentWindowLength)
        }else{
            resetMap(map,val)
            map[s[i]]=i
        }
    }
  return maxLength  
};