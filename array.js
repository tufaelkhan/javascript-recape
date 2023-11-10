// array methods
// map() return array, does not modify original array
const fruits = [ 'apple', 'banana', 'mango', 'coconut']
const number = [ 354, 656, 76, 67, 435, 76, 67 ]
const res = number.map(num => num*2)
// console.log(res);
// console.log(number);

// forEach() does not return an array. 
// number.forEach(num => console.log(num))

// find() 
// console.log(number.find(num => num<70));

// filter() return a new array do not modify
const response = number.filter(num => num > 100)
// console.log(response);
// console.log(number);


