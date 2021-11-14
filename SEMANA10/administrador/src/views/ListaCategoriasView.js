import {  useState, useEffect  } from "react";
import { obtenerCategorias } from "../services/categoriasServices";
import Cargando from "../components/Cargando";
import { Link } from "react-router-dom";


export default function ListaCategoriasView() {
    const [categorias,SetCategorias] = useState([])
    const [loading,SetLoading] = useState(false) 

    const getCategorias = async() =>{

        try {
            SetLoading(true)
            const categoriasObtenidas = await obtenerCategorias();
            SetCategorias(categoriasObtenidas);
            SetLoading(false);    
        } catch (error) {
            console.log(error);
        }

        
    };

    useEffect(() =>{
        getCategorias();
    },[]);


    return (
        <>
            {loading ? (
                <Cargando />
            ) : (
                <>
                 <h1 className = "mb-3">Lista categorias</h1>

                 <Link  to ="/crearcategoria"
                    className ="btn - btn-primary mb-2">
                        Crear Categoria
                 </Link>
                 <table className = "table"> 

                 <thead>
                     <tr>
                         <th>Nombre Categoria</th>                         
                         <th>Descripcion </th>
                     </tr>

                 </thead>
                 <tbody>
                     {
                         categorias.map((cat,i) =>(
                             <tr key={i}>
                                 <td>{cat.nombre} </td>
                                 <td>{cat.descripcion} </td>
                             </tr>
                         ))
                     }

                 </tbody>
                 </table>
            </> 
                
            )}
            </>
    
    );
}
