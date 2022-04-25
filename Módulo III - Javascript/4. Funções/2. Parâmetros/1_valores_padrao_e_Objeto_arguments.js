function exponencial(array, num) {
    if (num === undefined) {
        num = 1;
    }

    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    }

    return result;
}

const array = [1, 2, 3, 4];

console.log(`exponencial (num indefined): ${exponencial(array)}`);
console.log(`exponencial (num = 1): ${exponencial(array, 1)}`);

console.log(
    `autoinvocável (num = undefined): ${(function (array, num = 1) {
        const result = [];

        for (let i = 0; i < array.length; i++) {
            result.push(array[i] ** num);
        }

        return result;
    })(array)}`
);
console.log(
    `autoinvocável (num = 1): ${(function (array, num = 1) {
        const result = [];

        for (let i = 0; i < array.length; i++) {
            result.push(array[i] ** num);
        }

        return result;
    })(array, 1)}`
);

function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

function findMax2(array) {
    let max = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

const arr = [1, 2, 3, 4, 5];
console.log(`${findMax(1, 2, 3, 4, 5)}`); // 5 argumentos
console.log(`${findMax2(arr)}`); // 1 argumento
