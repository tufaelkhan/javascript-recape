// spread array
const num1 = [3, 4, 6, 8, 20]
num1.push(30)
const num2 = [...num1, 40, 39, 38]
num2.push(1000)
const myArray = [num1[0], num1[1], num1[2] ]
// console.log(myArray.push(num1));
// console.log(num2);

const myAddFunction = ( num1, num2) => {
    return num1 + num2
}
console.log(myAddFunction(num1, num2));