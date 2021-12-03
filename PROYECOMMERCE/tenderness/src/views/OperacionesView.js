import React from 'react'

import { Link } from "react-router-dom"
export default function OperacionesView() {
    return (
        <div className = "container"> 
            <div className = "my-4 text-center"> 
            <h1 className = "fw-bold" > 
            <i className  = "fas fa-cart-plus me-2"> </i>

                    OPERACIONES COMERCIALES
                       </h1>
                       
                    <div className = "contenedoroperaciones" >
                       
                        <Link to ="/ListarPedidos" className = "btn btn-primary">
                         PEDIDOS
                        </Link>
                       <button className = "btn btn-primary btnoperaciones">CLIENTES </button>
                       <Link to ="/crearProducto" className = "btn btn-primary">
                         PRODUCTOS
                        </Link>
                       
                        <Link to ="/crearCategoria" className = "btn btn-primary">
                         CATEGORIAS
                        </Link>
                    </div>
            </div>
        </div>
    )
}
