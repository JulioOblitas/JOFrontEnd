

import { useState, useEffect, useRef } from "react";
import { obtenerProductos  } from "../services/productosServices";
import { Link } from "react-router-dom"


export default function FormProducto({ value, actualizarInput, manejarSubmit, manejarImagen, categorias }) {

  const [productos, setProductos] = useState([])  

  const getProductos = async() =>{

    try {
        
        const productosobtenidos  = await obtenerProductos()

        setProductos (productosobtenidos); // despues que obtenemos los datos actualizamos el estado

        

    } catch (error) {
        console.log(error);
        
    }
};
  
  useEffect(() =>{
      getProductos();
  },[]);

  const inputfile  = useRef();
    
    return (
        <div>
            <h1> MANTENIMIENTO DE PRODUCTOS</h1>
            <br />

            <form onSubmit = {(e) => {manejarSubmit(e)}}>
                 <div className = "mb-3">
                 <label className = "form-label labelalinear">
                    Nombre
                </label>
                   
                <input type="text" className = "cajastextonombre" name = "nombre" value = {value.nombre} onChange ={(e)=> {actualizarInput(e)}}/>
                 </div>

                 <div className = "mb-3">
                     
                 <label className = "form-label labelalinear">
                    Descripcion
                </label>
                     <input type="text" className = "cajastextodescripcion"  name = "descripcion" value = {value.descripcion} onChange ={(e)=> {actualizarInput(e)}}
                      />
                 </div>
                 <div className = "mb-3">
                 <label className = "form-label labelalinear">
                    Precio
                </label>
                     <input  type="number" className = "cajastextoprecio" name = "precio" value = {value.precio} onChange ={(e)=> {actualizarInput(e)}}
                      />
                 </div>

                 <div className = "mb-3">
                     <label className = "form-label labelalinear">                         
                       Imagen
                     </label> 
                     <input type="file" className = "cajastextonombre" ref = {inputfile} onChange ={(e) => {manejarImagen(e)} }  />
                 </div>

                 <div className = "mb-3">
                     <label className = "form-label labelalinear">                         
                       Categoria
                     </label> 

                     <select value = {value.categoria_id} className = "cajastextocategoria" name = "categoria_id" onChange = {(e) =>{actualizarInput(e)}} >

                       
                        {categorias.map((cat, i) => (
                          <option value={cat.id} key={i}>
                              {cat.nombre}
                          </option>
                      ))}
                       


                     </select>
                     
                     
                 </div>


                 <button className = "btn btn-primary me-2 labelalinear" type = "submit">GUARDAR</button>
                 
                      <Link to ="/ListarProducto" className = "btn btn-primary">
                         LISTAR - ACTUALIZAR - ELIMINAR  PRODUCTOS
                        </Link>
           
                 
            </form>
        </div>
    )
}
