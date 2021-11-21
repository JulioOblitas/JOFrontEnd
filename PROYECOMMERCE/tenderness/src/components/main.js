
import Producto from "./producto";
import Header from "./Header";
import NavSide from "./navside";
import Footer from "./footer"

//<Main lista={listaPlatillos} />
//llamo a la f Main
//Main({lista})


    

export default function Main({ lista, anadirACarrito }) {
    return (
        <>
             <Header />                
                <NavSide /> 
              
                        <div className="contenedor">
                        <div className="aplicacion">
                    <div className="principal">
        
                    <main>
            {lista.map((item, i) => (
                <Producto key={i} item={item} anadirACarrito={anadirACarrito} />
            ))}
         </main>
                </div>
                </div>
                </div>
               
                <Footer />     
                
        </>  
    );              
}
