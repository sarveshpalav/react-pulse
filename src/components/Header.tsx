import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    /* Use expand="lg" to determine when the hamburger menu appears */
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      {/* The "fluid" prop is the key here. 
          It removes the fixed-width breakpoints and makes it 100% wide. 
      */}
      <Container fluid>
        <Navbar.Brand href="#home">React Pulse</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;