
import { useState, useEffect } from "react";
import { obtenerProductos } from "../services/productosServices";
import Producto from "./producto";


//<Main lista={listaPlatillos} />
//llamo a la f Main
//Main({lista})




export default function Main( {miprop}) {
   
   
console.log(miprop);
    //cuando utilizemos hooks tienen que estar dentro del componente
    
const [productos, setProductos] = useState([]);
//const [pagina, setPagina] = useState(1);
//const [limite, setLimite] = useState(6);

const getProductos = async () => {
    try {
        const prodObtenidos = await obtenerProductos();
         setProductos(prodObtenidos);
        //setProductos([...productos, ...prodObtenidos]);
    } catch (error) {
        console.log(error);
    }
};
useEffect(() => {
    getProductos();
}, []);
    

    return (
        <>
                           
                    <div className="contenedor">
                    <div className="aplicacion">
                    <div className="principal">
        
                    <main>
            
                          {miprop.map((item, i) => (
                        <Producto key={i} item={item} />
                        ))}
                    </main>
                    </div>
                    </div>
                    </div>
               
              
                
        </>  
    );              
}
