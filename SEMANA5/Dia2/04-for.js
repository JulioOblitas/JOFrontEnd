
let ropa = ["Bufanada" , "Chompa", "Camisa", "Guantes"]

let eleccion = +prompt("0 Bufanda 1 Chompa 2 Camisa 3 Gauntes");

for (let i = 0; i < ropa.length; i++) {

    if (eleccion ==i){
        console.log(ropa[i]);
    }
    

}
