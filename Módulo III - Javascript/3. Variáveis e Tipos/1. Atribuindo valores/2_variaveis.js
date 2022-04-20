console.log("var vs let:");
var a = 1;
var b = 2;
if (true) {
    var a = 11;
    let b = 22;
}
console.log(a);
console.log(b);

console.log("hoisting:");
c = a + b;
console.log(c);
var c;
//let c; // ReferenceError: Cannot access 'c' before initialization

console.log("const:");
var firstName = "João";
let lastName = "Souza";

if (firstName === "João") {
    let lastName = "Silva";
    var firstName = "Pedro";
    lastName = "Carvalho";
}

console.log(firstName, lastName);
