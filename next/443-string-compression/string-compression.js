/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let write=0;//Position to write the compressed char
  let read=0; //position to read char
  while(read<chars.length){
      let count=0; curChar=chars[read]
      while(read<chars.length && chars[read]==curChar){
          read++
          count++
      }
      // Write the character to the compressed array
        chars[write++] = curChar;
        if (count > 1) {
            let countStr = count.toString();
            for (let digit of countStr) {
                chars[write++] = digit
            }
        }
    }
    return write; // Return the new length of the array
  
};