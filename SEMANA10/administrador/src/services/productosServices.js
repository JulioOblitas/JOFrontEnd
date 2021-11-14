import axios from "axios";
import  {storage} from "../config/firebase";

const URL = `${process.env.REACT_APP_API}productos`;

const obtenerProductos = async  () =>{


    try {
        
        const {data }  = await axios.get(URL);
        
        return data;
    } catch (error) {
        throw error;
        
    }

};

const crearProducto = async (nuevoProducto) =>{

    try {
        
        const headers ={
            "Content-Type": "application/json"        
        }
        const {data} = await axios.post(URL,nuevoProducto,{headers})
        return data;

    } catch (error) {
        throw error;
    }
}

const obtenerProductoPorId  = async (id) => {
    try {
        
        const {data} = await axios.get(`${URL}/${id}`)
            return data;
    } catch (error) {
        throw error
    }
}


const editarProductoPorId  = async (id, objProducto )  => {
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

const eliminarProducto  = async (id) => {
    try {                
         await axios.delete(`${URL}/${id}`);
            return "producto eliminado";
    } catch (error) {
        throw error;
    }
}

const eliminarProducto2  = async (id) => {
    try {
        
        console.log("eliminado")
         
         await axios.delete(`${URL}/${id}`);
         return "producto eliminado";
            
    } catch (error) {
        throw error;
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

export { obtenerProductos, crearProducto, obtenerProductoPorId, editarProductoPorId, eliminarProducto, eliminarProducto2 , subirImagen};
         