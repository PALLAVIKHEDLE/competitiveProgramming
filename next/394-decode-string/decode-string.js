/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack=[]
  for(let str of s ){
      if(str!==']')stack.push(str)
      else{
          let string=''
          while(stack[stack.length-1]!=='['){
              string=stack.pop()+string
          }
          stack.pop()
          let nums=''
           while(!isNaN(stack[stack.length-1])){
              nums=stack.pop()+nums
          }
          nums=parseInt(nums)
          let decodeStr=''
          for(let i=0; i<nums; i++){
              decodeStr+=string
          }
          stack.push(decodeStr)
      }
  }
 return stack.join('')
};