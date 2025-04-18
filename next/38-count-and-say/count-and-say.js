/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let str='1'
    for(let i=1; i<n;i++){
        let strArr=str.split('')
        str=''
        let count=1
        //loop through current nth level line
        for(let j=0; j<strArr.length; j++){
        //Next digit is different
            if(strArr[j]!==strArr[j+1]){
             //Go to next non matching digit
                str+= count+strArr[j]
                count=1
            }else count++
        }
    }
 return str   
};