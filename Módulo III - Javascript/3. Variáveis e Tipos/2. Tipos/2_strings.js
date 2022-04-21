/*
const DIO = "Digital Innovation One";

let firstName = "André";
let lastName = "Carvalho";

let fullName = `Nome completo: ${firstName} ${lastName}`;
*/

let nome = "André",
    sobrenome = "Carvalho";
console.log(nome);
console.log(`nome: ${nome}`);
console.log(`nome - tamanho: ${nome.length}`);
console.log(`nome - typeof: ${typeof nome}`);

console.log("\n");

let concatenado = nome.concat(sobrenome);
console.log(concatenado);
console.log(`concatenado: ${concatenado}`);
console.log(`concatenado - tamanho: ${concatenado.length}`);
console.log(`concatenado - typeof: ${typeof concatenado}`);

console.log("outras maneiras de concatenação:");

concatenado = `${nome} ${sobrenome}`;
console.log(`concatenado: ${concatenado}`);

concatenado = `${nome}

muitas quebras

${sobrenome}`;
console.log(`concatenado: ${concatenado}`);

console.log("\n");

let texto = new String("texto qualquer");
console.log(texto);
console.log(`texto: ${texto}`);
console.log(`texto - tamanho: ${texto.length}`);
console.log(`texto - typeof: ${typeof texto}`);

console.log(`funções úteis:`);
console.log(`split: ${concatenado.split("\n")}`);
console.log(`startsWith - A: ${concatenado.startsWith("A")}`);
console.log(`startsWith - Z: ${concatenado.startsWith("Z")}`);
console.log(`endsWith - O: ${concatenado.endsWith("O")}`);
console.log(`endsWith - Z: ${concatenado.endsWith("Z")}`);
console.log(`replace " " "@": ${concatenado.replace(" ", "@")}`);
