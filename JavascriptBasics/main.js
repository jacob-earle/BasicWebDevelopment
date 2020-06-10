//variables with let and const
//data types: strings, numbers, boolean, null, undefined
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;

//printing to console
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);

//String Concatenation
//Old method
console.log("My name is " + name + "and I am " + age);
//New Method
console.log(`My name is ${name} and I am ${age}`);

//String functions
const s = 'Hello world!';
console.log(s.length);
console.log(s.toUpperCase);
console.log(s.toLowerCase);
console.log(s.substring(0,5));
console.log(s.split(" "));

//Arrays 
const my_array = ['apples', 'orangs', 'pears', 1, true];
console.log(my_array);

//Accessing arrays
console.log(my_array[0]);

//We can also add outside of the original bound of a constant array, just not reassign
my_array[5] = 7;

my_array.push('mango');
my_array.unshift(5);
console.log(my_array);
console.log(my_array.pop());

//Check array index
console.log(my_array.indexOf('apples'));

//Objects in Javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main street',
        city: 'Boston',
        state: 'MA'
    }
}

//Accessing values
console.log(person.firstName, person.lastName, person.address);

//pulling out values
const {firstName} = person;
console.log(firstName);

//JSON is a format used to communicate through APIs
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For loops
for(let i=0; i < 10; i++){
    console.log('For loop reached: {$i}');
}

let i = 0;
while(i < 10){
    console.log('While loop reached: {$i}');
    i++;
}

//Alternative for loop
todos.forEach(function(todo){
    console.log(todo);
})

//mapping from one array to another
const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

//filtering a list
const todoComplete = todos.filter(function(todo){
    return todo.isCompleted == true;
})

console.log(todoComplete);

//equivalency operators
const ten = 10;

//doesn't require strict data type agreement
if(ten == '10'){
    console.log('This is 10');
}
else{
    console.log('This is not 10');
}

//does require strict data type agreement
if(ten === '10'){
    console.log('This is 10');
}
else{
    console.log('This is not 10');
}

//Logical Operators
// ||: or
// &&: and

//Ternary Operator
const color = x > 10 ? 'red' : 'blue';

//switch statements
switch(color){
    case 'red' :
        console.log('The color is red.');
        break;
    case 'blue' :
        console.log('The color is blue!');
        break;
    default:
        console.log('The color is not red or blue.');
}

//functions
//normal
function add1(num1, num2){
    return num1 + num2;
}

//arrow notation
const add2 = (num1, num2) => {
    return num1 + num2;
}

console.log('1 + 1 = ' + add1(1, 1));
console.log('2 + 2 = ' + add2(2, 2));

//Object oriented programming
//Older way
//Constructor Function
function Person(first, last, dob) {
    this.first = first;
    this.last = last;
    this.dob = new Date(dob);
    //One way to define a function for the class
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
}

//Writing a function using prototype
Person.prototype.getLastName = function() {
    return this.lastName;
}

//Instantiating an object
const person1 = new Person('John', 'Doe', '1-2-2020');
console.log(person1.getBirthYear());


//Javascipt classes
//Works the exact same way as the method used above
/*
class Person {
    constructor(first, last, dob) {
        this.first = first;
        this.last = last;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getLastName() {
        return this.lastName;
    }
}

*/


