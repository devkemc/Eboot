import { Container, Figure, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Icon from "../../assets/icon.png";

export const SidebarAdm = () => {
  return (
    <Container className="position-absolute start-0 vh-100 bg-primary" style={{ width: "250px" }}>
      <Navbar className="vh-100 flex-column">
        <Navbar.Brand as={NavLink} to="/">
          <Figure.Image width={35} height={35} src={Icon} />
          Eboot
        </Navbar.Brand>
        <Nav className="d-flex flex-column ">
          <Nav.Link as={NavLink} to="/adm/consultar-clientes">
            Clientes
          </Nav.Link>
          <Nav.Link as={NavLink} to="/adm/produtos-listar">
            Prdutos
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};
