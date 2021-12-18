// Flat
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

// FlatMap
let array = [1,2,3,4,5];

console.log(array.flatMap(value=>[value, value * 2]));

// TrimStart
let hello = '    Hello world';
console.log(hello);
console.log(hello.trimStart());

// TrimEnd
let hello = 'Hello world   ';
console.log(hello);
console.log(hello.trimEnd());


// Optional catch
try{

}catch{
    error
}

// Copnvertir arreglo clave valor a un objeto
let entries = [['name', 'Javier'], ['age', 32]];
console.log(entries);
console.log(Object.fromEntries(entries));


let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);

