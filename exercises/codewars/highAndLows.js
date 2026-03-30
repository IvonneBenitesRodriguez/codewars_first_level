//Codewars Exercise: High and Lows
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//Examples
//highAndLow("1 2 3 4 5"); // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//Notes
//All numbers are valid Int32, no need to validate them.
//There will always be at least one number in the input string.
//Output string must be two numbers separated by a single space, and highest number is first.

//Pseudo codigo:
//Para este ejercicio intentare usar el metodo Number.MAX_VALUE y el metodo
// Number.MIN_VALUE para intentar conseguir los maximos y minimos valores
// Se que es un string pero quisiera intentar iterar por cada digito
// pero para ello considero que debo de usar split para convertir ese string en array
// claro antes de ello en la misma segunda linea de la funcion pienso crear mis dos variables
// una para guardar los valores maximos y otra para guardar los valores minimos
// luego de ellao creare una variable para convertir el string en array y poder usar seguidamente
// el for statement e iterare por cada uno de los digitos
// luego creare mis condicionales y usare strict equality para afirmar si
// el digito iterado es igual al valor maximo entonces agrega ese valor a la variable
// llamda valores maximos usando el metodo push
// hare lo mismo con la variable de valores minimos
// luego creo que dejare el else siguiente vacio por que con mis dos condicionales if es valor
// maximo retorna el valor maximo if es valor minimo retorna el valor minimo
// y bueno el otro else lo dejo vacio (aunque no se si es correcto o dagnino hacer eso)
// luego cerrare el for statement y abajo escribire return keyword para retornar 
// el valor maximo luego + " " para darle el espacio y el valor minimo.
//aunque tambien pienso que podria usar el metodo reduce pero no se bien 



//Solution:
function highAndLow(numbers){
    let maxValue = "";
    let minValue = "";
    let arrayNumbers = numbers.split("");
    for(let i=0; i < arrayNumbers.length ; i++){
        if(arrayNumbers[i] === Number.MAX_VALUE){
            maxValue.push(Number.MAX_VALUE);
        }else if(arrayNumbers[i] === Number.MIN_VALUE){
            minValue.push(Number.MIN_VALUE);
        }else {

        }
    }
    return maxValue + "" + minValue;
}
console.log(highAndLow("12345"));