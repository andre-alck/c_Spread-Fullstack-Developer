function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

// console.log(sum(1, 2, 3));
console.log(sum(...numbers));

confereTamanho = function (...args) {
    console.log(args.length);
};

confereTamanho();
confereTamanho(1, 2);
confereTamanho(1, 2, 3);

// object destructuring
const user = {
    id: 19,
    displayName: "andre-alck",
    fullName: {
        firstName: "André",
        lastName: "Carvalho",
    },
};

function userId({ id }) {
    return id;
}

function getFullName({ fullName: { firstName: foo, lastName: bar } }) {
    return `${foo} ${bar}`;
}

console.log(userId(user));
console.log(getFullName(user));
