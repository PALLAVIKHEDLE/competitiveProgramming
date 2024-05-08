/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let {length}=score, rank=["Gold Medal", "Silver Medal", "Bronze Medal"];
    let answer = new Array(length);
    let scoreWithIndex=score.map((score, index)=>[score,index]);

    //Sort the score in descending order
    scoreWithIndex.sort((a,b)=>b[0]-a[0]);

    for(let i=0; i<length;i++){
        let index=scoreWithIndex[i][1];
        if(i<3)answer[index]=rank[i]
        else answer[index]=String(i+1)
    }
return answer
};