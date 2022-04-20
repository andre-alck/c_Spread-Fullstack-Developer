function myFunction(n1, n2) {
    var str = "";

    n1 == n2
        ? (str = "Os números " + n1 + " e " + n2 + " são iguais. ")
        : (str = "Os números " + n1 + " e " + n2 + " não são iguais. ");

    soma = n1 + n2;
    str += "Sua soma é " + soma + ", ";

    if (soma < 10) {
        str += "que é menor que 10 e menor que 20.";
    } else if (soma >= 10 && soma < 20) {
        str += "que é igual ou maior que 10 e menor que 20.";
    } else {
        str += "que é maior ou igual a 20.";
    }

    return str;
}

console.log(myFunction(1, 2));
