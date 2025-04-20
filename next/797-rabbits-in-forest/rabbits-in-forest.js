/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    answers.sort((a, b) => a - b);
    let res = 0, count = 0;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === 0) res++;  
        else if (i === 0 || answers[i] !== answers[i - 1] || count === 0) {
            res += answers[i] + 1; 
            count = answers[i];
        } else count--;  
    }
    return res;
};