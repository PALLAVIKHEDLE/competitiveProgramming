/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
//     let KMap={}, VMap={}//key and value map
//     let strArray=s.split(' ')//Convert string into array
//     if(pattern.length!==strArray.length) return false
  
    
//     for(let i=0;i<pattern.length;i++){
//         if(!KMap[pattern[i]] && !VMap[strArray[i]]){
//             KMap[pattern[i]]=strArray[i]
//             VMap[strArray[i]]=pattern[i]
//         }else if(KMap[pattern[i]]!==strArray[i]&&VMap[strArray[i]]!==pattern[i])return false
//     }
//    return true 
 const strArr = s.split(' ');
  if (pattern.length !== strArr.length) return false;
  const patMap = new Map();
  const strMap = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (
      (patMap.has(pattern[i]) && patMap.get(pattern[i]) !== strArr[i]) ||
      (strMap.has(strArr[i]) && strMap.get(strArr[i]) !== pattern[i])
    ) {
      return false;
    }
    patMap.set(pattern[i], strArr[i]);
    strMap.set(strArr[i], pattern[i]);
  }
  return true;
};



//         const key=pattern[i]//letter at index i in pattern
//         const value=s[i]//word at index i in s
    
//     //if key or value already exists and does not corresponds to each other, return false
//         if(key in KMap || value in VMap){
//             if(KMap[key]!==value) return false
//             if(VMap[value]!==key) return false
//         }else{
//             KMap[key]=value
//             VMap[value]=key
//         }
//     }
//  return true // pattern is valid   