/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
     var bottlesDrank = numBottles;  //drink all initial bottles
        var emptyBottles = numBottles;

        while(emptyBottles >= numExchange){
            numBottles = Math.floor(emptyBottles / numExchange);  //exchange empty bottles for full ones
            bottlesDrank += numBottles;  //drink new full bottles
            emptyBottles = emptyBottles % numExchange + numBottles;  //update empty bottles
        }

        return bottlesDrank;
};