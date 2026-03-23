//Codewars: count Positives and Sum Negatives:
// My approach:
// I used a variable to store the results
// a for statement to pass through all the values of the input.
// used a conditional to establish the condition
// used a return keyword to present the potential solution.
// used if...else conditions to ask first for the total number of the positive numbers
// and then for the sum of the negative numbers
// used a push method to fetch all the values obtained in the variable to store the results.
// and a console.log to test my results.
const numbers = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15];
function countPositivesSumNegatives(input){
    const valuesRequested = [];
    for( let i=0; i < input.length; i++){
        if(input < 0){
          return  valuesRequested.push(input.length);
        }else if(input < 0){
           return  valuesRequested.push(input[i]++);
        }
    }
    return valuesRequested;
}
console.log(countPositivesSumNegatives(numbers));

//Corrected version:
function countPositivesSumNegativesImproved(input){
    if( !input || input.length === 0){
        return [];
    }
        let countPositivesI = 0;
        let sumNegativesI = 0; 
        for (let i = 0; i < input.length; i++){
            if(input[i] > 0){
                countPositivesI++;
            }else if(input[i] < 0){
                sumNegativesI += input[i];
            }
        }
        return [countPositivesI,sumNegativesI];
    }
console.log(countPositivesSumNegativesImproved(numbers));