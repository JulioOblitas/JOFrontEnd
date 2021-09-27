
      
      /*let miedad  = prompt("Ingresa Edad");

      if (miedad < 18 ){
          console.log("eres menor")
      } else if (miedad == 20 ){
        console.log("promocion")
      }else{
        console.log("adulto")
      }
*/

/*switch
let mifruta = prompt("Fruta");

 switch (mifruta){

    case "uva":
        console.log ("Elegiste" , mifruta)
        break;

    case "fresa":
        console.log ("Elegiste" , mifruta)
        break;
    default:
        console.log ("No tenemos esa fruta", mifruta)

    
 }
      */

 function setname(name){
     let result;
    try {
        if (name.length <4) throw "short";
        if (name.length >10) throw "large";
        
        result= `el nombre ${name} es correcto`;
    
    } catch (error) {

        if (error == "short"){
            console.log ("el nombre es muy corto");
        } else if  ( error == "large");
            console.log ("el nombre es muy largo");
        
    } finally {
        console.log("finally");
        if (result){
        console.log("result ", result);
        }
    }


    

 }

 let nombre = prompt("Ingrese Nombre");
 setname(nombre);

