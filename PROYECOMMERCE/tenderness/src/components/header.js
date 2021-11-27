
import { useContext, useRef , useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

import { Navbar, Container, Nav, NavLink, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import imgEmail from "../imagenes/email.png"
import imgTelefono from "../imagenes/telefono.png"
import imgFacebook from "../imagenes/facebook.png"
import imgInstagram from "../imagenes/instagram.png"
import imgLogoEmpresa from "../imagenes/logoemp.png"
import imgLogoBuscar from "../imagenes/buscando.png"


import { Link, useNavigate } from "react-router-dom";

import CheckOutView from  "../views/ChekOutView"
import PrivateRoute from  "../components/PrivateRoute"
import { alertTitleClasses, getAlertUtilityClass } from "../../../../SEMANA11/store/node_modules/@mui/material";
import CrearProductosView from "../views/CrearProductosView";
import { obtenerCategorias } from "../services/categoriasServices";
import Main from "../components/main";




import { obtenerProductos } from "../services/productosServices";


export default function Header() {

    const { user, signOut } = useContext(AuthContext);
    const { signIn } = useContext(AuthContext);
    
    const [buscar, setBuscar] = useState('');  
   
    const [categorias, setCategorias] = useState([]);
    const [categoriasOriginal, setCategoriasOriginal] = useState([]); //nunca lo modifico
    const [productos, setProductos] = useState([]);
    const [productosOriginal,  setProductosOriginal] = useState([]); //nunca lo modifico
    
   
    
    const getData = async () => {
        try {
            
            const catObtenidas = await obtenerCategorias();
            const prodObtenidos = await obtenerProductos();
            setCategorias(catObtenidas);            
            setCategoriasOriginal(catObtenidas);
            setProductos(prodObtenidos)
            setProductosOriginal(prodObtenidos);
        } catch (error) {
            console.log(error); //Swal icon:"error"
        }
    };

    const BuscarPorCategoria  =  () =>{
        
       let idcat; 
        const catFiltrados = categoriasOriginal.filter((cat) => cat.nombre === buscar);
        setCategorias(catFiltrados); 
        { catFiltrados.map((cat, i) => (                
            idcat =  cat.id
        ))}

        const prodFiltrados = productosOriginal.filter((prod) => prod.categoria_id == idcat);
        setProductos(prodFiltrados); 
        { prodFiltrados.map((prod, i) => (                
            idcat =  prod.nombre
        ))}
            
    }
    
    const BuscarPorCategoriaNavBar  =  (idcatnavbar) =>{
        
        
        const prodFiltrados = productosOriginal.filter((prod) => prod.categoria_id == idcatnavbar);
         setProductos(prodFiltrados); 
             
     }
     const navigate = useNavigate();
const manejarBusqueda = () => {

       
    //*navigate(`/productosfiltros/${refBuscar.current.value}`);
    navigate(`/operaciones`);
};

 

    useEffect(() => {
        getData();
    }, []);

    return (
       <>    
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
                    <input className = "txtbuscar" value = {buscar} onChange={e => setBuscar(e.target.value)}  type="text" placeholder = "Tenderness siempre contigo.. buscalo" />
                   
                   <a href = "#"> <img  className = "imgbuscar"  onClick={() => { BuscarPorCategoria()}} src= {imgLogoBuscar}  alt=""/>  </a>
                   
                   {/*<a href = "#"> <img  className = "imgbuscar"   onClick={() => { filtrarPorCategoria(cat.id);}} src= {imgLogoBuscar}  alt=""/>  </a>*/}
                   
                   {/* <button className = "btnacceso" onClick={signIn} >ACCESO</button>**/}
                    
                   {/* <Link to ="/crearProducto" className = "btn btn-primary btnacceso"   >
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
                                {/*<Link to = "/crearProducto" className = "btn btn-primary ">
                                    OPERACIONES
                                </Link>*/}
                                
                                
                                   {/* <Link to = "/operaciones" className = "btn btn-primary btnoperacion">*/}

                                <Link to = "/operaciones"   className = "btn btn-primary btnoperacion">
                                   
                                   {/* <NavDropdown.Item>  
                                    </NavDropdown.Item>*/}
                                        OPERACIONES    
                                    </Link> 
                                
                                
                                <NavDropdown.Item   onClick = {signOut} >SALIR</NavDropdown.Item>
                                
                            </NavDropdown>
                        ) : (
                            <Link className="nav-link" to="/" onClick = {signIn} >
                                Ingresar
                            </Link>
                        )}
                
                </div>

            </div>
          
            

        </header>
        <Navbar bg="primary" variant="dark">
    <Container>
    
                
    <Navbar.Brand href="#home" onClick= {() =>{  setProductos(productosOriginal)}}>   TODOS</Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="#polos"  onClick ={() => BuscarPorCategoriaNavBar(1)}>POLOS</Nav.Link>
      <Nav.Link href="#vestidos" onClick ={() => BuscarPorCategoriaNavBar(2)}>VESTIDOS</Nav.Link>
      <Nav.Link href="#leggins" onClick ={() => BuscarPorCategoriaNavBar(3)}>LEGGINS</Nav.Link>
      <Nav.Link href="#blusas" onClick ={() => BuscarPorCategoriaNavBar(4)}>BLUSAS</Nav.Link>
      <Nav.Link href="#lenceria"onClick ={() => BuscarPorCategoriaNavBar(5)}>LENCERIAS</Nav.Link>
      <Nav.Link href="#jeans"onClick ={() => BuscarPorCategoriaNavBar(6)}>JEANS</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
            
             {   <Routes>
                
                          <Route  path = "/" element = { <Main  miprop={productos} />} />
             </Routes>}
      
         </>   
    )
    

}
