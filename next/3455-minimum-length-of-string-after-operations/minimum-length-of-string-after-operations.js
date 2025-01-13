/**
 * @param {string} s
 * @return {number}
 */
const minimumLength = (s) => {
    
    const map = new Map();
    let del = 0;
    
    for(const ch of s) {
        map.set(ch, 1 + (map.get(ch) || 0));
        
        if(map.get(ch) > 2) {
            map.set(ch, 1);
            del += 2;
        }
    }
    
    return s.length - del;
};