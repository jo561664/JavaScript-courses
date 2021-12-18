// Operador de reposo
// Puede extraer las propiedades de un objeto que aun no se ha construido
const obj = {
    name: 'Javier',
    age: 32,
    country: 'Col'
};

let {name, ...all} = obj;
console.log(name, all);

// Unidades de propagaciòn
const obj = {
    name: 'Javier',
    age: 32
}

const obj1 = {
    ...obj,
    country: 'Col'
}

console.log(obj1);

// Promise

const helloWorld = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=>{ resolve('Hello World') }, 3000)
        : reject(new Error('Test error'))
    });
};

helloWorld()
.then(response=>console.log(response))
.catch(error=>console.log(error))
.finally(()=>console.log('Finalizó'))


//

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const yeard = match[1];
const month = match[2];
const day = match[3];

console.log(yeard)
console.log(month)
console.log(day)