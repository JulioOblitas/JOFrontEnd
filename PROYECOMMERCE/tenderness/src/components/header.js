
import   { useContext, useRef , useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

import { Navbar, Container, Nav, NavLink, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import imgEmail from "../imagenes/email.png"
import imgTelefono from "../imagenes/telefono.png"
import imgFacebook from "../imagenes/facebook.png"
import imgInstagram from "../imagenes/instagram.png"
import imgLogoEmpresa from "../imagenes/logoemp.png"
import imgLogoBuscar from "../imagenes/buscando.png"

import { CarritoContext } from "../context/carritoContext";
import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { obtenerCategorias } from "../services/categoriasServices";
import { obtenerProductos , ObtenerProductosPorPagina  } from "../services/productosServices";
import Main from "./Main";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";

export default function Header() {

    

    const { user, signOut } = useContext(AuthContext);
    const { signIn } = useContext(AuthContext);
    const { carrito } = useContext(CarritoContext);
    const [buscar, setBuscar] = useState('');  
   
    const [categorias, setCategorias] = useState([]);
    const [categoriasOriginal, setCategoriasOriginal] = useState([]); //nunca lo modifico
    const [productos, setProductos] = useState([]);
    const [productosOriginal,  setProductosOriginal] = useState([]); //nunca lo modifico

    const [isOpenModal,openModal, closeModal] = useModal();

    
    

 
    
    

    const totalCarrito = carrito.reduce((total, prod) => {
        return total + prod.cantidad;
    }, 0);

    
    const getData = async () => {
        try {
            
            const catObtenidas = await obtenerCategorias();
            const prodObtenidos = await obtenerProductos();
            
            //const prodObtenidos = await ObtenerProductosPorPagina(pagina, limite);
            setProductos([...productos, ...prodObtenidos]);
            
            setCategorias(catObtenidas);            
            setCategoriasOriginal(catObtenidas);
            //setProductos(prodObtenidos)
            setProductosOriginal(prodObtenidos);    
        } catch (error) {
            console.log(error); //Swal icon:"error"
        }
    };

    const BuscarPorCategoria  =  () =>{
        
       
        let idcat; 
        

        
        const catFiltrados = categoriasOriginal.filter((cat) => cat.nombre === buscar.toUpperCase());
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
   
     

    useEffect(() => {
     


        
        getData();
    }, []);

    return (
       <>    
        
        <header>

        
         <div className = "contenedorredessociales" >
             <button onClick={openModal}>
                Abrir Modal
             </button>
                <Modal isOpen={isOpenModal} closeModal = {closeModal} title ={`PUBLICIDAD`}  />
         
            <div className = "Email">
                <img  className = "imglogocabecera"  src= {imgEmail}  alt=""/>
                <h6 className = "h6Email">EMAIL</h6>
            </div>

            <div className = "Telefono">
              
                <img  className = "imglogocabecera"  src= {imgTelefono}  alt=""/>
                <h6 className = "h6Email">934586160</h6>
                            
                
            </div>
        
            <div className = "RedesSociales">
                <h6>SIGUENOS</h6>
                <img  className = "imglogocabecera"  src= {imgFacebook}  alt=""/>
                <img  className = "imglogocabecera"  src= {imgInstagram}  alt=""/>
            </div>
      
        </div>

            <div className= "contenedorbusqueda" >
                <div className = "Logo">
                    <img   className = "imglogoempresa imglogoefecto"  src= {imgLogoEmpresa}  alt=""/>                        
                </div>

                <div className = "Buscar">
                    <input className = "txtbuscar" value = {buscar}   onChange={e => setBuscar(e.target.value)}  type="text" placeholder = "Tenderness siempre contigo.. buscalo" />
                   
                   <a href = "#"> <img  className = "imgbuscar"  onClick={() => { BuscarPorCategoria()}} src= {imgLogoBuscar}  alt=""/>  </a>
                   
                   <Link className="nav-link" to="/carrito">
                            {/*<Badge badgeContent={totalCarrito} color="primary">*/}
                            <Badge   badgeContent={totalCarrito} color="primary">
                                <ShoppingCartIcon />
                            </Badge>
                        </Link>
                </div>
                
                <div  className="divusuario">

                     {user ? (
                           <NavDropdown 
                             title={
                               <div className="d-inline navmenudropdown"   >
                                   <img
                                       src={user.photoURL}
                                     
                                       

                                       alt="avatar"
                                       style={{ borderRadius: "50%", width: "30px" }}
                                   />
                                   <span style={{ color: "white"}}>{user.displayName}</span>
                               </div>
                                 }
                       >
                           
                               
                     

                                <NavDropdown.Item as={Link} to="/operaciones"  className = "btn btn-primary btnoperacionusuario" > OPERACIONES</NavDropdown.Item>

                                <NavDropdown.Item   className = "btn btn-primary btnoperacionusuario" onClick = {signOut} >SALIR</NavDropdown.Item>
                             
                            </NavDropdown>
                        ) : (
                            <Link className="nav-link" to="/" onClick = {signIn} >
                                INGRESAR
                            </Link>
                        )}
                
                
        
      
                </div>
            </div>
         
         
      
        
            

  
        
        <Navbar className= "posnavbar" bg="primary" variant="dark">
    <Container className= "posnavbar">
    
    <Navbar.Brand href="/#home" onClick= {() =>{  setProductos(productosOriginal)}}>   INICIO</Navbar.Brand>
    <Navbar.Brand href="#home" onClick= {() =>{  setProductos(productosOriginal)}}>   TODOS</Navbar.Brand>
      <Nav className="me-auto">
      

                        
                
                      
                             {categoriasOriginal.map((cat, i) => (
                                <Nav.Link key={i} onClick={() => {BuscarPorCategoriaNavBar(cat.id);}}>                                
                                {cat.nombre}
                                </Nav.Link>
                            
                            ))}
                      
            
      
     
    </Nav>
    </Container>
  </Navbar>
       
  </header>
   
             {   <Routes>
                
                          <Route  path = "/" element = { <Main  miprop={productos}  />} />
                          
             </Routes>}
           
         </>   
    )
    

}
