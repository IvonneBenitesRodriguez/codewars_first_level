### Notes:
🐇 Eveytime you have to solve an exercise of codewars, please review the <strong>exercise' s requested output </strong>which is going to guide to solve the exercise.<br/>
I was confused in the doubleInteger.js exercise, the exercise requested to return the double integer, and i was writing : <br/>
return i * i; <br/>
🐇 but the requested output was 16, and 14 therefore we need to write this statement:<br/>
return i * 2; <br/>
About the use of <strong>count++</strong> and sum+= input[i]:<br/>
In an exercise solved of Codewars I could notice important facts like:<br/>
For example once the exercise requests you to count the total items of an array we need to:<br/>
1.Create the variable to store the values and initialize it with 0 since the exercise is saying store all the positive values.<br/>
let countPositives = 0;<br/>
2.Then we will count the number of positive numbers using:<br/>
countPositives++;<br/>
The<strong>countPositives++</strong> we use it once the exercise requests us to count how many words are in a string?, the total number of, to count items.<br/>
Now, we will explain about sumNegatives += input[i] which refers to the addition of values, the sum.<br/>
Example:
let sumNegatives = 0;<br/>
sumNegatives += input[i]; <br/>