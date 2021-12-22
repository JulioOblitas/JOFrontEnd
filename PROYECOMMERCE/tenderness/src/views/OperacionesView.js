import React from 'react'

import { Link } from "react-router-dom"
import Swal from "sweetalert2";

 
const MensajeNoDisponible =  async() => {
        
  

let timerInterval
Swal.fire({
  title: 'Aviso al Usuario!',
  html: 'Opcion en Construccion se Cerrara Automaticamente <b></b> milliseconds.',
  timer: 900,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

   }
    
export default function OperacionesView() {
    return (
        <div className = "contenedor"> 
           
                <div className = "principaloperaciones"> 
                     <h1 className = "fw-bold" ><i className  = "fas fa-cart-plus me-2"> </i>OPERACIONES COMERCIALES</h1>                       
                </div>
                       <div className = "principaloperacionesboton">
                          
                          <Link to ="/ListarPedidos" className = "btn btn-primary btnoperaciones">
                           PEDIDOS
                          </Link>
                          
                            <button className = "btn btn-primary btnoperaciones" onClick={() => {MensajeNoDisponible()}} >CLIENTES </button>
                             <Link to ="/crearProducto" className = "btn btn-primary btnoperaciones">
                               PRODUCTOS
                            </Link>
                       
                            <Link to ="/crearCategoria" className = "btn btn-primary btnoperaciones">
                               CATEGORIAS
                            </Link>
                        </div>            
                    </div>        
    )
}
