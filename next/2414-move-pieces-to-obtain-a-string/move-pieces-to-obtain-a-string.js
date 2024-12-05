/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
	let lCount = 0;//count of l's in target, to be consumed later in start
	let rCount = 0;//count of r's in start, to be consumed later in target

	for (let i = 0; i < start.length; i++) {
		if (start[i] === "R") rCount++;//add r to count
		if (start[i] === "L") lCount--;//remove l from count

		if (target[i] === "L" && rCount > 0) return false;//if L in start is blocked by R
		if (start[i] === "L" && rCount > 0) return false;//if there is an unsetteled R in start

		if (target[i] === "L") lCount++;//add l to count
		if (target[i] === "R") rCount--;//remove r from count

		if (lCount< 0 || rCount < 0) return false;//check if the requirements are less than available
	}
	return !lCount && !rCount;//count should return to zero as all L and R are consumed
};