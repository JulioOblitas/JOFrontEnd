import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";


import  {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import ListaProductosView from './views/ListaProductosView'
import CrearProductosView from './views/CrearProductosView'
import EditarProductosView from './views/EditarProductosView'
import ListaCategoriasView from './views/ListaCategoriasView';
import CrearCategoriasView from './views/CrearCategoriasView';


export default function App() {
  return (
    <div>
       {/*/<ListaProductosView />*/}
       {/*<CrearProductosView />*/}
       <Router>
       <Routes>
          <Route path = "/" element ={<ListaProductosView />}/>
          <Route path = "/crearproducto" element ={<CrearProductosView />}/>
          <Route path = "/editarproducto/:id" element={<EditarProductosView />}/>          
          <Route path = "/listacategorias" element={<ListaCategoriasView />} />
          <Route path = "/crearcategoria" element={<CrearCategoriasView />} />

       </Routes>
       </Router>
    </div>
  )
}
