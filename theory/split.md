## split( ) method:<br/>
 The .split( ) method has a very unique ability which is to <strong> convert strings to Arrays.</strong> <br/><br/>
 This feature is powerful because when we face directly with strings like in our exercise returnFirstInitialOfTwoWords.js where we have 2 words, we need to access the first character for the first word and the first character for the second word, how we do it? 🤔.<br/><br/>
 
  I though several ways to solve this exercise, but suddenly I remembered that we can access characters of words using [indexPosition] but we need to have an array for using the [], and how we achieve it? 🤔<br/><br/>
   💡 We need to use .split( ) method which converts a string into an Array.<br/><br/>
So even if we have this string:<br/>
const namesConverted = "emily blunt" =><br/> name.split(" ");// returns an output of ["emily", "blunt"]; <br/>
<br/>

😁 And now we access the first word and the second word simply using [indexPosition].<br/>
Ex:<br/>
namesConverted[0]; // "emily" <br/>
namesConverted[1]; // "blunt"<br/>