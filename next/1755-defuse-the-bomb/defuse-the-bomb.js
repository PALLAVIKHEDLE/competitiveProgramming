/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const N = code.length;
    const answer = new Array(N);

    if (k == 0) {
        answer.fill(0);
        return answer;
    }

    const isReversed = k > 0;
    if (isReversed) {
        code.reverse();
    } else {
        k = -k;
    }

    let sum = 0;
    for (let i = 0; i < k; ++i) {
        sum += code[i];
    }
    for (let i = k; i < N; ++i) {
        answer[i] = sum;
        sum += code[i] - code[i - k];
    }
    for (let i = 0; i < k; ++i) {
        answer[i] = sum;
        sum += code[i] - code[N - k + i];
    }

    if (isReversed) {
        code.reverse();
        answer.reverse();
    }

    return answer;
};