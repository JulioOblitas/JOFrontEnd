
import Swal  from "sweetalert2"
import { useContext } from "react"
import { CarritoContext } from "../context/carritoContext"
import { useParams, useNavigate } from "react-router";



export default function CarritoView() {
    
    
    const  { carrito , limpiarCarrito } = useContext(CarritoContext)  
    const navigate = useNavigate();
    
    const ejecutarComprarAhora = () => {
        
        //anadirACarritoContext();
        navigate("/checkout");
    };

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

                    <th>ITEM</th>
                    <th>PRECIO</th>
                    <th>CANTIDAD</th>                    
                    <th>TOTAL</th>
                    </tr>
             </thead>

             <tbody>
              
                         
                          {carrito.map((prod, i) => (
                              <tr key={i}>
                                  <td>{prod.descripcion}</td>
                                  <td>{(prod.precio * 1).toFixed(2)}</td>
                                  <td >{prod.cantidad}</td>
                                  <td  >{(prod.precio * prod.cantidad * 1).toFixed(2)}</td>
                              </tr>
                          ))}
                      
               
                 

             </tbody>
        </table>

        <div className="d-flex justify-content-end">
                <button className="btn btn-danger  btn-lg mr-3" onClick ={manejarLimpiarCarrito} >  VACIAR  <i className="fas fa-cart-plus"></i>  </button>
                <button className="btn btn-primary btn-lg" onClick = {ejecutarComprarAhora}>Comprar Ahora!  <i class="fas fa-money-bill-wave-alt"></i> </button>
                
            </div>
            
        </div>
    )
}
