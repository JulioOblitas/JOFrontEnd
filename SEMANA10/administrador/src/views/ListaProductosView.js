
import { connectStorageEmulator } from "@firebase/storage";
import { async } from "@firebase/util";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import Swal from "sweetalert2";
import { obtenerProductos , eliminarProducto, eliminarProducto2 } from "../services/productosServices";

let  newTareas  ; 
export default function ListaProductosView() {
    const [productos, setProductos] = useState([])  
    
    
        
    const ClickCheckbox  = (e,id) => {
        newTareas = [...productos]    
        const task = e.target.checked
        const tarea = newTareas.find((tarea)=> tarea.id === id );
        tarea.estado = task;

        setProductos(newTareas);
    };
    
    
    
    const ContarElementos = (id) =>{        

      const newTareas = productos.filter((tarea)=> tarea.estado)

     
      {
        newTareas.forEach(element  => {
            
            console.log(element.id);
              
          });
      }
      setProductos(newTareas);

        
        
       
     } 

    
    const getProductos = async() =>{

        try {
            
            const productosobtenidos  = await obtenerProductos()

            setProductos (productosobtenidos); // despues que obtenemos los datos actualizamos el estado

            

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
    
   
    
    
   
           /* const newProductos = [...productos]
            const producto = newProductos.find((producto)=> producto.id === id );
            producto.completed = !tarea.completed;
        
             setTareas(newTareas)*/
        
        



    
    // para que carge el listado
    useEffect(() =>{
        getProductos();
    },[]);
    
   

    return (
        <div>
            <h1>Productos Registrados</h1>

            <Link to ="/crearProducto" className = "btn btn-primary">
                Crear Producto
            </Link>
            
            <button className = "btn btn-danger" onClick={() => ContarElementos()}> Eliminar Seleccionados</button>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Acciones</th>

                    </tr>

                </thead>
                <tbody>
                   
                    
                    {productos.map(({nombre,descripcion,precio,id,estado}, i) => (
                        
                        <tr key ={i}>
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

                            

                            <td>
                            
                                <input key= {id} className = "checkelim"  type = "checkbox" defaultChecked = {estado} onChange = {(e) =>  ClickCheckbox (e,id)}  /> 
                                
                                
                                    
                            </td>
                              
                                    

                        </tr>

                    ))}


                </tbody>


            </table>
        </div>
    )
}
