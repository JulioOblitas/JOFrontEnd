import {  useState, useEffect  } from "react";
import { obtenerPedidos, eliminarPedidos } from  "../services/pedidosServices"
import Cargando from "../components/Cargando";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
export default function ListaPedidosView() {
    const [categorias,SetCategorias] = useState([])
    
    const [pedidos ,SetPedidos] = useState([])
    const [loading,SetLoading] = useState(false) 

    const getPedidos = async() =>{

        try {
            SetLoading(true)
            const pedidosObtenidos = await obtenerPedidos();
            SetPedidos(pedidosObtenidos);
            SetLoading(false);    
        } catch (error) {
            console.log(error);
        }

        
    };

    ;
   
    const MensajeNoDisponible =  async() => {
        
  
     const rpta  = await Swal.fire({
        icon : 'success',
        title : 'Aviso al Usuario',
        text : 'Opcion en Construccion',
        
});
    }


    const verificarEliminar = async(id) => {
        const rpta  = await Swal.fire({
        icon : 'success',
        title : 'Desea Eliminar Pedido',
        text : 'Esta accion es irreversible',
        showConfirmButton: true,
        showDenyButton:true,
        confirmButtonText:"Si, Eliminar",
        denyButtonText:"No, cancelar",
    });

        if (rpta.isConfirmed){
            try {
                await eliminarPedidos(id);

                await Swal.fire({
                    icon : "success",
                    title : "Pedido Eliminado",
                    text :  "Accion de Eliminar Pedido"
                })

                getPedidos();
                
            } catch (error) {
                    console.log(error);
            }
        }

};



    useEffect(() =>{
        getPedidos();
    },[]);


    return (
        <>
            {loading ? (
                <Cargando />
            ) : (
                <>
                 <div className = "contenedor">
                 <div className="principalcategorias">
                 <h1 className = "mb-3">LISTADO DE PEDIDOS</h1>

                 

                 <table className = "table"> 

                 <thead>
                     <tr>
                         <th>PEDIDO</th>                         
                         <th>TOTAL </th>
                         <th>CLIENTE</th>
                         <th>TELEFONO</th>
                         <th>EMAIL</th>
                         <th>DIRECCION</th>
                         <th>VISUALIZAR</th>
                         <th>ELIMINAR</th>
                         <th>EMITIR COMPROBANTE</th>
                     </tr>

                 </thead>
                 <tbody>
                     {
                         pedidos.map((ped,i) =>(
                             <tr key={i}>
                                 <td>{ped.id} </td>
                                 <td>{(ped.total * 1).toFixed(2)} </td>
                                 <td>{ped.nombreCompleto} </td>
                                 <td>{ped.telefono} </td>
                                 <td>{ped.email} </td>
                                 <td>{ped.direccion} </td>

                                 <td>
                                    {/*<Link  className= "btn btn-info me-2" to ={`/editarcategoria/${ped.id}`}>  <i className="fas fa-search"></i> </Link>*/}
                                    
                                    <button className = "btn btn-info" onClick={() => {MensajeNoDisponible()}}>  <i className="fas fa-search"></i>  </button> 
                                
                                      {/*<Link className= "btn btn-info" to ={`/Publicidad`}>  <i className="fas fa-search"></i>   </Link>*/}
                                 </td>                                                    
                                 <td>
                                    <button className = "btn btn-danger" onClick={() => {verificarEliminar(ped.id)}}>  <i className="fas fa-eraser"></i>  </button>
                                </td>        
                                <td>
                                    <button className = "btn btn-primary" onClick={() => {MensajeNoDisponible()}}>  <i className="fas fa-file-invoice"></i>  </button>
                                </td>                                             
                             </tr>                         
                         ))                         
                     }
                            
                           
                 </tbody>
                 </table>
                 </div>
                 </div>
            </> 
                
            )}
            </>
    
    );
}
