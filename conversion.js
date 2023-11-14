const name = 'md tufael khan';
const address = 'kasem bazar'
const age = 23;

if(age === 23 && address === 'kasem bazar'){
    console.log('you are eligable');
}
class Person{
    id;
    name;
    email;
    address;
    constructor(id, name, email, address){
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
    }
    sleep(hourse){
        console.log(`${this.name} sleep every day`);
    }
}
const person1 = new Person(33, 'jahid', 'jahid@gmail.com', 'moishadi')
// console.log(person1);
// person1.sleep(8)
class Student{
    Person
    university;
    attendClass;
    friends;
    constructor(university, attendClass, friends){
        this.university = university
        this.attendClass = attendClass
        this.friends = friends
    }
}
// const student1 = new Student(654, 'sujoy', 'sujoy@gmail.com', 'puran bazar', 'yes', '4 class attend', ['sonjoy', 'rakib', 'jahid', 'jewel'])

// console.log(student1);

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date()
        return date.getFullYear() - this.year
    }
}
const car1 = new Car('BMW', 2010)
car1.age()
console.log(car1);