// for of and for in
const fruits = [ 'apple', 'banana', 'mango', 'coconut']
// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(element of fruits){
//     console.log(element);
// }

// for in
const person = {
    name: 'tufael',
    age: 23,
    address: 'G. T. Road',
    email: 'tufael@gmail.com',
    contact: '8ir9e3'
}

for(let key in person){
    console.log(person[key]);
}
