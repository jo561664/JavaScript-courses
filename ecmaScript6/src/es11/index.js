// dinamic inport
const button = document.getElementById('btn');
button.addEventListener('click', async function(){
    const module = await import('./file.js');
    module.hello();
});


// Big int
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991)
console.log(aBigNumber);
console.log(anotherBigNumber);


// PromiseOll
// De vuelve una promesa que se resuelve despues de que todas las proesas dadas las
// dadas se hayan cumplido o rechazada.
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));


Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));


// Global This
console.log(window);
console.log(globalThis);

// Operador de nulos
const foo = null ?? 'default';
console.log(foo);


// Optional shening
const user = {};
console.log(user?.profile?.email)
if(user?.profile?.email){
    console.log('Email')
}else{
    console.log('fail')
}