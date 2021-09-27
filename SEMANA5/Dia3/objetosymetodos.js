/*let jugador = {

    nombre : "dybala",
    nacionalidad: "ARGENTINO",
    posicion: "DELANTERO",
    estatura :1.85,
    correr :  function(){
        console.log("Correr");

    },
    patear :  function(){
        console.log("Paterar");
        
    },

};

jugador.patear();*/
let preciosimple =5;
let preciodoble =9;

let cantsimple = 0;
let cantdoble = 0;

let finalizar = false;

do{
 let eleccion = + prompt ("Ingrese 1 Simple 2 Doble 3 Finalizar")

 switch(eleccion){
     case 1:

        cantsimple ++;

        break;
        case 2:
            cantdoble ++;
            break;
        case 3:
            finalizar=true;
        break;
 }

}while(finalizar == false)
let total = precioSimple * cantsimple + precioDoble * cantdoble;

console.log(`El total a pagar será de: ${total} por 
${cantidadSimple} hamburguesas Simples y 
${cantidadDobles} por hamburguesas Dobles`);