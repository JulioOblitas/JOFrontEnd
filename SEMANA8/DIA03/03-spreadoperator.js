let frutas = ["Kiwi", "Sandia", "Fresa" , "Chirimoya"];

let frutasTmp = [...frutas, "Naranja", "Platano"];

console.log(frutasTmp);

let verduras = ["Lechuga", "Col china" , "Zanahoria"];

let comida = [...frutas, ...verduras ];

console.log(comida);


let pikachu = {
    tipo : "Electrico",
    ataque : 40,
    vida : 55,
    ataque: "cabezaso",
};

//no hacer esto asi no crea otro objeto del original
/*let pikachurojo = pikachu;
console.table(pikachurojo);*/

let pikachuverde  = {...pikachu,ataque:"conversar", come: "lechuga"};

pikachuverde.vida = 40;

console.log("///pikachu original ");
console.table(pikachu);
console.table(pikachuverde ) ;
