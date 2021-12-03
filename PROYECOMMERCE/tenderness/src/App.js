import "bootstrap/dist/css/bootstrap.min.css";
import "./css/estilos.css";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "../src/components/Header"
import CarritoContextProvider from "./context/carritoContext";


import Footer from "../src/components/footer"
import  {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import CrearProductosView from './views/CrearProductosView';
import CrearCategorias2View from  './views/CrearCategorias2View';
import OperacionesView from "./views/OperacionesView";
import ListaProductosView  from "./views/ListaProductosView";
import EditarProductosView from "./views/EditarProductosView";
import ListaCategoriasView from "./views/ListaCategoriasView";
import EditarCategoriasView from "./views/EditarCategoriasView";
import ProductoDetalleView from "./views/ProductoDetalleView";
import CarritoView from  "./views/CarritoView";
import CheckOutView from "./views/ChekOutView";
import PrivateRoute from "./components/PrivateRoute";
import ListaPedidosView from "./views/ListaPedidosView";
import React, { useRef } from "react";


export default function App() {
  
    return (
        <>
            <AuthContextProvider>
            <CarritoContextProvider>
                    <Router>                    
                    <Header /> 
                    
                    <Routes>
                    <Route path="/detalleproducto/:id" element={<ProductoDetalleView   />} />
                    <Route path = "/carrito"       element={<CarritoView  />}/>
                    <Route path = "/operaciones" element ={<OperacionesView />} />   
                    <Route path = "/editarproducto/:id" element={<EditarProductosView  />}/>
                    <Route path = "/editarcategoria/:id" element={<EditarCategoriasView    />}/>                                                          
                    <Route path = "/crearproducto" element ={<CrearProductosView />}/>                    
                    <Route path = "/crearcategoria" element={<CrearCategorias2View />} />
                    <Route path = "/ListarProducto" element ={<ListaProductosView />}/>
                    <Route path = "/ListarCategoria" element ={<ListaCategoriasView  />}/>                                             
                    <Route path = "/ListarPedidos" element ={<ListaPedidosView   />}/>                                             
                    
                     {/**Ruta privadas*/}
                     <Route
                        path="/checkout"
                        element={
                            <PrivateRoute >
                                <CheckOutView  />
                            </PrivateRoute>
                        }
                    />
                    </Routes>
                    <Footer />     


                </Router>
                </CarritoContextProvider>
       </AuthContextProvider>

        
        </>
        
    );
}
