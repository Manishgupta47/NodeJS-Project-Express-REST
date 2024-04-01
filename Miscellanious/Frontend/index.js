// let arr= [1,2,3,4];
// let arr2=[1,3,4,32,4];
//  arr.sayHello= ()=> {
//     console.log("hello i am arr")
//  };
//  arr2.sayHello= ()=> {
//     console.log("hello i am arr")
//  };

//  arr.__proto__.push = (n) => {console.log("pushing number :", n)};

// function PersonMaker(name, age) {
//     const person ={
//         name: name,
//         age: age,
//         talk(){
//             console.log(`hi, my name is ${this.name}`);
//         },
//     };
//     return person;

// }
// let p1 = PersonMaker("adam", 25);
// let p2= PersonMaker("eve", 25);
// function Person(name, age) {

//         this.name = name,
//         this.age = age;
//         console.log(this);

// }
// Person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name}`);
// };
// let p1 = new Person("adam", 25);
// let p2= new Person("eve", 25);

// class Person {
//     constructor (name, age){
//         this.name = name;
//         this.age= age;
//     }
//     talk(){
//         console.log(`hi, my name is ${this.name}`);
//     }
// }
// let p1 = new Person("adam", 25);
//  let p2= new Person("eve", 25);

class Person {
    constructor (name, age){
        console.log("person claas contructur");
        this.name = name;
        this.age= age;
    }
    talk(){
        console.log(`hi, my name is ${this.name}`);
    }
}
class Student extends Person {
    constructor (name, age, marks){
        console.log("student claas contructur");
        super(name, age);
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor (name, age, subject){
        console.log("teacher claas contructur");
        super(name, age);
        this.subject = subject;
    }
}

