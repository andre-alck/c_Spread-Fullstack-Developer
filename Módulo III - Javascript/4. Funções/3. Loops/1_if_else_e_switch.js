function numeroPositivo(num) {
    let resultado;

    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

function numeroPositivo2(num) {
    let resultado;

    const ehNegativo = num < 0;

    if (ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

function numeroPositivo3(num) {
    const ehNegativo = num < 0;

    if (ehNegativo) {
        return false;
    }

    return true;
}

function numeroPositivo4(num) {
    return num > 0;
}

function numeroPositivo5(num) {
    const ehNegativo = num < 0;
    const maiorQue10 = num > 10;

    if (ehNegativo) {
        return "Esse número é negativo.";
    } else if (maiorQue10) {
        return "Esse número é positivo e maior que 10.";
    }

    return "Esse número é positivo";
}

console.log(numeroPositivo(2));
console.log(numeroPositivo(-9));

console.log(numeroPositivo2(2));
console.log(numeroPositivo2(-9));

console.log(numeroPositivo3(2));
console.log(numeroPositivo3(-9));

console.log(numeroPositivo4(2));
console.log(numeroPositivo4(-9));

console.log(numeroPositivo5(2));
console.log(numeroPositivo5(-9));

function getAnimal(id) {
    switch (id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        case 4:
            return "peixe";
    }
}

console.log(getAnimal(1));
console.log(getAnimal(4));
console.log(getAnimal("1"));
