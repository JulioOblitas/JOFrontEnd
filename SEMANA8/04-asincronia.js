/*console.log("1 Estamos jkugando monopolio");

setTimeout(function(){
    console.log("2 Esperar el rapi apraque llegue");
}, 2000)

console.log("3 Esperar el rapi apraque llegue");*/

let alumnos = [
    "Cristopher",
    "Arturo",
    "Masami",
    "JUan",
    "Nicolas",
    "Justin",
    "Ariana",
    "Glenda",
    "Graciela",
    "Melissa",
];

const buscaAlumno = function(nombre , fCallback){

    setTimeout(function(){
        for (let i=0 ; i < alumnos.length; i++){

            if (alumnos[i] == nombre){  
                    fCallback(true)
                    return;
            }
            
        }
        fCallback(false);

    },4000);
}

buscaAlumno("Melissa",function(existe){

     if (existe ==true){

        console.log("Alumno Existe");

     }else{
        console.log("No Existe Alumno");
     }
});
