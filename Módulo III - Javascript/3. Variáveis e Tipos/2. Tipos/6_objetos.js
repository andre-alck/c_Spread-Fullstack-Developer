let person = {
    name: "andré",
    age: 19,
};

person.name += " carvalho";

console.log(person);

console.log(`${person.name} tem ${person.age} anos.`);
console.log(`${person["name"]} tem ${person["age"]} anos.`);

console.log(`${Object.keys(person)}`);
console.log(`${Object.values(person)}`);

person["key"] = "value";
// person.key = "value";

console.log(person);
