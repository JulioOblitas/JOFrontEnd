
let botones = document.querySelectorAll(".btn-agregar");
let  botoncarrito = document.getElementById("btncarrito");

let precio = document.getElementsByTagName("span");
let desitem = document.getElementsByTagName("h4");



let objetoobtenido  = localStorage.getItem("Cantidad");
localStorage.setItem("Cantidad", 0 );            
let cant = JSON.parse(objetoobtenido);

let citem = "";
let cprecio = "";






cuandoSeHaceClick = function (evento) {  

  cant = cant + 1;
  localStorage.setItem("Cantidad",cant );              
  citem = desitem.item(indice).innerText;
  cprecio = precio.item(indice).innerText;

  alert(citem);

}


botones.forEach((item, indice) => {
	item.addEventListener("click", cuandoSeHaceClick);

 

  botoncarrito.innerText = `CANT=> ${cant}`;
 
});






















