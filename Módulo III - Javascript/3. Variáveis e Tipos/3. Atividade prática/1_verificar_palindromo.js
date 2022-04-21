const str = "aba";
let arr = [];

for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
}

console.log(arr.toString() === arr.reverse().toString());

// v2.

let score = 0;

for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    if (str[i] == str[j]) {
        score++;
    }
}

console.log(score === str.length);

// v3.

function verificarPalindromo(string) {
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo(str));

// v4.

function verificarPalindromo2(string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificarPalindromo2(str));
