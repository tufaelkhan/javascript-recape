// spread array
const num1 = [3, 4, 6, 8, 20]
num1.push(30)
const num2 = [...num1, 40, 39, 38]
num2.push(1000)
const myArray = [num1[0], num1[1], num1[2] ]
// console.log(myArray.push(num1));
// console.log(num2);

const myAddFunction = ( ...res) => {
    console.log(res);
    res.forEach((num) => {
        num = num + 2
        console.log(num);
    })
}
myAddFunction(4, 6, 7,8, 7, 50, 4)
// console.log(myAddFunction(4, 6, 7,8, 7, 50, 4));