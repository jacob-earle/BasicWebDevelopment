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

//Resume at 30 Minutes