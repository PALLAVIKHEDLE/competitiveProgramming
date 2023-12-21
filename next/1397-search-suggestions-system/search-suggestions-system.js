/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    let result=[]
    products.sort()
    for(let i=0; i<searchWord.length;i++){
        let next=[]
        result.push([])
        for(let j=0; j<products.length; j++){
            if(products[j][i]==searchWord[i]){
                next.push(products[j])
                result[i].length<3 && result[i].push(products[j])
            }
        }
        products=next
    }
   return result 
};