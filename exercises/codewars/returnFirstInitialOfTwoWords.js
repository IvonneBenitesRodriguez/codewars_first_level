//Codewars exercise: Abbreviate a two word name
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them.
//It should look like this:
//Sam Harris => S.H

function abbrevName(name){
    const namesArray =  name.split(" ");
    return namesArray[0].charAt(0).toUpperCase() + "." + namesArray[1].charAt(0).toUpperCase();
}
console.log(abbrevName("helena daya"));
console.log(abbrevName("sheila carpio"));
console.log(abbrevName("olivia straub"));
console.log(abbrevName("ana benites"));
