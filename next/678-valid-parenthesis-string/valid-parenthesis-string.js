/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let validChar=[], starChar=[]
    
    for(let i=0; i<s.length;i++){
        if(s[i]=='(') validChar.push(i)
        else if(s[i]=='*')starChar.push(i)
        else {
            if(validChar.length>0){
                validChar.pop()
            }else if(starChar.length>0)  starChar.pop()
            else return false
        }
    }
    let i=validChar.length-1, j=starChar.length-1
    while(validChar[i]<starChar[j]){
           validChar.pop()
            starChar.pop()
            i--
            j--
    }
    if(validChar.length==0) return true
    else return false
};     