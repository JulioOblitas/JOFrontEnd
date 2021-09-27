let nombre = "JULIO";
let apellido = "OBLITAS";
let edad = 18


let texto = `hola soy  ${nombre} ${apellido} 
de VILLA MARIA, tengo ${edad} años `

console.log(texto);

let cantidadmascotas = prompt(`Hola ${nombre}  cuantas de mascotas tienes` );

console.log(`Mascotas  ${cantidadmascotas}`);

/*let convertido = +cantidadmascotas;*/
let convertido = parseInt(cantidadmascotas);

console.log (typeof convertido ,  convertido);