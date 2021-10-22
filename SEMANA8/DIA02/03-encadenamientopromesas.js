let hornearTorta = () =>{
    return new Promise((resolve, reject) => {
            setTimeout(()=>{

                if (true){
                    resolve("torta ready");

                }else{
                    reject("se quemo");
                }

            }, 5000);
    });
};
let PrepararGlaseado =() =>{
    return new Promise((resolve,reject) =>{
            setTimeout(()=>{

                if (false){
                    resolve("torta glaseada");

                }else{
                    reject("se malogro el glaseado");
                }

            }, 3000);

    });
};


let CubrirTorta =() =>{
    return new Promise((resolve,reject) =>{
            setTimeout(()=>{

                if (true){
                    resolve("torta cubierta");

                }else{
                    reject("se malogro la cubierta de torta");
                }

            }, 3000);

    });
};

//promesa con sus procesos 
hornearTorta()
.then((tortahorneada) => {
    console.log(tortahorneada);
 return PrepararGlaseado();
})
.then((glaseadolisto) => {    
    console.log(glaseadolisto);
    return CubrirTorta();
})
.then((tortadecorada) => {    
    console.log(tortadecorada);    
})
.catch((tortamala) =>{
    console.log(tortamala);
})


