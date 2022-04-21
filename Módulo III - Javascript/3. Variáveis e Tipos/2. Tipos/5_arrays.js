let array = [];

// popula array
array[0] = "a";
array.push("olá");
array[1] = `b`;
array.push(1);
// a, b, 1

// remove elementos do array
array.pop(); // último
array.shift(); // primeiro
// b

console.log("primeiro for:");
for (let index = 0; index < array.length; index++) {
    console.log(`${index}: ${array[index]}`);
}

array.unshift("z");

console.log("segundo for:");
for (let index = 0; index < array.length; index++) {
    console.log(`${index}: ${array[index]}`);
}

if (array.includes("z")) {
    console.log("array inclui 'z'.");
} else {
    console.log("array não inclui 'z'.");
}

for (let index = 0; index < array.length; index++) {
    console.log(`${index}: ${typeof array[index]}`);
}

array.every((item) => typeof item === "string")
    ? console.log(`todos itens são strings.`)
    : console.log(`nem todos itens são strings.`);

console.log(array.some((item) => item === "a"));
console.log(array.some((item) => item === "z"));

for (let index = 0; index < array.length; index++) {
    console.log(`${index}: ${array[index]}`);
}

array.reverse();

for (let index = 0; index < array.length; index++) {
    console.log(`${index}: ${array[index]}`);
}
