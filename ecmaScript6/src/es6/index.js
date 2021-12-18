// Asignación de parámetros por defecto.
function newFunction(name, age, country){
    var name = name || 'javier';
    var age = age || 32;
    var country = country ||'Col';
    console.log(name, age, country);
}

// es6
const newFunction2 = (name = 'Javier', age = 21, country='Col')=>{
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '22', 'MX');


// Concatenación de variables.
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello +' '+ world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


// Multi linea
let lorem = "Quiero escribir una frase epica que queremos separar \n"
+ "Otra frase epica que necesitamos.";
console.log(lorem)

// es6
let lorem2 = `Quiero escribir una frase epica que queremos separar
Otra frase epica que necesitamos`;
console.log(lorem2);


// Destructuración de elementos
let person = {
    'name': 'Javier',
    'age': 21,
    'country': 'Col'
};
console.log(person.name, person.age);

// es6
let {name, age, country} = person;
console.log(name, age, country);


// Operador de propagación
let team1 = ['Javier', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['Pepito', ...team1, ...team2];
console.log(education);


// Operador let
{
    var globalVar = "Global var";
}

{
    let globalLet = "Global let";
    console.log(globalLet);
}

console.log(globalVar);


// Const
const a = 'b';
// a = 'c';
console.log(a);


// Propiedad de objetos
let name = 'Javier',
age = 21;

let obj = {
    name,
    age,
    country: 'Col'
}
console.log(obj);


// Arrow function
const names = [
    {name: 'javier', age: 21},
    {name: 'Pepito', age: 22}
];

let listOfNames = names.map(function(element){
    console.log(element.name)
});

// es6
let listOfNames2 = names.map((element)=>{
    console.log(element.name)
});


// Promesas
const helloPromise = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Hey!');
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response=> console.log(response))
    .catch(err=> console.log(error))


// Clases
class Calculator {

    // Constructor.
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    // Método
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA +this.valueB;
    }

}

const calc = new Calculator();
console.log(calc.sum(2, 2));


// Impórt Export -Módulos
// import {hello} from './module.js';
const hello = require('./module');
console.log(hello());


// Generators
// Es una función especial que retorna un conjunto de valores segun el algoritmo definido
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);