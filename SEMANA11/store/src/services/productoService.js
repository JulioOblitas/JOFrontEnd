import axios from  "axios";

const  URL  = `${process.env.REACT_APP_API}productos`

const ObtenerProductos = async (busqueda = "") =>{
try {
    
    let {data} = await axios.get(`{URL}?search = ${busqueda} `)
    return data;
} catch (error) {
    throw error;
}
}


const ObtenerProductosPorId = async (id) =>{
    try {
        
        let {data} = await axios.get(`${URL}/${id} `)
        return data;
    } catch (error) {
        throw error;
    }
    }

const ObtenerProductosPorCat = async (idCategoria) =>{
    try {
        
        let {data} = await axios.get(`${URL}?categoria_id=${idCategoria}`)
        return data;
    } catch (error) {
        throw error;
    }
    }
    

    const ObtenerProductosPorPagina = async (pagina =1, limite = 9 ) =>{
        try {
            
            let { data } = await axios.get(`${URL}?page=${pagina}&limit=${limite}`);
            
            return data;
        } catch (error) {
            throw error;
        }
        }

        
    
    export {ObtenerProductos,ObtenerProductosPorId, ObtenerProductosPorCat,ObtenerProductosPorPagina}
    