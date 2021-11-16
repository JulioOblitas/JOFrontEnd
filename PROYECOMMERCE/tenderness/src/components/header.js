import React from 'react'

import imgEmail from "../imagenes/email.png"
import imgTelefono from "../imagenes/telefono.png"
import imgFacebook from "../imagenes/facebook.png"
import imgInstagram from "../imagenes/instagram.png"
import imgLogoEmpresa from "../imagenes/imglogoemp.png"
import imgLogoBuscar from "../imagenes/buscando.png"

export default function header() {
    return (
        <header>
         <div className = "contenedorheader" >

        
            <div className = "Email">
                <img  className = "imglogocabecera"  src= {imgEmail}  alt=""/>
                <h6 className = "h6Email">EMAIL</h6>
            </div>

            <div className = "Telefono">
                <img  className = "imglogocabecera"  src= {imgTelefono}  alt=""/>
            
                <h6 className = "h6Telefono">934586160</h6>
            </div>
        
            <div className = "RedesSociales">
                <h6>SIGUENOS EN</h6>
                <img  className = "imglogocabecera"  src= {imgFacebook}  alt=""/>
                <img  className = "imglogocabecera"  src= {imgInstagram}  alt=""/>
            </div>
      
            </div>

            <div className= "contenedor2" >
                <div className = "Logo">
                    <img  className = "imglogoempresa"  src= {imgLogoEmpresa}  alt=""/>                        
                </div>

                <div className = "Buscar">
                    <input className = "txtbuscar" type="text" placeholder = "Tenderness siempre contigo.. buscalo" />
                    <img  className = "imgbuscar"  src= {imgLogoBuscar}  alt=""/>                        
                    <button className = "btnacceso">ACCESO</button>
                </div>
            </div>
           

        </header>
    )
}
