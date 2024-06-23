/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    return title.split(" ").map((val)=>{
            if(val.length<=2)return val.toLowerCase()
            else return val[0].toUpperCase()+val.slice(1).toLowerCase()
     }).join(" ")
};