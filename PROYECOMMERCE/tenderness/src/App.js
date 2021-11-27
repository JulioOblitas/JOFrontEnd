import "bootstrap/dist/css/bootstrap.min.css";
import "./css/estilos.css";
import { AuthContextProvider } from "./context/AuthContext";

import { useState, useContext } from "react";

//import NombreFunción from "ruta/Nombre_Archivo"
import Header from "../src/components/Header"

import Footer from "../src/components/footer"
import  {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import CrearProductosView from './views/CrearProductosView'
import CrearCategoriasView from './views/CrearCategoriasView';

import OperacionesView from "./views/OperacionesView";
import ListaProductosView  from "./views/ListaProductosView";
import EditarProductosView from "./views/EditarProductosView";
export default function App() {
   
    
    return (
        <>
            <AuthContextProvider>
                    <Router>                    
                    <Header /> 
                    
                    <Routes>
                       
                    <Route path = "/operaciones" element ={<OperacionesView />} />   
                    <Route path = "/editarproducto/:id" element={<EditarProductosView  />}/>                             
                    <Route path = "/crearproducto" element ={<CrearProductosView />}/>                    
                    <Route path = "/crearcategoria" element={<CrearCategoriasView />} />
                    <Route path = "/ListarProducto" element ={<ListaProductosView />}/>
                    
 {/**Ruta privadas*/}
                         
                    </Routes>
                
                    <Footer />     
                </Router>

       </AuthContextProvider>

        
        </>
        
    );
}
