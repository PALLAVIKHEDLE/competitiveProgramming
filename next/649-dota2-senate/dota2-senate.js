/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    //Stack Implementation
    let dire=[],rad=[],n=senate.length

    for(let i=0; i<n;i++){
        senate[i]==='R'?rad.push(i):dire.push(i)
    }
    while(rad.length>0 && dire.length>0){
        const rSenator=rad.shift()
        const dSenator=dire.shift()
        if(rSenator<dSenator)rad.push(n++)
        else dire.push(n++)
    }
    return rad.length==0?'Dire':'Radiant'
};