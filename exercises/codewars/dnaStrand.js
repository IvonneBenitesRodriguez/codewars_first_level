//Codewars Exercise:
//Complementary DNA
// In DNA Strings, symbols "A" and "T" are complements of each other,
// as "C" and "G".
//Your Function reviews one side of the DNA String, except for Haskell.
//You need to return the other complementary side.
// DNA strand is never empty or there is no DNA at all.

//Solution:
function dnaStrand(dna){
    if(!dna || dna.length === 0){
        return "";
    }
    let valuesDetected =[];
    let dnaArray = dna.split("");
    for(let i=0; i < dnaArray.length; i++){
        if(dnaArray[i] === "A"){
            valuesDetected.push("T");
        }else if(dnaArray[i] === "T"){
            valuesDetected.push("A");
        }else if(dnaArray[i] === "C"){
            valuesDetected.push("G");
        }else if(dnaArray[i] === "G"){
            valuesDetected.push("C");
        }
    }
    return valuesDetected.join("");
}
console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));