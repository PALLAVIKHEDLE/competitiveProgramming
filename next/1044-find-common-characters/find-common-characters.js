/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
     let firstArray=words[0], commonChar=[]
    for(let i=1; i<=words.length-1;i++){
        const map ={}, map2 ={}
        let secondArray=words[i]
        for(let j=0; j<firstArray.length; j++){
            let val=map[firstArray[j]]
            if(val==undefined) map[firstArray[j]]=1
            else map[firstArray[j]]=val+1
        }
        commonChar = []
        for(let k=0; k<secondArray.length; k++){
            let val=map2[secondArray[k]]
            if(val==undefined) map2[secondArray[k]]=1
            else map2[secondArray[k]]=val+1
        }   
        for(key in map){
            if(map[key] > 0 && map2[key] > 0){
                let count = map[key] > map2[key] ? map2[key] : map[key];
                while(count--) commonChar.push(key) 
            }
        }
        firstArray = commonChar.join('');
    }
    return commonChar
};