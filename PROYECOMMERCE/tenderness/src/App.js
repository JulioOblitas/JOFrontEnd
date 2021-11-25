import "bootstrap/dist/css/bootstrap.min.css";
import "./css/estilos.css";
import { AuthContextProvider } from "./context/AuthContext";

import { useState, useContext } from "react";

//import NombreFunción from "ruta/Nombre_Archivo"
import  {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import CrearProductosView from './views/CrearProductosView'
import CrearCategoriasView from './views/CrearCategoriasView';
import CheckOutView from  "./views/ChekOutView"
import Main   from "./components/main";

import OperacionesView from "./views/OperacionesView";

import ListaProductosView  from "./views/ListaProductosView";
import EditarProductosView from "./views/EditarProductosView";

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
            <AuthContextProvider>
                    <Router>
                    
                    
                    <Routes>
    |                <Route path = "/" element = {<Main anadirACarrito={anadirACarrito} />}/>
                    <Route path = "/operaciones" element ={<OperacionesView />}/> 
                    <Route path = "/editarproducto/:id" element={<EditarProductosView  />}/>                             
                    <Route path = "/crearproducto" element ={<CrearProductosView />}/>                    
                    <Route path = "/crearcategoria" element={<CrearCategoriasView />} />
                    <Route path = "/ListarProducto" element ={<ListaProductosView />}/>
                    
 {/**Ruta privadas*/}
                         
       </Routes>
       </Router>

       </AuthContextProvider>

        
        </>
        
    );
}
