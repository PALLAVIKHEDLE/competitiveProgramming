/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {
    if(s.length%2) return false
    let balance=0
    //Check balance running left to right
    for(let i=0; i<s.length; i++){
        if(locked[i]=='0'||s[i]=='(') balance++
        else balance --
        if(balance<0)return false
    }
     //Check balance running right to left
     balance=0
     for(let i=s.length-1; i>=0; i--){
         if(locked[i]=='0'|| s[i]==')') balance++
         else balance--
         if(balance<0)return false
     }
 return true    
};