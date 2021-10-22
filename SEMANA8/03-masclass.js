class Animal{
     constructor(nombre, tamanio, velocidad){
         this.Nombre   = nombre;
         this.Tamanio = tamanio;
         this.velocidad = velocidad;
     }

     correr(){
         console.log(`${this.Nombre} corre a ${this.velocidad} m/s`);
     }


}

let Panda  = new Animal ("Panda" , "Grande", "15");

class Roedor extends Animal{
    constructor(nombre, tamanio, velocidad , saltar , roer ){
        super(nombre, tamanio )
        this.Saltar = saltar;
        this.Roer = roer;

    }
    esconder(){
        console.log (`${this.Nombre} saltar a  ${this.Saltar} cm de altura`);
    }
}

let raton  =  new Roedor ("Mickey", "pequeño" , 30 , 50 , "mucho");
console.log(raton);
console.log(raton.esconder());
console.log(raton.correr());


