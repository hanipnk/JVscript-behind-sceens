'use strict';

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
