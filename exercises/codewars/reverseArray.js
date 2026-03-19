//reversing the order of a collection of words
const bestBooks = ["La invite de la derniere heure", "Fett-napf", "Die Franzosiche Kueche", "System Design Interview"];
const reversedValues = bestBooks.reverse();
console.log(reversedValues);

// But of course if i want to reverse the book's title characters :
function reversingTitleBooks(bestBooks){
    const finalResult = [];
    for ( const book of bestBooks){
        const changingOrderBooks = book.split("").reverse().join("");
        finalResult.push(changingOrderBooks)
    }
    return finalResult;
}

const myBooks = ["System Review", "Franzosische Kueche", "Fett-Napf","La invite de la derniere heure"];
console.log(reversingTitleBooks(myBooks));