//Codewars Exercise:
//Complementary DNA
// In DNA Strings, symbols "A" and "T" are complements of each other,
// as "C" and "G".
//Your Function reviews one side of the DNA String, except for Haskell.
//You need to return the other complementary side.
// DNA strand is never empty or there is no DNA at all.

//Proceso Mental PSEUDOCODE:
 //Entonces el string es dna, yo crearia una variable llamada valuesDetected 
 // y la inicializaria a 0.
 // Luego usaria el metodo split a dna para convertirla en array. 
//Luego usaria un for statement para iterar por cada elemento del array convertido
//  y luego dentro del for statement colocaria mi condicional diciendo 
// que si es los caracteres son iguales a "A" return "T" y si son "T" devolver "A", 
// pero aca tendria que agregar los valores obtenidos a valuesDetected 
// quiza usando el metodo push y lo mismo crearia otra condicion
// con "C" y "G" igual que "A" y "T" y tambien agregaria el resultado a la variable valuesDetected
// usando el metodo push. 
// Cerrando el for statement recien colocare el return keyword con la variable valuesDetected;  
// Pero evidentemente como parte del defensive programming agregaria una linea al inicio 
// de un if conditional que mencione si DNA !== [ ]{ return 0 }


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