// spread array
const num1 = [3, 4, 6, 8, 20]
num1.push(30)
const num2 = [...num1, 40, 39, 38]
num2.push(1000)
const myArray = [num1[0], num1[1], num1[2] ]
// console.log(myArray.push(num1));
// console.log(num2);

const myAddFunction = ( first, second, ...res) => {
    console.log(first);
    console.log(second);
    console.log(res);
    let sum = 0
    res.forEach((num) => {
        sum = sum + num
        console.log(sum);
    })
    console.log(sum);
}
// myAddFunction(4, 6, 7, 8, 7, 50, 4)
// console.log(myAddFunction(4, 6, 7,8, 7, 50, 4));

const student = {
    name: 'tufael',
    email: 'tufael@gmail.com',
    id: 3434,
    designation: 'web developer',
}
const teacher = {
    ...student,
    subject: 'ict',
    company: 'daffodil',
}
console.log(teacher);
