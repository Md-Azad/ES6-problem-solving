// // problem 1 
// 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.
const numArray = [1,3,5,7,9];
for ( let i = 0; i<numArray.length; i++){
    numArray[i] = numArray[i]+1;
    
}
console.log(numArray);

// do the same using map method
const numsArray = [1,3,5,7,9];
function makeEven(num){
    return num+1;
}
const evenArry = numsArray.map(makeEven);
console.log(evenArry);

// You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.

const anotherArray = [33,50,79,78,90,101,30];
const resultArray = anotherArray.filter(num =>num%10 ===0)
console.log(resultArray);
