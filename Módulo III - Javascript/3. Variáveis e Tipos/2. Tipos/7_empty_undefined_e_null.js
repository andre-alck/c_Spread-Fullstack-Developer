let fruta;
console.log(`typeof fruta: ${typeof fruta}`);
// undefined

fruta = null;
console.log(`typeof fruta: ${typeof fruta}`);
// null

fruta = "";
console.log(`typeof fruta: ${typeof fruta}`);
// empty value

let pera;
console.log(`pera: ${pera}`);
console.log(`!pera: ${!pera}`);
console.log(`!undefined: ${!undefined}`);
console.log(`!null: ${!null}`);
console.log(
    `(((true === !pera) === !undefined) === !null) === !false: ${
        (((true === !pera) === !undefined) === !null) === !false
    }`
);
