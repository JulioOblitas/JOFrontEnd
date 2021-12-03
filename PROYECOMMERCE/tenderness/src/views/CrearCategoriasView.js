import { useRef } from "react";
import { subirImagen} from "../services/productosServices"
import { crearCategoria } from "../services/categoriasServices"
import { useNavigate } from "react-router";
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
let imagen;



export default function CrearCategoriasView() {


    const refNombre  = useRef()
    const refDescripcion  = useRef()
    const navigate  = useNavigate();

    const manejarSubmit = async (e) => {
        e.preventDefault();
        let nuevaCategoria  ={
            nombre: refNombre.current.value, 
            descripcion: refDescripcion.current.value, 
        };

        try {
            const urlImagenSubida = await subirImagen(imagen)
            const categoriaCreada = await crearCategoria ({...nuevaCategoria,imagen:urlImagenSubida});
            console.log(categoriaCreada);

            await Swal.fire({
                icon:"success",
                title:"Categoria Creada",
            });

                navigate("/listacategorias");



        } catch (error) {
            console.log(error)
        }
            //console.log(nuevaCategoria);
    }

    const manejarImagen = (e) =>{
  

    e.preventDefault();

    imagen = e.target.files[0];

    
    }

    return (
        <div>
            <h1 className = "mb-3">CATEGORIAS</h1>
            
            <form 
             onSubmit ={(e)=>{manejarSubmit(e)}} >
                
                <div className = "mb-3">
                    <label className= "form-label">Nombre Categoria</label>
                    <input type = "text" className= "form-control" ref = {refNombre}/> 
                    
                
                </div>

                <div className = "mb-3">
                    <label className= "form-label">Descripcion Categoria</label>
                    <input type = "text" className= "form-control" ref = {refDescripcion}/>
                </div>

                <div className = "mb-3">
                    <label className= "form-label">Imagen</label>
                    <input type = "file" className= "form-control"  onChange= {(e) => {manejarImagen(e)}}/>
                    
                </div>

                

                <button className = "btn btn-primary" type = "submit"> Guardar </button>
                         <Link to ="/ListarCategoria" className = "btn btn-primary">
                         LISTAR - ACTUALIZAR - ELIMINAR  CATEGORIAS
                        </Link>
           
            </form>
        </div>
    );
}
