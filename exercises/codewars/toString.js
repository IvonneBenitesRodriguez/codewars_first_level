// Converting an Array to a String.
// Use the method : .join(" ")
const books = ["one","two","three"];
function smash(books){
return books.join(" ");
};

console.log(smash(books));
//Another Example:
const names= ["Pet", "Ben","Lou","Moi"];
function conversion(names){
   return names.join(" ");
}
console.log(conversion(names));

// Also: 
//In case you want to add a comma to your final result (your string):
// .join(" ; ");
//In case you want to add an urinary plus sign to your final result:
// .join(" + ");