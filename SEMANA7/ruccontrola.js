


cruc = prompt("Ingresa Ruc");


validarruc(cruc);


function validarruc(ruc){
    acum =0;
     if (ruc.length == 11){
        
        for (let index = 0; index <=11 ; index++) {

            if (index == 0){
               valor =  ruc [index] * 5;
               acum = acum + valor;
              
            }
            if (index == 1){
                valor =  ruc [index] * 4;
                acum = acum + valor;
              
             }

             if (index == 2){
                valor =  ruc [index] * 3;
                acum = acum + valor;
              
             }
             if (index == 3){
                valor =  ruc [index] * 2;
                acum = acum + valor;
             }
             if (index == 4){
                valor =  ruc [index] * 7;
                acum = acum + valor;
             }
             if (index == 5){
                valor =  ruc [index] * 6;
                acum = acum + valor;
             }
             if (index == 6){
                valor =  ruc [index] * 5;
                acum = acum + valor;
             }
             if (index == 7){
                valor =  ruc [index] * 4;
                acum = acum + valor;
             }

             if (index == 8){
                valor =  ruc [index] * 3;
                acum = acum + valor;
             }
             if (index == 9){
                valor =  ruc [index] * 2;
                acum = acum + valor;             
             }                
        }

        resultado = 11 - (acum % 11);

        if (resultado <=10 ){
            console.log("Digito Control Buscado " , resultado );
        }

        if (resultado == 11){
            console.log("Digito Control 0 " , resultado );
        }
        
        if (resultado == 10){
            console.log("Digito Control 1 " , resultado );
        }
        


     }

}