/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let votingQueue=new Queue()
    let dCount=0; //remaining "Dire" senators
    let rCount=0; //remaining "Radiant" senators
    let dBanCount=0; //How many "Dire" that need to be banned
    let rBanCount=0; //How many "Radiant" that need to be banned

    //put them all in a voting queue and count them to start
    for(let i=0; i<senate.length; i++){
        let voter=senate[i]
        votingQueue.enqueue(voter)
        if(voter=='R')rCount++
        else dCount++
    }

    //Process the voter until one side is eliminated
    while(votingQueue.size()>0 && dCount>0 && rCount>0){
        let nextVote=votingQueue.dequeue()
        if(nextVote=='R'){
            if(rBanCount>0){
                rBanCount--
                rCount--//senator is gone
            }else{
                dBanCount++//vote off next "Dire" senator
                votingQueue.enqueue(nextVote)
            }
        }else{
            if(dBanCount>0){
                dBanCount--
                dCount--//dire is gone
            }else{
                rBanCount++//vote off next "Radiant" senator
                votingQueue.enqueue(nextVote)
            }
        }
    }
    // If "Dire" is eliminated return "Radiant" otherwise "Dire" won!
    return dCount == 0 ? "Radiant" : "Dire";
};