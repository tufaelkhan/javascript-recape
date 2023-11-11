// promise
class Student{
    id;
    name;
    email;
    phone;
    constructor(id, name, email, phone){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    sleep(hours){
        console.log(`${this.name} sleep ${hours} hours in a day`);
    }
}
const student1 = new Student(3, 'tufael khan', 'tufael@gmail.com', '3490388549')
student1.sleep(8)
console.log(student1);