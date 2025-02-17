/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const bt = (count) => {
        let cnt = 0;
        for(let i in count) {
            if(!count[i]) continue;
            
            count[i]--;
            cnt += 1 + bt(count);
            count[i]++;
        }
        return cnt;
    }
    
    const count = {};
    for(const c of tiles) {
        count[c] = (count[c] || 0) + 1;
    }
    return bt(count);
};