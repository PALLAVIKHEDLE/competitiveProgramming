/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
     tokens.sort((a, b) => a - b); // Sort tokens in ascending order

    let score = 0, maxScore = 0;
    let i = 0,j = tokens.length - 1;

    while (i <= j) {
        if (power >= tokens[i]) {
            power -= tokens[i];
            score++;
            i++;
            maxScore = Math.max(maxScore, score);
        } else if (score > 0) {
            power += tokens[j];
            score--;
            j--;
        } else break;
    }

    return maxScore;
};