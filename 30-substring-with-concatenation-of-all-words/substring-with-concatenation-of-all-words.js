/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// var findSubstring = function(s, words) {
//     let totalCharCount=0
//     let map={}
//     let wordLength=words[0].length
//     let wordCount=words.length

//     let window=wordLength*wordCount

//     for(let i=0; i<words.length; i++){
//         let val=map[words[i]]
//         if(val==undefined) map[words[i]]=1
//         else map[words[i]]=val+1
//     }
//     console.log('amp',map)

//     let leftIndex=0, rightIndex=window-1,result=[]

//     const helper=(tempStr)=>{
//         let visited={}
//         for(let j=0; j<tempStr.length;j+=wordLength){
//             let word=tempStr.substr(j, wordLength)
//             if(word==undefined)visited[word]=1
//             else visited[word]=word+1
//         }

//         for(let [key, val] in visited){
//             if(map[key]!==val) return false
//         }
//         return true
//     }

//     while(rightIndex<s.length){
//         if(rightIndex-leftIndex+1==window){
//             let tempStr=s.substring(leftIndex, rightIndex+1)
//             if(helper(tempStr)) result.push(leftIndex)

//             leftIndex++
//         }
//         rightIndex++
//     }

//   return result  
// };


var findSubstring = function(s, words) {
    let totalCharCount = 0
    let map = new Map()
    
    let wordLength = words[0].length
    let wordCount = words.length
    
    let slideWindow = wordLength * wordCount
    
    for (let word of words) {
        map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1)
    }
    
    let leftIndex = 0
    let rightIndex = slideWindow - 1
    let result = []
    
    const helper = (tempStr) => {
        let visited = new Map()
        
        for (let i = 0; i < tempStr.length; i+= wordLength) {
            let word = tempStr.substr(i, wordLength)
            
            visited.has(word) ? visited.set(word, visited.get(word) + 1) : visited.set(word, 1)
        }
        
        for (let [key, val] of visited) {
            if (map.get(key) != val) return false
        }
        
        return true
    }
    
    while (rightIndex < s.length) {
        
        if (rightIndex - leftIndex + 1 == slideWindow) {
            let tempStr = s.substring(leftIndex, rightIndex + 1)
            
            if (helper(tempStr)) result.push(leftIndex)
            
            leftIndex++
        }
        
        
        rightIndex++
    }
    
    return result
};