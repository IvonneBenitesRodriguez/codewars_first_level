//Codewars:
//FakeBin
function FakeBin(x){
   let resultingString = "";
   for(let i=0; i < x.length; i++){
    if(x[i] <  5){
        resultingString += "0";
    } else if(x[i] >= 5){
        resultingString += "1";
    }
   }
   return resultingString;
}
console.log(FakeBin("1234567890"));