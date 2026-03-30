//Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

//Your task is to write a function that takes a string and return a new string with all vowels removed.

//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

//Solution:

const text = "This website is for losers LOL!";
function disemvowel(str) {
let vowelsRemoved = [];
let arrStr = str.split("");
for(let i=0; i < arrStr.length; i++){
    if(arrStr[i] === "a" || arrStr[i] === "e" || arrStr[i] === "i" || arrStr[i] === "o" || arrStr[i] === "u"){
        arrStr[i].splice();
      
    }else{
        vowelsRemoved.push()
    }
}
  return vowelsRemoved;
}
console.log(disemvowel(text));