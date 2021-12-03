import {  useState, useEffect  } from "react";
import { obtenerCategorias, eliminarCategoria } from "../services/categoriasServices";
import Cargando from "../components/Cargando";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
export default function ListaCategoriasView() {
    const [categorias,SetCategorias] = useState([])
    const [loading,SetLoading] = useState(false) 

    const getCategorias = async() =>{

        try {
            SetLoading(true)
            const categoriasObtenidas = await obtenerCategorias();
            SetCategorias(categoriasObtenidas);
            SetLoading(false);    
        } catch (error) {
            console.log(error);
        }

        
    };
   
    const verificarEliminar = async(id) => {
        const rpta  = await Swal.fire({
        icon : 'success',
        title : 'Desea Eliminar Categoria',
        text : 'Esta accion es irreversible',
        showConfirmButton: true,
        showDenyButton:true,
        confirmButtonText:"Si, Eliminar",
        denyButtonText:"No, cancelar",
    });

        if (rpta.isConfirmed){
            try {
                await eliminarCategoria(id);

                await Swal.fire({
                    icon : "success",
                    title : "Categoria Eliminada",
                    text :  "Accion de Eliminar Categoria"
                })

                getCategorias();
                
            } catch (error) {
                    console.log(error);
            }
        }

};



    useEffect(() =>{
        getCategorias();
    },[]);


    return (
        <>
            {loading ? (
                <Cargando />
            ) : (
                <>
                 <h1 className = "mb-3">LISTADO DE CATEGORIAS</h1>

                 

                 <table className = "table"> 

                 <thead>
                     <tr>
                         <th>CATEGORIA</th>                         
                         <th>DESCRIPCION </th>
                         <th>MODIFICAR</th>
                        <th>ELIMINAR</th>
                     </tr>

                 </thead>
                 <tbody>
                     {
                         categorias.map((cat,i) =>(
                             <tr key={i}>
                                 <td>{cat.nombre} </td>
                                 <td>{cat.descripcion} </td>
                                 <td>
                                 <Link  className= "btn btn-info me-2" to ={`/editarcategoria/${cat.id}`}>  <i className="fas fa-edit"></i> </Link>
                                 </td>                                                    
                                 <td>
                                    <button className = "btn btn-danger" onClick={() => {verificarEliminar(cat.id)}}>  <i className="fas fa-eraser"></i>  </button>
                                </td>                                                    
                             </tr>                         
                         ))                         
                     }
                            
                           
                 </tbody>
                 </table>
            </> 
                
            )}
            </>
    
    );
}
