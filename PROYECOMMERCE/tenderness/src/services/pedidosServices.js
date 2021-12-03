import axios from "axios"


const URL = `${process.env.REACT_APP_API}ventas`

const eliminarPedidos  = async (id) => {
    try {                
         await axios.delete(`${URL}/${id}`);
            return "Pedido  Eliminado";
    } catch (error) {
        throw error;
    }
}

    const obtenerPedidos = async () => {
        try {
            
            const  {data} = await axios.get(URL);
            return data;
        } catch (error) {
            throw error;
        }
    }

    const obtenerPedidosPorId  = async (id) => {
        try {
            
            const {data} = await axios.get(`${URL}/${id}`)
                return data;
        } catch (error) {
            throw error
        }
    }

 
export {obtenerPedidos ,obtenerPedidosPorId,eliminarPedidos   };