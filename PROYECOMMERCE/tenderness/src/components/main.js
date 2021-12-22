
import { useState, useEffect } from "react";

import Producto from "./Producto";




//<Main lista={listaPlatillos} />
//llamo a la f Main
//Main({lista})

import HeaderCarousel from "./HeaderCarousel";




export default function Main( {miprop}) {
   
  
    //cuando utilizemos hooks tienen que estar dentro del componente


       
    
    return (

        

        <>
          
<div>

</div>  
                    <div className="contenedor">
                    
                   <div className="principal">
                   
                  {  <main>
            
                          {miprop.map((item, i) => (
                                 <Producto key={i} item={item} />
                        ))}
                    </main>}
                   
                    </div>
             
                    </div>
            
                
        </>  
    );              
}
