// Object.entries()
// Permite devolver las claves y valores de una matriz
const data = {
    frontent: 'Javier',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
// Cuantos elementos contiene arreglo
console.log(entries.length)


// Object keys
// Devuelve la claves de un objeto en un arreglo
const data = {
    frontent: 'Javier',
    backend: 'Isabel',
    design: 'Ana',
}

const keys = Object.keys(data);
console.log(keys);
console.log(keys.length);

// Object.values
// Devuelve los valores un objeto en un arreglo
const data = {
    frontent: 'Javier',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);


// padStart, padEnd
// Permite anteponer o agregar una cadena o elementos
const string = 'hello';
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(8, 'hi '));


// Async await
const helloWorld = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(()=>resolve('Hello world'), 3000)
        :reject(new Error('Tets error'))
    })
};

const helloAsync = async()=>{
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();

const anotherFunction = async()=>{
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();