
import { useContext } from "react"
import { CarritoContext } from "../context/carritoContext"

import Swal  from "sweetalert2"

export default function CarritoView() {
    const  { carrito , limpiarCarrito } = useContext(CarritoContext)  

    const  manejarLimpiarCarrito = async () =>{

        const accionUsuario =await Swal.fire ({
            icon:"warning",
            title:"DESEA VACIAR SU CARRITO",
            showConfirmButton:true,
            showCancelButton:true,

        })
        if (accionUsuario.isConfirmed){
            limpiarCarrito();
        }
    }

    return (
        <div className = "container">
            <div className = "my-4 text-center"> 
            <h1 className = "fw-bold" > 
            <i className  = "fas fa-cart-plus me-2"> </i>

                Carrito de Compras
                       </h1>
        </div>
        <table className = "table">
            <thead>
                <tr>

                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>                    
                    <th>Precio Total</th>
                    </tr>
             </thead>

             <tbody>
              
                         
                          {carrito.map((prod, i) => (
                              <tr key={i}>
                                  <td>{prod.nombre}</td>
                                  <td>{prod.precio}</td>
                                  <td>{prod.cantidad}</td>
                                  <td>{prod.precio * prod.cantidad}</td>
                              </tr>
                          ))}
                      
               
                 

             </tbody>
        </table>

        <div className="d-flex justify-content-end">
                <button className="btn btn-danger  btn-lg mr-3" onClick ={manejarLimpiarCarrito}>Limpiar Carrito</button>
                <button className="btn btn-dark btn-lg">Hacer Checkout</button>
            </div>
            
        </div>
    )
}
