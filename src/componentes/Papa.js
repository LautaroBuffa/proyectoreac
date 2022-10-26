import Hijo from "./Hijo";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


  function Navbar1() {
    return (
      <Navbar bg="light" expand="lg">
      <Container style={{
        backgroundColor:"greenyellow",
        marginLeft:"5%",
       marginBottom:"15%",
    }}>
        <Navbar.Brand href="#home" style={{color:"red"}}>Vehiculos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  >
          <Nav className="me-auto" >
            <Nav.Link href="#home" style={{color:"red"}}>INICIO</Nav.Link>
            <Nav.Link href="#link"style={{color:"red"}}>NOSOTROS</Nav.Link>
            <NavDropdown  title="MARCAS" id="basic-nav-dropdown" >
              <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  
  export default Navbar1;

