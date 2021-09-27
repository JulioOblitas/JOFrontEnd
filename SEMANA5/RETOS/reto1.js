
/*let cantlitros = + prompt("Cantidad Producidad en LT: ");
let precxlitro = + prompt("Precio x litro: ");


 
const  ltxgalon = 3.785;


let preciogalon = ltxgalon * precxlitro;
let cantengalon =  cantlitros / ltxgalon;
let totalpagado = cantengalon * preciogalon;

console.log(`Cantidad de Leche lt ${cantlitros}
            Precio por Galon ${round(preciogalon)}
            Galones producido ${Math.floor(cantengalon)} 
            Total pagado ${Math.round(totalpagado*100/100)}`);
            

            function round(num) {
                var m = Number((Math.abs(num) * 100).toPrecision(15));
                return Math.round(m) / 100 * Math.sign(num);
            }*/

/*reto2            
let cantsimple =0;
let cantdoble =0;
let canttriple =0;
 descripcion  = "";
 let finalizar = false;
let  swint =0;
let opcion =0; 
 do{
    opcion  =+ prompt("1. Hamburguesa Simple  2. Hamburguesa Doble  3. Hamburguesa Triple 4. Finalizar")

    if(opcion == 1 ){
         descripcion  = "Hamburguesa Simple";

    }

    if(opcion == 2 ){
         descripcion  = "Hamburguesa Doble";
    }
    if(opcion == 3 ){
         descripcion  = "Hamburguesa Triple";
    }

    if(opcion == 4 ){        
      swint = 1   
   }
    

        if (swint == 0) {
        
        let cantcomprar  =+ prompt(`Ingrese Cantidad ${descripcion}` );

        switch (opcion){
            case 1 :
            cantsimple  =  cantsimple + cantcomprar;
                break;
            case 2 :
                cantdoble = cantdoble + cantcomprar;
                break;
            case 3 :
                canttriple = canttriple + cantcomprar;
                break;
            }

        }

    }while (swint == 0)

    let formapago  = "";
    opcpago  =+ prompt("1. Efectivo  2. Tarjeta")
    let tasa =0;
    if  (opcpago ==2 ){
        tasa = 0.05
        formapago = "Credito";
        
        total  = (cantsimple * 20)  +   (cantdoble * 25 )   +  (canttriple * 28 ) ;
        
        cargo = ((cantsimple * 20)* tasa) + ((cantdoble * 25)* tasa); + ((canttriple * 28)* tasa);

        console.log(`El usuario solicito 
             Hamburguesa Simple ${cantsimple}
             Hamburguesa Doble ${cantdoble}
             Hamburguesa Triple ${canttriple}   
             Pago en  ${formapago} 
             Total  ${total}
             Cargo 5%  ${cargo}
             Pagar  ${total + cargo}`);

    }
    else {
        formapago = "Efectivo";

        total  = (cantsimple * 20)  +   (cantdoble * 25 )   +  (canttriple * 28 ) ;
        
        cargo = 0.00
        console.log(`El usuario solicito 
             Hamburguesa Simple ${cantsimple}
             Hamburguesa Doble ${cantdoble}
             Hamburguesa Triple ${canttriple}   
             Pago en  ${formapago} 
             Total  ${total}
             Cargo 5%  ${cargo}
             Pagar  ${total + cargo}`);
    }*/
    
let nconsulta =+ prompt("Ingrese Nro de Consulta");
let primcita = 0;
let segcita = 0;
let tercita = 0;
let ctacita = 0;


 if( nconsulta > 0){
 for (let i = 1; i<=nconsulta; i++){

    if (i<=3){
       primcita = primcita + 1;
    }
     
    
    if (i>3 && i<=5) {
        segcita = segcita + 1;
    }
    if (i>5 && i<=8) {
         tercita = tercita +1;
        
    }
    
    if (i>8) {
        ctacita = ctacita + 1;
    }

 }
 total = ((primcita * 200) + (segcita * 150) + (tercita * 100) + (ctacita * 50));

console.log (`Costo de las 3 Primeras Cita ${primcita * 200}
              Costo de las 2 Siguientes Cita ${segcita * 150}    
              Costo de las 3 Siguientes Cita ${tercita * 100}
              Costo de las    demas Cita ${ctacita * 50}
              Pago por el Tratamiento ${total}  por ${nconsulta} consultas`);
 }
 else{
    console.log ("Ingrese Nro Consulta > 0");
 }
