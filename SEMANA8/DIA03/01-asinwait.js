const traerData  = () => {
    return new Promise((resolve,reject) =>{
        resolve("Data obtenida");
    });
};


/*const traerData = async() =>{
    
    //este ejemplo es de prueba antes de be haber codigo de extraccion de datos coun un if 
    //si es verdad resolved caso contrario reject
    //*return "Data Obtenida Asyn";

    throw "eror al obtener datos"  ; // throw = reject
}*/

traerData()
.then(rpta => console.log(rpta))
.catch (error => console.log(error));


let usarData = async() =>{
    

    try {
        let rpta  = await traerData();
    console.log(rpta);
        
    } catch (error) {
        console.log(error);
    }
};

//usarData();

const traerUsuarios = async() => {
    try {
        
        let rpta =  await fetch('https://reqres.in/api/users?page=2')
        let datos  = await rpta.json();
        console.table(datos.data);

    } catch (error) {
        console.log(error);
    }
};

traerUsuarios();