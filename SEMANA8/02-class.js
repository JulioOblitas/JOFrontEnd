class pokemon{
    Nombre;
    Tipo;
    Ataque;
    Defensa;
    PuntosVida;

    constructor(nombre, tipo, ataque,defensa, puntosvida){
        this.Nombre = nombre;
        this.Tipo = tipo;
        this.Ataque=ataque;
        this.Defensa = defensa;
        this.PuntosVida= puntosvida;
        this.aparecer();
    }

    aparecer(){
        console.log(`un ${this.Nombre} salvaje aparecio`);
    }

    atacar(){
        console.log(`${this.Nombre} ataca con  ${this.Ataque}`);
    }
 
 
}

let pokemon1  = new  pokemon("pikachu" , "Electrico", 30,20,60 );
let pokemon2  = new  pokemon("dragonita", "Dragon",40,20, 50 );

console.log(pokemon1.Tipo);  
console.log(pokemon2.atacar());  

