/*let nombre = prompt("Ingrese Nombre"); 
localStorage.setItem("nombres", nombre);

setTimeout(function(){
    //ller contenido del localstoage
    let obtenido = localStorage.getItem("nombres");
    alert(obtenido);
},4000);  

setTimeout(function(){
    //ller contenido del localstoage
    localStorage.removeItem ("nombres");
    
},5000);  */

let objeto  = {
    modelo: "Iphone",
    pantalla : 6.5,
    color : ["blanco","dorado", "negro"],
    ano : 2021,

};

let objetojason = JSON.stringify(objeto);
console.log(objetojason);

    


localStorage.setItem("objeto",objetojason);

let objetoobtenido  = localStorage.getItem("objeto");
console.log(objetoobtenido);
let jasonrecuperado = JSON.parse(objetoobtenido);
console.log(jasonrecuperado);
