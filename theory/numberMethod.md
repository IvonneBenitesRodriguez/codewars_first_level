### Number() method
For this method, I have to say that in case you want to convert strings to numbers, and you want a fast method you have to use:<br/>
Number();<br/>
In the exercise of codewars i had a variable named str which was referencing to any string the user will write, so in this case I just wrote: <br/>
return Number(str);<br/>
So any value inside the str variable will be converted to a number.<br/><br/>
According to MDN values of other types can be converted to numbers using the <strong>Number() function.</strong><br/>
In case the value cannot be converted to number, it returns NaN.<br/><br/>
Example:<br/>
Number("1234");// output: 1234<br/>
Number("-7");// output: -7

<br/>
Notes:<br/>
🐇If we want to get the Maximum numeric value we need to use:<br/>
Number.MAX_VALUE<br/>
Ex:<br/>
if(num1 * num2 <= Number.MAX_VALUE){<br/>
    func1();<br/>
} else {<br/>
    func2();<br/>
}<br/><br/>
🐇If we want to get the Minimum positive numeric value or the number closest to 0 we need to use:<br/>
Number.MIN_VALUE<br/>
Ex:<br/>
if(num1 / num2 >= Number.MIN_VALUE){<br/>
    func1();<br/>
} else {<br/>
    func2();<br/>
}<br/><br/>
