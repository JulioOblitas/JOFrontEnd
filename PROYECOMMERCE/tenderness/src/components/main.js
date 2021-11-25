
import { useState, useEffect } from "react";
import { obtenerProductos } from "../services/productosServices";
import Producto from "./producto";
import Header from "./Header";
import NavSide from "./navside";
import Footer from "./footer"


//<Main lista={listaPlatillos} />
//llamo a la f Main
//Main({lista})




export default function Main({ lista, anadirACarrito }) {
    
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
}, [productos]);
    

    return (
        <>
             <Header />                
                <NavSide /> 
              
                        <div className="contenedor">
                        <div className="aplicacion">
                    <div className="principal">
        
                    <main>
            {productos.map((item, i) => (
                <Producto key={i} item={item} anadirACarrito={anadirACarrito} />
            ))}
         </main>
                </div>
                </div>
                </div>
               
                <Footer />     
                
        </>  
    );              
}
