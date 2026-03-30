### Map method
This method is not only for being used to transform the elements of an array using mathematical operations such as addition, substraction, division, and getting the maximum value of the array. I was so confused till I review an exercise which gave me a clear idea about the usage of this method:<br/><br/>
🐇 Notes to reflect: <br/><br/>
.map( ) <strong> extracts something from the array. It changes the structure of the array and of course you can use it for mathematical operations too.</strong>
<br/><br/>
Example:<br/><br/>
const doctors = [<br/>
    {name: "Ofelia",<br/>
     lastName: "Smith",<br/>
     speciality: ["Chirurgian","Oncologyst"]<br/>
     },<br/>
     {<br/>
        name:"Isabel",<br/>
        lastName: "Molina",<br/>
        speciality: ["Pediatrician","Oncologyst"]<br/>
     },<br/>
     {<br/>
        name:"Tad",<br/>
        lastName: "Freetz",<br/>
        speciality: ["General Medicine", <br/>
        "Oncologyst"]<br/>
     }<br/>
]<br/>
Suppose we want to get all the specialities of the doctors:<br/>
We need to use <strong>.map() method </strong> to extract these specialities:<br/>
const doctorsBySpeciality = doctors.map(doctor => doctor.speciality);<br/>
The output will be:<br/>
[<br/>
  [ 'Chirurgian', 'Oncologyst' ],<br/>
  [ 'Pediatrician', 'Oncologyst' ],<br/>
  [ 'General Medicine', 'Oncologyst' ]<br/>
]<br/>
Of course this is the result requested but we can write it in a very profesional way using <strong>.flat() method</strong>:<br/>
const doctorsBySpeciality = doctors.map(doctor => doctor.speciality).flat();<br/>
console.log(doctorsBySpeciality);<br/>
Output:<br/>
[<br/>
  'Chirurgian',<br/>
  'Oncologyst',<br/>
  'Pediatrician',<br/>
  'Oncologyst',<br/>
  'General Medicine',<br/>
  'Oncologyst'<br/>
]<br/><br/>
But there is a better way to write the solution using the method named <strong>.flatMap()</strong>:<br/><br/>
const doctorsBySpeciality = doctors.flatMap(doctor => doctor.speciality);<br/>
This method .flatMap() achieve the same results.<br/><br/>
🐇 Notes to reflect:<br/>
Usually this method <strong>.flat()</strong> flats the results of nested arrays. In case you have nested arrays of level deep 1 or an empty space inside the array, it returns the array without the nested arrays and without the empty spaces.<br/>


