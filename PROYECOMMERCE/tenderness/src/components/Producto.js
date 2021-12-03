import { Link } from "react-router-dom";

export default function Producto({ item } ) {
    //Como item es un obj que contiene precio, id, nombre, descripcion, url_imagen
    const { id, nombre, descripcion, precio, imagen } = item;


    return (
        

   
       <div className="producto">
       <img className="img-top" src={imagen} alt={nombre} />
       <div className="text-bottom">
         
            <p className = "colorletra" >{descripcion}</p>
            <div className="prod-info">
                <p className = "colorletra" >S/ {(precio * 1).toFixed(2)}</p>
                <Link className="card mb-3" to={`/detalleproducto/${id}`}>
                <button className="btn btn-primary ">
                <i class="fas fa-cart-plus"></i>
                   
                </button>
                </Link>
        
       </div>
       </div>
       </div>
   
    
    );
}



