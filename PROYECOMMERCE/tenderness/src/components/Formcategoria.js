

import { useState, useEffect, useRef } from "react";
import { obtenerCategorias  } from "../services/categoriasServices";
import { Link } from "react-router-dom"


export default function Formcategoria({ value, actualizarInput, manejarSubmit, manejarImagen, valueotro }) {

    

const [categorias, setCategorias] = useState([])  

const [imagen, setImagen] = useState(null);

const [cargadoimg, setCargadoImg] = useState(false);


const getCategorias = async() =>{

    try {
        
        const categoriaobtenidas  = await obtenerCategorias()

        setCategorias (categoriaobtenidas); // despues que obtenemos los datos actualizamos el estado

      
    } catch (error) {
        console.log(error);
        
    }
};


  
  useEffect(() =>{
      getCategorias();
  },[]);

  const inputfile  = useRef();

  
  
  function VerImagen  (e)  {

    if ( e.target.files && e.target.files[0]){ 
    
    
        let reader = new FileReader();
    
    reader.onload = function(e) {
        setImagen(e.target.result);
        
        setCargadoImg(true)
    }   
    reader.readAsDataURL(e.target.files[0])
  
    
 }
}
   

  
    return (
        
        
             
        
        
        <div>
               
               
            {/*console.log({valueotro})*/}
            
            <h1> MANTENIMIENTO DE CATEGORIAS</h1>
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
                       Imagen
                     </label> 
                     <input type="file" className = "cajastextonombre" ref = {inputfile}  onChange = {
                         (e) => {manejarImagen(e) }} />                                                                                    
                                             
                 </div>
                 
                     <div className = "mb-3 portada">
                         
                             <img src = {valueotro} className ="imagenportada"/>
                        </div>  
                                  
                 <button className = "btn btn-primary me-2 labelalinear" type = "submit">GUARDAR</button>
                 
                      <Link to ="/ListarCategoria" className = "btn btn-primary">
                         LISTAR - ACTUALIZAR - ELIMINAR  CATEGORIAS
                    </Link>
                            
            </form>

                   
           
                        
                        
                        
                               
                                </div>
    )
}
