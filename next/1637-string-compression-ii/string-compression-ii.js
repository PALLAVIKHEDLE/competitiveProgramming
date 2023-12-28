/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {
  const memo = new Map();
  return backtrack(0, '', 0, k, memo, s);
};
  
function backtrack(i, prev, count, k, memo, s) {
  if (k < 0) return Infinity;
  if (i === s.length) return 0;
  
  const memoKey = `${i}_${prev}_${count}_${k}`;
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