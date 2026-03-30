// Exercise: using .flat() method:
// Objetivo: obtener TODOS los hobbies en una sola lista
// ["leer", "correr", "cocinar", "nadar", "leer", "pintar"]

// Pista: necesitas DOS métodos encadenados
// uno para extraer los hobbies, otro para aplanar

const usuarios = [
  { nombre: "Ana", hobbies: ["leer", "correr"] },
  { nombre: "Luis", hobbies: ["cocinar", "nadar", "leer"] },
  { nombre: "María", hobbies: ["pintar"] }
]

// Mal approach => hardcoded solution but not scalable:
// const datos = usuarios[0].hobbies + "," +  usuarios[1].hobbies + "," + usuarios[2].hobbies;
// console.log(datos);


//Good Approach: Scalable Solution: using first map and then flat methods.

const datosNecesitados = usuarios.map(user => user.hobbies).flat();
console.log(datosNecesitados);

//Good Approach: Scalable Solution: using only flatMap() method:

const datosNecesitados2 = usuarios.flatMap((user => user.hobbies));
console.log(datosNecesitados2);

//new Exercise: using map method:
const doctors = [
    {name: "Ofelia",
     lastName: "Smith",
     speciality: ["Chirurgian","Oncologyst"]
     },
     {
        name:"Isabel",
        lastName: "Molina",
        speciality: ["Pediatrician","Oncologyst"]
     },
     {
        name:"Tad",
        lastName: "Freetz",
        speciality: ["General Medicine", 
        "Oncologyst"]
     }
]
// Suppose we want to get only the speciality of the doctors:

// const doctorsBySpeciality = doctors.map(doctor => doctor.speciality);
// console.log(doctorsBySpeciality);

//Now I want to get a full complete list without nested arrays:
//Of course this is a more professional way to return the specialities of the doctors
// without any nested array inside of our array.

// const doctorsBySpeciality = doctors.map(doctor => doctor.speciality).flat();
// console.log(doctorsBySpeciality);

//or we can write the same solution using the method
// .flatMap():
const doctorsBySpeciality = doctors.flatMap(doctor => doctor.speciality);
console.log(doctorsBySpeciality);
