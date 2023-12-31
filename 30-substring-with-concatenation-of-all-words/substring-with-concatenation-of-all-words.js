/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let map={}
    //wordLength is the length of a single word.
    //wordCount is the total number of words in the words array.
    let wordLength=words[0].length, wordCount=words.length
    //total length of all words concatenated together.
    let window=wordLength*wordCount

    //store the count of each word in the words array.
    for(let i=0; i<words.length; i++){
        let val=map[words[i]]
        if(val==undefined) map[words[i]]=1
        else map[words[i]]=val+1
    }

    let leftIndex=0, rightIndex=window-1,result=[]

    const helper=(tempStr)=>{
        let visited={}
        for(let j=0; j<tempStr.length;j+=wordLength){
            let word=tempStr.substr(j, wordLength)
            let val=visited[word]
            if(val==undefined)visited[word]=1
            else visited[word]=val+1
        }

        for(key in visited)if(map[key]!==visited[key]) return false
        
    return true
    }

    while(rightIndex<s.length){
        if(rightIndex-leftIndex+1==window){
            let tempStr=s.substring(leftIndex, rightIndex+1)
            if(helper(tempStr)) result.push(leftIndex)

            leftIndex++
        }
        rightIndex++
    }

  return result  
};