console.log("for:");

const numeros = [2, 33, 456, 356, 40];

console.log(
    `${(function (arr) {
        let multiplicados = [];

        for (let i = 0; i < arr.length; i++) {
            multiplicados.push(arr[i] * 2);
        }

        return multiplicados;
    })(numeros)}`
);

console.log("for in:");

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador",
};

function forInExemplo1(obj) {
    for (prop in obj) {
        console.log(prop);
    }
}

console.log(forInExemplo1(meuObjeto));

function forInExemplo2(obj) {
    for (prop in obj) {
        console.log(obj[prop]);
    }
}

console.log(forInExemplo2(meuObjeto));

console.log(meuObjeto["nome"]);
console.log(meuObjeto["idade"]);
console.log(meuObjeto["cidade"]);

console.log("for of:");

const palavra = "abcde";

function logLetras(palavra) {
    for (letra of palavra) {
        console.log(letra);
    }
}

function logLetras2(palavra) {
    for (letra in palavra) {
        console.log(letra);
        // console.log(palavra[letra]);
    }
}

logLetras(palavra);
logLetras2(palavra);

nums = [1, 2, 3, 4, 5];

function logNumeros(nums) {
    for (num of nums) {
        console.log(num);
    }
}

logLetras(nums);

console.log("while:");

function exemploWhile() {
    let num = 0;

    while (num <= 5) {
        console.log(num);
        num++;
    }
}

exemploWhile();

console.log("do while:");

function exemploDoWhile() {
    let num = 0;

    do {
        console.log(num);
        num++;
    } while (num < 5);
}

function exemploDoWhile2() {
    let num = 6;

    do {
        console.log(num);
        num++;
    } while (num < 5);
}

exemploDoWhile();
exemploDoWhile2();
