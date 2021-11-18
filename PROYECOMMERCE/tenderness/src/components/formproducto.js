
import  {  useRef  } from "react";
import CrearCategoriasView from "../views/CrearCategoriasView";




export default function FormProducto({ value, actualizarInput, manejarSubmit, manejarImagen, categorias }) {


    

    const inputfile  = useRef();
    
    return (
        <div>
            <form onSubmit = {(e) => {manejarSubmit(e)}}>
                 <div className = "mb-3">
                     <label className = "form-label">                         
                       Nombre de producto
                     </label>
                     <input type="text" className = "form-control" name = "nombre" value = {value.nombre} onChange ={(e)=> {actualizarInput(e)}}
                      />
                 </div>

                 <div className = "mb-3">
                     <label className = "form-label">                         
                       Descripcion de producto
                     </label>
                     <input type="text" className = "form-control" name = "descripcion" value = {value.descripcion} onChange ={(e)=> {actualizarInput(e)}}
                      />
                 </div>
                 <div className = "mb-3">
                     <label className = "form-label">                         
                       Precio producto
                     </label> 
                     <input type="number" className = "form-control" name = "precio" value = {value.precio} onChange ={(e)=> {actualizarInput(e)}}
                      />
                 </div>

                 <div className = "mb-3">
                     <label className = "form-label">                         
                       Imagen
                     </label> 
                     <input type="file" className = "form-control" ref = {inputfile} onChange ={(e) =>{manejarImagen(e)}}  />
                 </div>

                 <div className = "mb-3">
                     <label className = "form-label">                         
                       Categoria
                     </label> 

                     <select value = {value.categoria_id} className = "form-select" name = "categoria_id" onChange = {(e) =>{actualizarInput(e)}} >

                       
                        {categorias.map((cat, i) => (
                          <option value={cat.id} key={i}>
                              {cat.nombre}
                          </option>
                      ))}
                       


                     </select>
                     
                     
                 </div>


                 <button className = "btn btn-primary me-2" type = "submit">Guardar</button>
                 
                 
                  
                 
            </form>
        </div>
    )
}
