/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
      let array1=version1.split('.');
      let array2=version2.split('.');
      let maxLength=Math.max(array1.length, array2.length);
      for(let i=0; i<maxLength;i++){
        let num1=parseInt(array1[i])||0;
        let num2=parseInt(array2[i])||0;

        if(num1==num2)continue

         return num1 > num2 ? 1 : -1;
      }  
  return 0;    
};