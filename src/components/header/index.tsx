import { ShoppingCartSimple, User } from "phosphor-react";
import { Container, Figure, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Icon from "../../assets/icon.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="mb-5">
      <Navbar bg="primary" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <Figure.Image width={35} height={35} src={Icon} />
            Eboot
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                <Figure.Image width={35} height={35} src={Icon} />
                Ebook
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="w-100 d-flex justify-content-end">
                <Nav.Link as={NavLink} to="/login">
                  <User size={24} />
                  Entrar
                </Nav.Link>
                <Nav.Link as={NavLink} to="/carrinho">
                  <ShoppingCartSimple size={24} />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};
