/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumTripletValue = (a) => {
    const n = a.length;
    let maxt = 0, maxd = 0, maxi = 0;
    for (let k = 0; k < n; ++k) {
        const ak = a[k];
        maxt = Math.max(maxt, maxd * ak);
        maxd = Math.max(maxd, maxi - ak);
        maxi = Math.max(maxi, ak);
    }
    return maxt;
};