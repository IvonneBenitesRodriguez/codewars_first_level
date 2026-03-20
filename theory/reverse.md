## Reverse method in the case of Reversing a String
#### For the case of reversing a string we have to think in this way:<br/>
🐇 We need to cut the characters and for it we need to use: split("") method.<br/><br/>
🐇 Then we apply the reverse() method.<br/><br/>
🐇 Finally we need to join the reversed characters using the join("") method.<br/><br/>
🐇 Note : always <strong>return</strong> the reversed word, therefore you need to use the keyword <strong>return</strong>.<br/>
🌼 But of course this solution only works if we have a single word that we are interested to reverse.<br/>


Methods used:<br/>
🌼 <strong>split( )</strong> : this method is a method of String values that takes a pattern and divides this string into an ordered list of substrings by searching for the pattern,<strong> puts the substrings into an array, and returns the array.</strong><br/>

🌼<strong>join( )</strong>: this is a method of Array instances that creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.<br/><br/>

<strong>reverse( )</strong>:
This method is only used with arrays, if it is used with strings it will immediately throw an error. So it makes sense once I used the split method to separate the character's string and convert it into an array. Now we can use freely the method reverse.<br/><br/>According to MDN: In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

To reverse the elements in an array without mutating the original array, use toReversed().




🐇 In our case of the exercise reverse.js we have converted a string into an array once we used the method split( ) which enabled us to use the join method, without it we cannot use the join method in a string.<br/>

A special note:<br/>
I want to mention that this exercise reverse.js is only if you want to reverse 1 single word but in case you have a list of words that you want to reverse, that means that you are dealing with a collection of words which is an array.<br/>
So for that circumstances you need to craft the solution using:<br/>
🐇 a loop among the loops the best one with a clear code and avoiding bugs is for...of.<br/>
🐇 we need to create a variable to store our final result, which can be an empty variable.<br/>
🐇 we need to create a variable to store the method split, reverse and join of course all these methods applied to the array collection we want to reverse.<br/>
🐇 we need to use the push( ) method to collect these reversed values.<br/>
🐇 and <strong>very important<strong>: we need to return the finalResult.<br/>
