//Codewars: countingSheeps 
//Consider a list of arrays in this case a list of sheeps.
//where some sheep may be missing from their place.
//We need a function that counts the number of the sheep present in the array.
//Tip: true means present --> check this!
//Do not forget to check for the bad values like null or undefined.

function countSheep(sheep){
    let count=0;
    for(let i=0; i < sheep.length; i++){
        if(sheep[i] === true){
            count++;
        }
    }
    return count;
}
