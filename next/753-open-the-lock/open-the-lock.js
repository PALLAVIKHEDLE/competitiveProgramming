/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    if(deadends.includes('0000'))return -1;
    //Treat deadends like visited, if number is visited ignore it.
    let visited= new Set(deadends);
    
    const queue=[['0000',0]];
    visited.add('0000');
    while(queue.length){
        const [curr, count]=queue.shift();
        if(curr==target)return count;
        //each number will create 8 more different paths to check
        //e.g. if curr=0000, 8 next/prev numbers to check are
        //1000,  9000, 0100, 0900, 0010, 0090, 0001, 0009

        for(let i=0; i<4; i++){
            let firstBit=curr[i]
            let up=Number(firstBit)+1,
                down=Number(firstBit)-1;

            // if up is 9, then up + 1 = 10 -> set it to 0.
            if(up===10)up='0';
             // if down is 0, then down - 1 = -1 -> set to 9.
            if(down==-1)down='9';

            const next =  curr.substring(0, i) + up  + curr.substring(i+1)
            const prev =  curr.substring(0, i) + down + curr.substring(i + 1)
            
            // if not visited, push to queue
            if(!visited.has(next)) {
                visited.add(next)
                queue.push([next, count + 1])   
            }

            if(!visited.has(prev)) {
                visited.add(prev)
                queue.push([prev, count + 1])   
            }

        }
    }

    return -1;
};