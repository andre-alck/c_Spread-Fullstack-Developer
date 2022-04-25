const calcule = function (operacao, numero1, numero2) {
    return operacao(numero1, numero2);
};

const soma = function (n1, n2) {
    return n1 + n2;
};

const subtracao = function (numero1, numero2) {
    return numero1 - numero2;
};

console.log(`soma: ${calcule(soma, 1, 2)}`);
console.log(`subtracao: ${calcule(subtracao, 1, 2)}`);
