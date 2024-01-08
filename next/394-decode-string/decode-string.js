/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack=[]
    for(let str of s){
        if(str!==']')stack.push(str)
        else{
            let currStr=''
            //grab the char until we see a '['
            while(stack.length&& stack[stack.length-1]!=='['){
                currStr=stack.pop()+currStr
            }
            stack.pop()//remove'['
            let nums=''
            //garb the numbers until we see a letter
            while(stack.length&&!isNaN( stack[stack.length-1])){
                nums=stack.pop()+nums// reverse 
            }

            nums=parseInt(nums)
             let decodedStr = '';
            for (let i = 0; i <nums; i++) {
                decodedStr += currStr;
            }
            
            stack.push(decodedStr);
        }
    }
    return stack.join('');
};