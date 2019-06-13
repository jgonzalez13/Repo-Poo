//declarando variables tipo symbol
let symbol = Symbol("soy symbol1");
let symbol2 = Symbol("soy symbol2");

//comprobando su tipo
console.log(typeof symbol);

//comprobando que no son iguales
console.log(Symbol("Soy un symbol") === Symbol("Soy un symbol"));



//utilizando symbols como llaves de propiedades

let LLAVE_SYMBOL = Symbol("Esta es una lleve para el id");

let objEstudiante = {};

//la propiedad 20193 tendra el symbol de LLAVE_SYMBOL
objEstudiante[LLAVE_SYMBOL] = "20193";
console.log(objEstudiante[LLAVE_SYMBOL]);