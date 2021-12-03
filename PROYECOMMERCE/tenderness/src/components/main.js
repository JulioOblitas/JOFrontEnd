
import { useState, useEffect } from "react";

import Producto from "./producto";


//<Main lista={listaPlatillos} />
//llamo a la f Main
//Main({lista})




export default function Main( {miprop}) {
   
  
    //cuando utilizemos hooks tienen que estar dentro del componente


       
    
    return (

        

        <>
                       
                    <div className="contenedor">
                   
                        <div className="principal">
        
                    <main>
            
                          {miprop.map((item, i) => (
                        <Producto key={i} item={item} />
                        ))}
                    </main>
                   
                    </div>
             
                    </div>
                    < div className="d-flex justify-content-center">
              {/*  <button
                    className="btn btn-primary"
                    onClick={() => {
                        setPagina(pagina + 1);
                    }}
                >
                    Ver más...
                </button>*/}
            </div>
               
                
                
        </>  
    );              
}
