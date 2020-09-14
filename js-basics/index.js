// describe WHY's and HOW's the code work!!
console.log('Hello World...');

// variables
let name = 'Americo Tomas';
console.log(name);

// constants
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// primitive types
let myName = 'Americo'; // String literal
let age = 41; // Number literal
let isAproved = false; // Boolean literal
let firstName = undefined;
let lastName = null;

// reference types
// object
let person = {
        name: myName,
        age
};

// dot notation
person.name = 'Tomas';

// bracket notation
person['name'] = 'Agrela';

let selection = 'name';
person[selection] = 'Hugo';

console.log(person);

// arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 2;
console.log(selectedColors);
console.log(selectedColors.length);

// functions
// performing a task
function greet(name, lastName) {
        console.log('Hello ' + name + ' ' + lastName + '!!');
}

// calculating a value
function square(number) {
        return number * number
}

// call the function
greet('AmericoTomas');
greet('Hugo', 'Tomas');

console.log(square(2));

