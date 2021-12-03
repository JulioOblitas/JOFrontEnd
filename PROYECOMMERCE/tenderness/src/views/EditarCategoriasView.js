
import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import  {  obtenerCategorias, obtenerCategoriaPorId, editarCategoriaPorId, subirImagen }    from "../services/categoriasServices";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import Formcategoria from "../components/Formcategoria";
          
let imagen;
let imageUrl;
export default function EditarCategoriasView() {

    const [value, SetValue] = useState( {
        nombre : '',
        descripcion : '',
        id : 1
    });

    const [valueotro, SetValueotro] = useState(null)
    
    
    const {id}  = useParams();
    const [categorias, SetCategorias] = useState([]);

    
    const navigate  = useNavigate();


    const getCategorias = async () =>{
        try {
            const catObtenido = await obtenerCategoriaPorId (id);

            SetValue(catObtenido);

            //*console.log(prodObtenido);
        } catch (error) {
            console.log(error)
        }
    };

    const manejarImagen = (e) => {
        e.preventDefault();
        
        imagen = e.target.files[0];
        imageUrl = URL.createObjectURL(imagen)
        SetValueotro (imageUrl)  
        
    };


    const manejarSubmit = async (e) =>{
        e.preventDefault(); 

        

         try {

             if (typeof imagen!=="undefined") {
                 
                    const urlImagenSubida = await subirImagen(imagen);
                    await editarCategoriaPorId( id, {...value, imagen:urlImagenSubida});
             } else{
                    await editarCategoriaPorId( id,value);
             }
             
             await Swal.fire ({
                 icon : 'success',
                 title : 'Exito',
                 text : 'Categoria  Editado Exitosamente',
             })
             navigate("/");
             
        } catch (error) {
            console.log(error);
        }

    };

    const actualizarInput  = (e) =>{
        SetValue ({...value,[e.target.name]:e.target.value});
    };
    
    
    useEffect(() =>{
        getCategorias();
    },[]);

    
  {/*  useEffect(()=>{

        const getCategorias = async() =>{

            try {
                const catObtenidas = await obtenerCategorias();
                SetCategorias(catObtenidas);
                
                
            } catch (error) {
                console.log(error);
            }
        };
        getCategorias();
    

    }, []);*/}


    //console.log (params);

    return (
        <div>
            <Formcategoria   value ={value} actualizarInput = {actualizarInput}  manejarSubmit = {manejarSubmit} manejarImagen = {manejarImagen}  valueotro = {valueotro} />
        </div>
    )
}
