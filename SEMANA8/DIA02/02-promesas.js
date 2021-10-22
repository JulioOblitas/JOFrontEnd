const horneartorta = () => {
    //no sabemos como ira el horneado de la torta 
 return new Promise((resolve, reject)=>{

    setTimeout(()=>{
        let estado =false;

         if (estado == true){
             resolve("la torta es horneada")
         }else{
            reject("la torta se quemo :(")
         }
    },5000);


 })
}

horneartorta()
.then((resultado)=>{
 console.log(resultado);
}) 
.catch((tortaquemada)=>{
    console.log(tortaquemada);
});
