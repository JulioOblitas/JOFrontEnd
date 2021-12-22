import { useState,  useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { crearProducto, subirImagen } from "../services/productosServices";
import FormProducto from "../components/Formproducto"
import Cargando from "../components/Cargando";
import Swal from "sweetalert2";
import { obtenerCategorias } from "../services/categoriasServices";



let imagen;  //variable global no definida
let imageUrl;
export default function CrearProductosView() {
    const [valueotro, SetValueotro] = useState(null);
    const [value, SetValue] = useState( {
        nombre : '',
        descripcion : '',
        precio : 0,
        categoria_id : 1
    });

    const [categorias, SetCategorias] = useState([]);
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
    await crearProducto({...value, imagen:urlImagenSubida});
    SetLoading(false);
    await Swal.fire({
        icon:'success',
        title:'Aviso al usuario',
        text: 'Producto Creado',
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
        console.log(e.target.files[0]);
        imagen = e.target.files[0];

        
        imageUrl = URL.createObjectURL(imagen)
        SetValueotro (imageUrl)  //cogiendo el estado de lvalue y spred operatr  
                
    };

    
    useEffect(()=>{

        const getCategorias = async() =>{

            try {
                const catObtenidas = await obtenerCategorias();
                SetCategorias(catObtenidas);
                
                
            } catch (error) {
                console.log(error);
            }
        };
        getCategorias();
    

    }, []);
    

    return (
        
        <>
            {loading === true ? (
                <Cargando />
            ) : (
                <FormProducto value = {value} actualizarInput = {actualizarInput} manejarSubmit = {manejarSubmit}  manejarImagen = {manejarImagen} categorias ={categorias} valueotro ={valueotro} />                       
            )}          
        </>
    );
}
