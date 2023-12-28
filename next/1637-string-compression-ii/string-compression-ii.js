/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {
  const memo = new Map();
  return backtrack(0, '', 0, k, memo, s);
};
   //i (current index in the string s), prev (previous character), count (count of consecutive characters), k (remaining deletions allowed), memo (memoization map), and s (the input string).
function backtrack(i, prev, count, k, memo, s) {
  if (k < 0) return Infinity;
  if (i === s.length) return 0;
  ///unique key for the current set of parameters using a string template.
  const memoKey = `${i}_${prev}_${count}_${k}`;
  //it checks if the result for these parameters is already memoized. If it is, the function returns the memoized result.
  if (memo.has(memoKey)) return memo.get(memoKey);
  
  let val;
  if (s[i] === prev) {
    val = backtrack(i + 1, prev, count + 1, k, memo, s);
    if ([1, 9, 99].includes(count)) {
      val++;
    }
  } else {
    val = Math.min(
      1 + backtrack(i + 1, s[i], 1, k, memo, s),
      backtrack(i + 1, prev, count, k - 1, memo, s)
    );
  }
  memo.set(memoKey, val);
  
  return val;
}