function soma(n1, n2) {
    return n1 + n2;
}

const soma2 = function (n1, n2) {
    return n1 + n2;
};

console.log(`padrão - soma: ${soma(1, 2)}`);
console.log(`anônima - soma2: ${soma2(1, 2)}`);
console.log(
    `autoinvocável (IIFE): ${(function (n1, n2) {
        return n1 + n2;
    })(1, 2)}`
);
