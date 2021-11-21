import axios from  "axios";

const  URL  = `${process.env.REACT_APP_API}categorias`

const ObtenerCategorias = async () =>{
    try {
        
        let {data} = await axios.get(URL);
        return data;
    } catch (error) {
        throw error;
    }   

    }
    export {ObtenerCategorias};