fetch("https://reqres.in/api/users?page=2")
    .then((respuesta) => {
        console.log(respuesta);
        return respuesta.json(); //parsea de texto a JS
    })
    .then((gatos) => {
        console.table(gatos.data);
    });


    let nuevousuario ={
        name: "Daniel de la Cruz",
        job: "BOSS"
    }


    let cabecera = {

        method : "POST", 
        headers: {
            "Content-Type" : "applicatio/json",
        },
        body: JSON.stringify(nuevousuario),
        };

        fetch ("https://reqres.in/api/users",cabecera)

        .then((respuesta) => {
            return respuesta.json();
        })

        .then((usuarioCreado) => {
        console.log(usuarioCreado);
        })

        .catch((error) =>{
            console.log(error);
                });


        