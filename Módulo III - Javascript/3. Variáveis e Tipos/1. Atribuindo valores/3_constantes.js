const FIRST_NAME = "André ";
/*
FIRST_NAME = "Carvalho"; // TypeError: Assignment to constant variable.
const FIRST_NAME = "Carvalho"; // SyntaxError: Identifier 'FIRST_NAME' has already been declared
*/

var firstName = FIRST_NAME,
    lastName = "Carvalho";

/*
fullName = firstName + lastName;
const fullName; // SyntaxError: Missing initializer in const declaration
*/
const fullName = firstName + lastName;
console.log(fullName);

/*
function foo() {
    const BAR = 0;
}
foo();
console.log(BAR); // ReferenceError: BAR is not defined
*/

/*
function bar() {
    var FOO = 0;
}
bar();
console.log(FOO); // ReferenceError: BAR is not defined
*/
