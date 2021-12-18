// Replace all
const string = 'Javascript es maravilloso, con Javascript puedo crear el futuro de la web';
const replacedString = string.replace('Javascript', 'Python');
console.log(replacedString);

const replacedString2 = string.replace(/Javascript/g, 'Python');
console.log(replacedString2);


// Mètodos privados - agregamos almodadilla.
class Message {

    #show(val){
        console.log(val);
    }

    get #add(){

    }

}

const message = new Message();
message.show('Hola');


// Promise any
const promise1 = new Promise((resolve,reject) => reject("1"));
const promise2 = new Promise((resolve,reject) => resolve("2"));
const promise3 = new Promise((resolve,reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));


Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));
