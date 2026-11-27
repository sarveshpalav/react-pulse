import { Navbar, Container, Nav } from 'react-bootstrap';

interface HeaderProps {
  onHome: () => void;
  onAbout: () => void;
}

const Header = ({ onHome, onAbout }: HeaderProps) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home" onClick={onHome}>React Pulse</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={onHome}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={onAbout}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;