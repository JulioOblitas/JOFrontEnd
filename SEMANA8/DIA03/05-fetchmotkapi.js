    //obtener productos

    


    const obtenerproductos = async () =>{
            
            
            try {
                let rpta = await fetch("https://616b5eb316c3fa0017171686.mockapi.io/productos");

            let productos = await rpta.json();
            console.table(productos);
                return productos
            } catch (error) {
                console.log("error"); 
            }
    };
    obtenerproductos();

   
   
    let body  = document.querySelector("body");

    obtenerproductos().then ((misproductos) =>{

        let htmlproductos  = "";
        misproductos.forEach(prod => {
            htmlproductos = htmlproductos + 
            `
            <tr>
                <td>
                    ${prod.nombre}
                </td>
                <td>
                    ${prod.precio}
                </td>
            </tr>`;
            
        });

        body.innerHTML = `<table border = "1"> ${htmlproductos} </table>`;

    }).catch((err) => console.log(err));
