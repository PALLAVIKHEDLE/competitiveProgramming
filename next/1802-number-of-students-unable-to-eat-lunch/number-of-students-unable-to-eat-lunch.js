/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
     let count=0
    // if count=students.length, means there's an infinite-loop
    while(students.length && count<students.length){
        if(students[0]==sandwiches[0]){
            count=0
            // CASE1: student gets a sandwich and leaves.
            students.shift();
            sandwiches.shift()  
        }else{
            count++
            // CASE2: student goes to queue's end.
            students.push(students.shift())
        }
    }
return students.length  
};