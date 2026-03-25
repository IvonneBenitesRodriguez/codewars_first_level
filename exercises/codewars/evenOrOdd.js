//Codewars Even or Odd exercise:
//create a function that takes an integer as an argument, 
//and returns "Even" for even numbers or "Odd" for odd numbers.

//Note: 
//Even numbers are divisible by 2 
//Odd numbers are not divisible by 2

//For this exercise: we are going to use a 
// fast way to check that a number is odd or even.
// number % 2 === 0;

const number = 4;
function evenOrOdd(number){
    if(number % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
};

console.log(evenOrOdd(number));