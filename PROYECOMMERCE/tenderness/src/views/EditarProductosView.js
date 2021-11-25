
import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormProducto from "../components/Formproducto";
import  { obtenerProductoPorId, editarProductoPorId, subirImagen }    from "../services/productosServices";
import { useNavigate } from "react-router";
import { obtenerCategorias } from "../services/categoriasServices";
import Swal from "sweetalert2";
          
let imagen;
export default function EditarProductosView() {

    const [value, SetValue] = useState( {
        nombre : '',
        descripcion : '',
        precio : 0,
        categoria_id : 1
    });
    
    const {id}  = useParams();

    const [categorias, SetCategorias] = useState([]);
    //const [loading, SetLoading] = useState(false);
    
    const navigate  = useNavigate();


    const getProducto = async () =>{
        try {
            const prodObtenido = await obtenerProductoPorId (id);

            SetValue(prodObtenido);

            //*console.log(prodObtenido);
        } catch (error) {
            console.log(error)
        }
    };

    const manejarSubmit = async (e) =>{
        e.preventDefault(); 

        

         try {

             if (typeof imagen!=="undefined") {
                 
                    const urlImagenSubida = await subirImagen(imagen);
                    await editarProductoPorId( id, {...value, imagen:urlImagenSubida});
             } else{
                    await editarProductoPorId( id,value);
             }
             
             await Swal.fire ({
                 icon : 'success',
                 title : 'Exito',
                 text : 'Producto Editado Exitosamente',
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
        getProducto();
    },[]);

    const manejarImagen = (e) => {
        e.preventDefault();
        console.log(e.target.files[0]);
        imagen = e.target.files[0];
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


    //console.log (params);

    return (
        <div>
            <FormProducto value ={value} actualizarInput = {actualizarInput}  manejarSubmit = {manejarSubmit} manejarImagen = {manejarImagen} categorias = {categorias} />
        </div>
    )
}
