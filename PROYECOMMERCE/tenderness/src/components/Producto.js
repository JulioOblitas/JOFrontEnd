import { Link } from "react-router-dom";

export default function Producto({ item } ) {
    //Como item es un obj que contiene precio, id, nombre, descripcion, url_imagen
    const { id, nombre, descripcion, precio, imagen } = item;


    return (
        

   
       <div className="producto">
           
       <Link className="card mb-3" to={`/detalleproducto/${id}`}>
            <img className="card-img-top" src={imagen} alt={nombre} />
                 <div className="card-body text-bottom">    
         
                        <p className = "card-title" >{descripcion}</p>                    
                        <p className = "card-title" >S/ {(precio * 1).toFixed(2)}</p>
                        <i className="fas fa-cart-plus"></i>
                    
            </div>     
        </Link>
        
         </div>       
        
        
        
       
      
       
    
    
    );
}



