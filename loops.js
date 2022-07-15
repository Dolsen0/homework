// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either “A,” “B,” “C,” “D,” or “F.” Call that function for a few different scores and log the result to ensure it works.

// let grade = ""

// function assignGrade(numScore) {
//   for (let i = 100; i >= numScore; i--) {
//     if (numScore >= 90) {
//       grade = "A";
//     } else if (numScore >= 80) {
//       grade = "B";
//     } else if (numScore >= 70) {
//       grade = "C";
//     } else if (numScore >= 60) {
//       grade = "D";
//     } else {
//       grade = "F";
//     }
//   }
//   console.log(grade);
// }

// assignGrade(99)

// 2. Create a function that returns the number of true values in an array.

// const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
// let num = 0

// function trueArray(arr){

//     for(let i = 0; i <= arr.length - 1 ; i++){
//         if (arr[i] === true){
//             num = num + 1
//         }
//     }console.log(num)
// }

// trueArray(testArray)

// 3. Create a function that converts a string to all uppercase letters and console.log the result (hint: string methods):

// let str = `WHAT a TIME to BE ALIVE!`;
// let result = "";

//1
// function upCase(string) {
//   result = string;
//   console.log(result.toUpperCase());
// }

// //2
// function upCase2(string) {
//   for (let i = 0; i <= string.length - 1; i++) {
//     result = result + string[i];
//   }
//   console.log(result.toUpperCase());
// }

// upCase2(str);
// upCase(str);

// 4. Create a function that takes in a number of two-pointers and three-pointers made and returns a basketball team’s total score?

// function scoreBasketBall(twoPT,threePT){
//     return((twoPT * 2) + (threePT * 3))
// }

// console.log(scoreBasketBall(5,3))

// Extra for experts:
// 5. Create a function that takes an array of numbers & returns both min and max in that order. (use a loop)

let arr = [1, 7, 2, 8, 5, 3, 6, 7, 0, 22];
let arrayR = [];

function minMax(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let x = array[i];
        arr[i] = array[j];
        arr[j] = x;
      }
    }
  }
  console.log(array[0]);
  arrayR = array.reverse();
  console.log(arrayR[0]);
}

console.log(minMax(arr));
