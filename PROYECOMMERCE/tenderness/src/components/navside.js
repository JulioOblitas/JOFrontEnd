
import { Navbar, Container, Nav, NavLink, Alert } from "react-bootstrap";
import { obtenerProductos } from "../services/productosServices";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useRef , useState, useEffect } from "react";
import Main from "./main";

export default function Navside( ) {
  const [productos, setProductos] = useState([]);
  const [productosOriginal,  setProductosOriginal] = useState([]); //nunca lo modifico

  
  const getData = async () => {
      try {
          
  
          const prodObtenidos = await obtenerProductos();
          setProductos(prodObtenidos)
          setProductosOriginal(prodObtenidos);
      } catch (error) {
          console.log(error); //Swal icon:"error"
      }
  };

  useEffect(() => {
    getData();
}, []);

  const BuscarPorCategoria  =  () =>{
    alert("hola");
      {
      
        <Main  miprop={productosOriginal}/>
          
      }
  }
  
  
  return (

    
        <>
   <div>

   
  
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home" onClick= {() => BuscarPorCategoria }>   TODOS</Navbar.Brand>
    
    
    <Nav className="me-auto">
      <Nav.Link href="#polos" >Polos</Nav.Link>
      <Nav.Link href="#vestidos">Vestidos</Nav.Link>
      <Nav.Link href="#leggins">Leggins</Nav.Link>
      <Nav.Link href="#blusas">Blusas</Nav.Link>
      <Nav.Link href="#lenceria">Lenceria</Nav.Link>
      <Nav.Link href="#jeans">Jeans</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
                  
  </div>
                            
                
                |             
            
</>

        
    )
}

