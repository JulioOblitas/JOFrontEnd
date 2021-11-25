import { useState, useEffect } from "react";
import CategoriaBox from "../components/CategoriaBox";
import { ObtenerCategorias } from "../services/categoriaService";


export default function GroupCategoria() {

    const [categorias,setCategorias] = useState([]);


const getCategorias = async () =>{
    try {
        
        const catObtenidas = await  ObtenerCategorias();
        setCategorias(catObtenidas);
    } catch (error) {
        console.log(error);
        
    }
};

useEffect(() => {
    getCategorias();
},[]);


return (
    <div className="container">
        <div className="row">
            {categorias.map((cat, i) => (
                <div className="col-12 col-md-6 mb-4" key={i}>
                
                    
                    <CategoriaBox categoria={cat} />
                    
                </div>
            ))}
        </div>
    </div>
);
}
