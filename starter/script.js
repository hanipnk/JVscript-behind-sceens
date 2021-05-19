'use strict';

/*

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = ` ${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating New variable with same name as outer scope's variable
      const firstName = 'Steven'; // line 6 will be printed out 'Jonas' and this will be 'steven' because of "jvscript look up"

      // REassigning outer scope's variable
      const output = 'New Output!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
    // console.log(add(2, 3)); it does not work because it is defined inside of the block and being called outside of the block.

    // console.log(str);
    // it's outside of the block scope so it will not be working.
    // 'const' and 'let' are only working in the block scope in which they were created.
    // 'var' is a function scope, and it works outside of block scopes if it is only excist inside of the function.
    // 'var' should never be used !
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

//console.log(age);
//printAge();

//'age' and 'printAge()' Function will not be working
//because scope chain does not look for the child but parents. (only look up not look down)


*/

/*

//Variables

console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions

console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  // function declaration will be only working before declaration.
  return a + b;
}

const addExpr = function (a, b) {
  // cannot access 'addExpr' before initialization
  // error :
  return a + b;
};

var addArrow = (a, b) => a + b; // error : undefined

//Example

console.log(undefined);
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All product deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //true
// variable which declared with 'var' creats a property on the global window object.
console.log(y === window.y); //false
console.log(z === window.z); //false

*/

/*

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // it will point out window because function arrow does not get 'this' itself
  //but its parent function or its parents scope which is winodw here.
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = { year: 2017 };

matilda.calcAge = jonas.calcAge; // copying the same function in 'jonas'

matilda.calcAge(); // 'this'key in the calcAge function will point out matilda's year because matilda is calling it now.

const f = jonas.calcAge;
f(); // it gets 'undefined error' because there's nothing to point out for 'this'key in 'f' function.

*/

/* # 98

// var firstName = 'Matilda'; // declaring with 'var' creats a property on the global object which is window here

const jonas = {
  firstName: 'Joans',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    //Solution 1

    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //};

    //Solution 2

    const isMillenial = () =>
      // since arrow function does not have 'this'key itself so it uses from its parent scope which is 'jonas'
      {
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
        //console.log(this.year >= 1981 && this.year <= 1996);
      };
    isMillenial();
  },
  greet: () => {
    console.log(this); // 'this'key in here = 'window' inside of 'arrow function'
    console.log(`Hey ${this.firstName}`); // = window.firstname
  },
};

jonas.greet(); // result of 'Hey undefined'. function arrow does not get its own 'this'key !!!
// after declar the variable with 'var' it's now result of 'Hey Matilda' because now 'this'key can find it in global scope.
// 'var' should never be used.
jonas.calcAge();

// Arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);

*/

/* #99

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27; // at this point, i'm reassigning the value of 'age' for both objects.
console.log('friend:', friend);
console.log('Me:', me);

// both 'me' and 'friend' are changed to 'age:27' it's because these are two objects which pointing at the same value stored in HEAP

*/

// Primitive types

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types

const jessica = {
  firstName: 'Jessica',
  lastName: 'Willialms',
  age: 27,
};

const marriedJessica = jessica; // it does not creat new object in the HEAP but pointing out the same object as 'jessica'
// even though the variable is 'const' since I'm changing the thing that is stored in the HEAP so I can change it.
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//marriedJessica = {}; // it does not work because I'm changing the entire variable it has set in 'const'
// it means I cannot change the value in the stack. if it is 'let' it works.

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Willialms',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // 'Object.assign' merges two different objects
//which are 'jessica2' and '{}' then creats new object called 'jessicaCopy'
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

// However, 'Object.assign' only copy the first level of the original object not 'deep-clone copy'
//which measn an array which created inside of object such as 'family' in this case would be merged all together
// so result of family: (4) ["Alice", "Bob", "Mary", "John"] for both 'jessica2' and 'jessicaCopy'
