/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let openStack=[];
    for(let i=0;i<s.length;i++){
          //fetch last char push into stack
      let lastChar=openStack[openStack.length-1]
        if(s[i]=='('||s[i]=='{'||s[i]=='[')openStack.push(s[i])
        else if((s[i]==')'&&lastChar=='(')||(s[i]=='}'&&lastChar=='{')||(s[i]==']'&&lastChar=='['))openStack.pop()
        else return false
    }
    if(openStack.length==0)return true
    else return false
};