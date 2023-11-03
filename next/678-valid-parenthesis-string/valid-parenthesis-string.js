/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let validChar=[], starCheck=[]
    for(let i=0; i<s.length;i++){
        //Identify the star & valid parenthesis position
        if(s[i]=='(')validChar.push(i)
        else if(s[i]=='*')starCheck.push(i)
        else{
            if(validChar.length>0) validChar.pop()//Pop from 'validChar' if '(' is available
            else if(starCheck.length>0) starCheck.pop()//Pop from 'starCheck' if '*' is available
            else return false
        }
    }
// Matching Parentheses with Wildcards
    let i = validChar.length - 1, j = starCheck.length - 1;
    while(validChar[i]<starCheck[j]){
        validChar.pop();
        starCheck.pop();
        i--;
        j--;
    }
     if(validChar.length === 0) return true;
     else return false;
};     