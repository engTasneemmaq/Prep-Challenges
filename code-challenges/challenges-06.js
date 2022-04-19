'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

let arr = [12, 32, 22, 45, 78, 12, 50];
const findMax = (arr) => {
  let maximum = 0;

  for (let i = 0; i < 8; i++) {
    if (arr[i] > maximum) {
      maximum=arr[i];
    }
  }
  return maximum;
}
console.log(findMax(arr));
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

let array1 = [20, '234', 'car', 41, 20, 'chair'];
const sumNums = (array1) => {
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    if (typeof array1[i] == "number") {
      sum += array1[i];
    }
  }
  return sum;
}
console.log(sumNums(array1));



    // -------------------------------------------------------------------------------------------------------

    // -------------------------------------------------------------------------------------------------------
    //  Challenge 03:
    //  optional:
    //
    //  Write a function that takes an array and returns the array reversed
    //  without using built-in functions
    //  
    // Input: ['C#', 'JS', 'Ruby','Python'] 
    // Output: ['Python','Ruby','JS','C#']

    const reverseArray = (arr) => {
      // write your code here
    }
    // -------------------------------------------------------------------------------------------------------

    module.exports = {
      findMax,
      sumNums,
      reverseArray
    };