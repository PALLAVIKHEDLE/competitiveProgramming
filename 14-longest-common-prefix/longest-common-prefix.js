/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let firstElement, secondElement, commonArray=[], start=0,noSpecialChars
    if(strs.length==1) return strs[0]
    for(let i=0;i<strs.length;i++){
        if(commonArray.length){
            firstElement=commonArray?.join('')
            secondElement=strs[start]
        }else{
            firstElement=strs[0]
            secondElement=strs[1]
        }
      
    
        if(commonArray.length>0)commonArray=[]
     for(let j=0;j<firstElement.length;j++){
         if(firstElement[j]==secondElement[j]){
             commonArray.push(firstElement[j])
         }else break
     }
    start++

    }
      noSpecialChars=commonArray.join("");
   
            
            
   return noSpecialChars

};