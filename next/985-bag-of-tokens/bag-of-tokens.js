/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
     tokens.sort((a, b) => a - b); // Sort tokens in ascending order

    let score = 0, //keeps track of the current score.
        maxScore = 0; //keeps track of the maximum score achieved so far
        let i=0, j=tokens.length-1

    while (i <=j) {
        //  token is played face-up, power is reduced by the token value,
        if (power >= tokens[i]) {
            power -= tokens[i];
            score++;
            i++;
            maxScore = Math.max(maxScore, score);
        } else if (score > 0) {
            // played face-down, power is increased
            power += tokens[j];
            score--;
            j--;
        } else break;
    }

    return maxScore;
};