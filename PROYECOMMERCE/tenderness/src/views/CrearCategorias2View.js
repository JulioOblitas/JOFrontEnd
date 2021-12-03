import { useState,  useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { crearCategoria, subirImagen } from "../services/categoriasServices";
import Formcategoria from "../components/Formcategoria"
import Cargando from "../components/Cargando";
import Swal from "sweetalert2";





let imagen;  //variable global no definida

let imageUrl;
export default function CrearCategorias2View() {
    
    const [value, SetValue] = useState( {
        nombre : '',
        descripcion : '',
        id : 1,        
    });
    const [valueotro, SetValueotro] = useState(null);
    
    const [loading, SetLoading] = useState(false);

    const navigate  = useNavigate();

const actualizarInput = (e) =>{
    SetValue ({...value,[e.target.name]:e.target.value})  //cogiendo el estado de lvalue y spred operatr
    
};  



const manejarSubmit = async(e) =>{
  e.preventDefault();

  try {
    
    
    SetLoading(true);
    const urlImagenSubida = await  subirImagen(imagen);
    await crearCategoria({...value, imagen:urlImagenSubida});
    SetLoading(false);
    await Swal.fire({
        icon:'success',
        title:'exito',
        text: 'Categoria Creado',
        showConfirmButton:false,
        timer: 2000,

    })
    navigate("/");
  } catch (error) {
        console.log(error);
  }
  
  
  //console.log("submit ejecutaod")
};

    const manejarImagen = (e) => {
        e.preventDefault();
        
        imagen = e.target.files[0];
        imageUrl = URL.createObjectURL(imagen)
        SetValueotro (imageUrl)  //cogiendo el estado de lvalue y spred operatr  
                
          

        
        //console.log(e.target.files[0]);
        
     
    };
    
    
    useEffect(()=>{
    }, []);
    

    return (
        
        <>
        
        
            {loading === true ? (
                <Cargando />
            ) : (
                <Formcategoria value = {value} actualizarInput = {actualizarInput} manejarSubmit = {manejarSubmit}  manejarImagen = {manejarImagen} valueotro = {valueotro} />                       
            )}          
        </>
    );
}
