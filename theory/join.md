## .join( ) method
For the exercise toString.js I have used the join( ) method since it is the method to convert an array to a string.
At first I was confused, and I used toString( ) but reading MDN I discovered that .join( ) concatenates all the elements of an array, separated by commas or a specified separator string, and even if the array has only 1 item, that item will be returned without using a separator.<br/>
Moreover, .toString() method when convert array to strings always joins elements with a comma, and we cannot change this behavior which is inherent of the method.<br/>
By opposite, .join() method gives us total control, we can decide what goes between the items.<br/>
Furthermore, since the codewars exercise requested no space added at the beginning or end of a sentence, it was pretty convenient to use .join( ) method which automatically ignores the start and end space of the statement.<br/>

🌼 Note:<br/>
Converting this Array to a String:<br/>
const names = ["Cesar", "Mario", "Sammy", "Mary"];<br/>

Let 's use .join( ) method and see some usages and differences:<br/>

🐇 names.join(); // "Cesar,Mario,Sammy,Mary"<br/>
🐇 names.join(", ");// "Cesar , Mario , Sammy ,  Mary"<br/>
🐇 names.join(" + ");// "Cesar + Mario + Sammy + Mary"<br/>
🐇 names.join("");//"CesarMarioSammyMary"<br/>
