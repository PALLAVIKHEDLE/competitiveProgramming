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
          while(stack.length&& stack[stack.length-1]!=='[')currStr=stack.pop()+currStr
            stack.pop()
          let num=''
          while(stack.length&& !isNaN(stack[stack.length-1]))num=stack.pop()+num

          num=parseInt(num)
          let decodeStr=''
          for(let i=0; i<num;i++) decodeStr+=currStr  

          stack.push(decodeStr)
      }
  }
  return stack.join('')
};