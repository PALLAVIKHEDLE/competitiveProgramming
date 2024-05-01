/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
//     let index=0, reversePre=''
//     for(let i=1;i<=word.length;i++){
//         if(word[i]==ch){
//             index=i;
//             break;
//         }    
//     }
//     for(let i=index;i>=0;i--)reversePre+=word[i]
//     for(let i=index+1;i<word.length;i++)reversePre+=word[i]
// return reversePre

 let index = word.indexOf(ch); // Find the index of the character 'ch' in the word

    if (index !== -1) { // Check if the character 'ch' is found in the word
        let prefix = word.substring(0, index + 1); // Extract the prefix including 'ch'
        let suffix = word.substring(index + 1); // Extract the suffix after 'ch'

        let reversedPrefix = prefix.split('').reverse().join(''); // Reverse the prefix

        return reversedPrefix + suffix; // Concatenate reversed prefix with suffix
    }

    return word;
};