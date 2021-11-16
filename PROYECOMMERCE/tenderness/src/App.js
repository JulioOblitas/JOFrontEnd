

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/estilos.css";

import { useState } from "react";

//import NombreFunción from "ruta/Nombre_Archivo"
import Header from "./components/header";
import NavSide from "./components/navside";
import Main from "./components/main";

import { listaRopas } from "./utils/data";

export default function App() {
    const [carrito, setCarrito] = useState([]);
    const anadirACarrito = (objRopas) => {
        //primero preguntamos si ya existe
        //findIndex() -1 no existe , 0 a + Si existe
        const existe = carrito.findIndex((ropas) => ropas.id === objRopas.id);
        if (existe === -1) {
            //no existe, lo añado con la cantidad base de 1
            setCarrito([...carrito, { ...objRopas, cantidad: 1 }]);
        } else {
            //si existe, hay que modificar el carrito
            let carritoTmp = [...carrito]; //copia de carrito
            carritoTmp[existe].cantidad += 1; //ya estoy aumentando su cantidad
            setCarrito(carritoTmp);
        }
        // setCarrito([...carrito, objPlatillo]);
    };

    //cuando utilizemos hooks tienen que estar dentro del componente

    return (
        <>
        
                <Header />                
                <NavSide />
                <div className="contenedor">
                <div className="aplicacion">
                <div className="principal">
                    
                    {/* <Componente nombre_props={valor_props} */}
                    <Main lista={listaRopas} anadirACarrito={anadirACarrito} />
                </div>
                </div>
                </div>
        
        </>
        
    );
}

