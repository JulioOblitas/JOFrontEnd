

let mititulo  = document.querySelector("h1");

console.log(mititulo);


mititulo.innerHTML = "hola soy un nuevo titulo";

console.log(mititulo.innerHTML);
let micaja = document.getElementById("caja");
console.log(micaja);

micaja.innerHTML = "<h2> Titulo Caja </h2>";

micaja.style.background = "purple";
micaja.style.color = "orange";

let misItems  = document.getElementsByClassName("lista_item");
console.log(misItems);

let arregloItems = Array.from(misItems);

console.log(arregloItems);

arregloItems.forEach(function(item, indice, conjunto){
 item.style.backgroundColor = "skyblue";
 item.innerHTML = `Patata ${indice}`;
 console.log("mostrando el arreglo",conjunto)
});

let mitexto = document.querySelector("#texto");
console.log(mitexto);
let  boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach(function(bx){
    bx.innerHTML = "<p> soy un parrafo </p>"
});

console.log(boxes[0].innerHTML);

//crear elemento

let series = [
    "Squid Game",
    "Pasion de Gavilanes",
    "Dark",
    "Billions",
    "Got",
    "Suits",
    "Mr Robot",
    "House Dragons",
    "Chernobyl",
    "Breakin Bad"
];

let Divcontenido = document.getElementById("contenido");
let lista = document.createElement("ul");
 Divcontenido.appendChild(lista);

 let textoLi = "";
 series.forEach(function(programatv){
 textoLi = textoLi +  `<li> ${programatv} </li> `

 });

 lista.innerHTML = textoLi;


 let imagen =  document.createElement("img");
 Divcontenido.appendChild(imagen);
imagen.setAttribute("src","https://picsum.photos/200/300");

//class de css

lista.classList.add("resaltado");
lista.classList.add("redondeado");
lista.classList.remove("resaltado")