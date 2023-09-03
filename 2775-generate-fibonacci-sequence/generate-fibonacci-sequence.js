/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
   let [a,b]=[0,1]
   while(true){
       yield a;// The yield keyword is used to produce a value from the generator each time it's called. In this case, it yields the value of a, which starts at 0.
       [a,b]=[b,a+b]
   }

};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */