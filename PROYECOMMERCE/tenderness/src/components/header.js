
import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navbar, Container, Nav, NavLink, NavDropdown } from "react-bootstrap";
import imgEmail from "../imagenes/email.png"
import imgTelefono from "../imagenes/telefono.png"
import imgFacebook from "../imagenes/facebook.png"
import imgInstagram from "../imagenes/instagram.png"
import imgLogoEmpresa from "../imagenes/logoemp.png"
import imgLogoBuscar from "../imagenes/buscando.png"
import { Link } from "react-router-dom"



export default function Header() {
    const { user, signOut } = useContext(AuthContext);
    const { signIn } = useContext(AuthContext);

   
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
                <h6>SIGUENOS</h6>
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
                    
                   {/* <button className = "btnacceso" onClick={signIn} >ACCESO</button>**/}
                    
                 {/*   <Link to ="/crearProducto" className = "btn btn-primary btnacceso" onClick={signIn}  >
                        ACCESO
                    </Link>*/}
                     {user ? (
                            <NavDropdown
                                title={
                                    <div className="d-inline">
                                        <img
                                            src={user.photoURL}
                                            className="me-2"
                                            alt="avatar"
                                            style={{ borderRadius: "50%", width: "30px" }}
                                        />
                                        <span>{user.displayName}</span>
                                    </div>
                                }
                            >
                                <NavDropdown.Item>OPERACIONES</NavDropdown.Item>
                                <NavDropdown.Item onClick={signOut}>SALIR</NavDropdown.Item>
                                
                            </NavDropdown>
                        ) : (
                            <Link className="nav-link" to="/" onClick = {signIn} >
                                Ingresar
                            </Link>
                        )}
                
                </div>
            </div>
           

        </header>
    )
}
