
/*let frutas  = ["melon", "fresa", "naranja" ];

frutas.forEach(function(fru){
    console.log(fru);
})*/

/*map metodo quje transforma un arreglo*/

/*let energia = [95, 91, 42, 80];

let energiacima = energia.map(function (energy) {
   return energy/2; 
});*/


/*console.log(energiacima);*/

let conductores = [
{
    nombres : "Jose",
    vacunado : true,
},

{
    nombres : "Glenda",
    vacunado : true,
},

{
    nombres : "Osmar",
    vacunado : false,
},

];


let puedepasar = conductores.filter(function(driver){
    return driver.vacunado==true;
});

console.log(puedepasar);

/*include para buscar elemtnos vuelve true o false
/*find para buscar  elemento