/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
let start=1, commonArray=[], firstElement, secondElement, noSpecialChars

   for(let k=0; k<strs.length-1; k++){
       if(commonArray.length>0){
           firstElement=commonArray?.join("");
           secondElement=strs[start]
           }else{
               firstElement=strs[0]
               secondElement=strs[1]
               }
        if(commonArray.length>0)commonArray=[]
        
        for(let j=0; j<secondElement.length; j++){
            if(firstElement[j]==secondElement[j] ){ 
                commonArray.push(firstElement[j])
            }else break          
        }
            start++ 
       }

        noSpecialChars=commonArray.join("");
            if(strs.length==1) noSpecialChars=strs[0]
            
            
   return noSpecialChars
};