//Q.1:===============================================

//Object creation: 

const person={
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
}
//Destructuring the variables into variables

var {
    firstName,lastName,age,eyeColor
    }= person;
console.log(firstName,lastName,age,eyeColor);



// Nested Object.
myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  // Deconstructing a Nested Object.
  var {name,age,
        cars:   {
            car1, car2, car3
                }
       } = myObj;
  console.log(name,age,car1,car2,car3);


//Q.2:===============================================

//Object creation: 

const newPerson={
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
}
// Cloaning the array:
let newVar=newPerson;

//Adding new property in object:
newPerson.language="English";
newVar.nationality="Indian";

//Properties of Object

console.log(Object.keys(newPerson));
console.log(Object.values(newPerson));
console.log(Object.entries(newPerson));


console.log("value of newPerson");
console.log(newPerson);
console.log("value of newVar");
console.log(newVar);

//Complete Sentence

console.log(newPerson.firstName+" "+newPerson.lastName+" "+"age"+" "+newPerson.age+" "+"having"+" "+newPerson.eyeColor+" "+"knows the language"+" "+newPerson.language+" "+ "is of "+" "+newVar.nationality+" "+"origin.");
