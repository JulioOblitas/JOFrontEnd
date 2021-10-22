let divContenido  = document.getElementById("contenido");
let miboton  = document.createElement("button");

miboton.innerText = "Clickea";

divContenido.appendChild(miboton);

miboton.addEventListener("click" , function(){
alert("haz hecho clikc")
});

let peliculas= [
    "parasite",
    "Shang-li",
    "InterEstellar",
];

peliculas.forEach(function(peli){
 
    let nuevoparrafo = document.createElement("p");
 nuevoparrafo.innerHTML= peli;
 divContenido.appendChild(nuevoparrafo);
 nuevoparrafo.style.cursor="pointer";

    nuevoparrafo.addEventListener("dblclick", function() { 
     alert(`hiciste click en ${peli}`);
    nuevoparrafo.style.backgroundColor = "red";

});
});


let miinput = document.createElement("input");
miinput.setAttribute("type", "password");
divContenido.appendChild(miinput);

let btnver  = document.createElement("button");
btnver.innerText = "Ver";
divContenido.appendChild(btnver);

let esvisible = false;
btnver.addEventListener("click", function(){


if( esvisible == false){

    miinput.setAttribute("type", "text");
    esvisible = true;
    
}else{


    miinput.setAttribute("type", "password");
    esvisible = false;
}

});

//*btnver.addEventListener("click", Mostrar);

// capturar eventos 

let irGoogle  = document.createElement("a");
irGoogle.setAttribute("href","https://www.google.com/");
irGoogle.innerText = "Llevame a Google";
divContenido.appendChild(irGoogle);

irGoogle.addEventListener("click", function(evento){
//*    console.log(evento);

   //* let  hola  = prompt(evento);
   evento.preventDefault();
       console.log(evento);

});

let miform =  document.getElementById("formulario");
miform.addEventListener("submit", function(evento){
    evento.preventDefault();
console.log("Submitt");
});

//para extraer datos en formato jason
let nuevousuario ={
    nombres: miform.nombres.value,
    apellidos: miform.apellidos.value, 
};
console.log(nuevousuario);
