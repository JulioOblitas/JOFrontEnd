

import imgLogoEmpresa from "../imagenes/logoemp.png"
import imgLogoLibroReclam from "../imagenes/libroreclam.png"
import imgLogoUbicacion from "../imagenes/ubicacion.jpg"


export default function footer() {
    return (

        <div className = "contenedorpie">
            <div>
                
                <br/>
                <p>Contacto</p>
                
                <p>Corporacion LUNA SAC</p>                
                

                <p>Av Jose  Galvez  880 LIMA - LIMA - SURCO </p>
            
                <p>Email: cloud@viasoluciones.com 
                   Telefono: 675-0000                   
                </p>
            </div>

            <div className= "contenedorimagenpie">
                
                <img className = "imgfooter imglogoefecto"  src= {imgLogoEmpresa}  alt=""/>
                <img  className = "imgreclamacion"  src= {imgLogoLibroReclam}  alt=""/>
                
            
            </div>                   
            

            
            
            
        </div>
    )
}
