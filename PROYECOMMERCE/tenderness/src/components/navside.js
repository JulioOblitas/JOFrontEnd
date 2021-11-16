
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
export default function navside() {
    return (
        <>
   
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">TODOS</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#vestido">Vestidos</Nav.Link>
      <Nav.Link href="#blusas">Blusas</Nav.Link>
      <Nav.Link href="#leggins">Leggins</Nav.Link>
      <Nav.Link href="#pantalones">Pantalones</Nav.Link>
      <Nav.Link href="#faldas">Faldas</Nav.Link>
      <Nav.Link href="#lenceria">Lenceria</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  
</>

        
    )
}

