//Codewars: Sum of Positive:
//You get an array of numbers, return the sum 
// of all  the positive ones.
//Example:
// [1,-4, 7,12] => 1 + 7 + 12 = 20
// If there is nothing to sum , the sum is default to 0

const nums=[1,-4,7,12];

function positiveSum(arr){
    let sumPositives = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sumPositives += arr[i];
    } 
    }
    return sumPositives;
  }

console.log(positiveSum(nums));