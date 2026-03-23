// Codewars Basic Mathematical Operations:
function basicOp(operation, value1, value2){
    if ( operation === '+'){
        return value1 + value2;
    } else if ( operation === '-'){
        return value1 - value2;
    } else if (operation === '*'){
        return value1 * value2;
    } else if (operation === '/'){
        return value1 /value2;
    }
}
console.log(basicOp('-', 20,10));