
import { connectStorageEmulator } from "@firebase/storage";
import { async } from "@firebase/util";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import Swal from "sweetalert2";
import { obtenerProductos , eliminarProducto} from "../services/productosServices";
import { obtenerCategorias } from "../services/categoriasServices"

export default function ListaProductosView() {
    const [productos, setProductos] = useState([])  
    const [categorias, setCategorias] = useState([]);
    
        const getProductos = async() =>{

        try {
            
            const productosobtenidos  = await obtenerProductos()

            setProductos (productosobtenidos); // despues que obtenemos los datos actualizamos el estado

            const catObtenidas = await obtenerCategorias();            
            setCategorias(catObtenidas);

        } catch (error) {
            console.log(error);
            
        }
    };


    const verificarEliminar = async(id) => {
            const rpta  = await Swal.fire({
            icon : 'success',
            title : 'Desea Eliminar el producto',
            text : 'Esta accion es irreversible',
            showConfirmButton: true,
            showDenyButton:true,
            confirmButtonText:"Si, Eliminar",
            denyButtonText:"No, cancelar",
        });
    
            if (rpta.isConfirmed){
                try {
                    await eliminarProducto(id);

                    await Swal.fire({
                        icon : "success",
                        title : "Eliminado  producto",
                    })

                    getProductos();
                    
                } catch (error) {
                        console.log(error);
                }
            }

    };
    
   
    const getMostraCategorias = (idCategoria) => {

        
        let descrip 
        const catfiltrados = categorias.filter((categ) => categ.id == idCategoria)    
           {
           


            { catfiltrados.map((cat, i) => (                
                descrip = cat.nombre                
            ))}

        }
  
        return (
                
                            
                    <td>{descrip}</td>
       
         
        )

       
           
    };
    
   
     
    // para que carge el listado
    useEffect(() =>{
        getProductos();
    },[]);
    
    
    

    return (
        <div>
            <h1>LISTADO DE PRODUCTOS</h1>

            
            <table className="table">
                <thead>
                    <tr>
                        <th>CATEGORIA</th>
                        <th>ITEM</th>
                        <th>DESCRIPCION</th>
                        <th>PRECIO</th>
                        <th>MODIFICAR</th>
                        <th>ELIMINAR</th>

                    </tr>

                </thead>
                <tbody>
                   
                    
                    {productos.map(({nombre,descripcion,precio,id,categoria_id,estado}, i) => (
                        
                        
                        <tr key ={i}>
                        
                        { /*ejemplo de if ternario
                            { (id==1) ? (
                                   <td>{`hola`} </td>
                        ) : (
                            <td>{`hola2`} </td>
                        )}
                        */}
                         
                         
                            {getMostraCategorias(categoria_id)}          
                                                                                           
                            <td>{nombre} {id}</td>
                            <td>{descripcion}</td>
                            <td>{precio}</td>
                            <td>
                                <Link className= "btn btn-info me-2" to ={`/editarproducto/${id}`}> Editar </Link>
                            </td>
                            <td>
                                <button className = "btn btn-danger"                                 
                                onClick={() => {verificarEliminar(id)}}
                                > Eliminar </button>
                            </td>

                            
                               

                        </tr>

                    ))}


                </tbody>


            </table>
        </div>
    )
}
