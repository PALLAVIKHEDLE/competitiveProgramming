/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let map={}
    let wordLength=words[0].length
    let wordCount=words.length

    let window=wordLength*wordCount

    for(let i=0; i<words.length; i++){
        let val=map[words[i]]
        if(val==undefined) map[words[i]]=1
        else map[words[i]]=val+1
    }
    // console.log('amp',map)

    let leftIndex=0, rightIndex=window-1,result=[]

    const helper=(tempStr)=>{
        let visited={}
        for(let j=0; j<tempStr.length;j+=wordLength){
            let word=tempStr.substr(j, wordLength)
            // console.log('word',word)
            let val=visited[word]
            if(val==undefined)visited[word]=1
            else visited[word]=val+1
        }
    // console.log('visited',visited)

        for(key in visited){
            console.log(map[key],visited[key],'loop')
            if(map[key]!==visited[key]) return false
        }
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


// var findSubstring = function(s, words) {
//     let map = new Map()
    
//     let wordLength = words[0].length
//     let wordCount = words.length
    
//     let slideWindow = wordLength * wordCount
    
//     for (let word of words) {
//         map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1)
//     }
//     // console.log('map',map)
    
//     let leftIndex = 0
//     let rightIndex = slideWindow - 1
//     let result = []
    
//     const helper = (tempStr) => {
//         let visited = new Map()
        
//         for (let i = 0; i < tempStr.length; i+= wordLength) {
//             let word = tempStr.substr(i, wordLength)
//             // console.log('word',word)
//             visited.has(word) ? visited.set(word, visited.get(word) + 1) : visited.set(word, 1)
//         }
//         // console.log('visited',visited)
//         for (let [key, val] of visited) {
//             console.log(map.get(key),val,'loop')

//             if (map.get(key) != val) return false
//         }
        
//         return true
//     }
    
//     while (rightIndex < s.length) {
        
//         if (rightIndex - leftIndex + 1 == slideWindow) {
//             let tempStr = s.substring(leftIndex, rightIndex + 1)
            
//             if (helper(tempStr)) result.push(leftIndex)
            
//             leftIndex++
//         }
        
        
//         rightIndex++
//     }
    
//     return result
// };