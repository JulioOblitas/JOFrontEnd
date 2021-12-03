import axios from "axios"
import  {storage} from "../config/firebase";

const URL = `${process.env.REACT_APP_API}categorias`


const crearCategoria  = async (nuevaCategoria) =>{
 try {

    const headers  ={
        "Content-Type" : "application/json"
    }
    const  {data} = await axios.post(URL,nuevaCategoria,{headers});
      return data 
 } catch (error) {
     throw error;
 }
}

const eliminarCategoria  = async (id) => {
    try {                
         await axios.delete(`${URL}/${id}`);
            return "Categoria Eliminada";
    } catch (error) {
        throw error;
    }
}

const editarCategoriaPorId  = async (id, objProducto )  => {
    try {
        const headers = {
            "Content-Type": "application/json"        
        }
        
         await axios.put(`${URL}/${id}`, objProducto, { headers })
            return;
    } catch (error) {
        throw error
    }
}
    const obtenerCategorias = async () => {
        try {
            
            const  {data} = await axios.get(URL);
            return data;
        } catch (error) {
            throw error;
        }
    }

    const obtenerCategoriaPorId  = async (id) => {
        try {
            
            const {data} = await axios.get(`${URL}/${id}`)
                return data;
        } catch (error) {
            throw error
        }
    }

    const subirImagen = (imagen) =>{

        console.log(imagen);
        return new Promise ((resolve,reject) => {
        let refStorage  = storage.ref(`foto/${imagen.name}`)
        let tareaSubir  = refStorage.put(imagen)
            
        //uso callback pq recomienda reactjs y por ende retorna promesas
        
        tareaSubir.on(
            "state_changed", 
            ()=> {},
             (error) => {
                 reject(error);
                },
            () => {
            tareaSubir.snapshot.ref.getDownloadURL().then((urlImagen) => {
                resolve(urlImagen);
            });
        }
    );
    });
};
export { crearCategoria, obtenerCategorias , eliminarCategoria,obtenerCategoriaPorId,editarCategoriaPorId, subirImagen  };