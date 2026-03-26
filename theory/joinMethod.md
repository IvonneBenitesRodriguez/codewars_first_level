## Join Method
This method creates and returns a new string by concatenating all the elements in this array, it can be presented with separated commas or a specific separator string.<br/><br/>
Example:<br/><br/>
const colors = ["white", "yellow", "blue", "green"];<br/>
console.log(colors.join());<br/>// output: "white,yellow,blue,green"<br/><br/>
🐇<strong>Very important:</strong><br/>
There are different ways to join an array:<br/><br/>
const a = ["Apple", "Watermelon", "Berries"];<br/><br/>
<strong>a.join();</strong> // 'Apple,Watermelon,Berries' <br/><br/>
<strong>a.join(", ");</strong> // 'Apple, Watermelon, Berries'<br/><br/>
<strong>a.join(" + ");</strong>// 'Apple + Watermelon + Berries'<br/><br/>
<strong>a.join("");</strong>//'AppleWatermelonBerries'<br/><br/>
