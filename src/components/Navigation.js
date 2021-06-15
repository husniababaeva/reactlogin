import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#home">Our App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/home" as={Link}>Home</Nav.Link>
            <Nav.Link to="/about" as={Link}>About</Nav.Link>
            <Nav.Link to="/all-news" as={Link}>All News</Nav.Link>
            <Nav.Link to="/auth" as={Link}>Auth</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}
export default Navigation;



