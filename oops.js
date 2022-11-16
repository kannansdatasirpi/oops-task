
//oops
//1

class Person{
    constructor(name,age,){
        this.name = name;
    this.age = age;
    }
    
    greet(){
        return(`hello`)
    }
    greet(){
        return(`hello ${this.name}`)
    }
}

let greeting = new Person('Sansa');
console.log(greeting.greet);
console.log(greeting.greet());

//2

class Shape{
    constructor(){
            this.type = 'circle'
        }
        print() {
            console.log(this.type)    
        }
    }
class Rectangle extends Shape {
    constructor() {
        super()
        this.type = 'rectangle'
    }
    print(){
        console.log('its static shape')
    }

}
class Triangle extends Shape {
    print(){
        super.print()
    }
}
const Rectangle1 = new Rectangle();
const Triangle1 = new Triangle();
Rectangle1.print();
Triangle1.print();

//3


const student = {
    firstName: 'Monica'
}

Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); 
student.changeName = 'Sarah';
console.log(student.firstName);


//4

class GrandParent{
    constructor(gparent,parent,child){
        this.gparent = 'GrandParent';
        this.parent = 'Parent';
        
    }
    print(){
        console.log(`${this.gparent}`);
       
    }
}

class Parent extends GrandParent{
    constructor(){
        super()
    }
    print(){
        console.log(`${this.parent}`);
    }
}

class Child extends GrandParent{
    print(){
        super.print()
    }
}

const child2 = new Child();
child2.print();
const parent2 = new Parent();
parent2.print();

//5

