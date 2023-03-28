import { Container, Figure, ListGroup, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Icon from "../../assets/icon.png";

export const SidebarAdm = () => {
  return (
    <Container fluid className="w-100 d-flex flex-column py-5 vh-100 align-items-center app-sidebar ">
      <Figure.Image width={100} height={100} src={Icon} />
      <Container className="bg-light d-flex flex-column shadow p-3 mb-5 bg-body-tertiary rounded">
        <ListGroup variant="flush">
        <ListGroup.Item action>
            <Nav.Link as={NavLink} to="/adm/consultar-clientes">
              <div className="d-flex gap-2 ">Dashboard</div>
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item action>
            <Nav.Link as={NavLink} to="/adm/consultar-clientes">
              <div className="d-flex gap-2 ">Clientes</div>
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item action>
            <Nav.Link as={NavLink} to="/adm/produtos-listar">
              <div className="d-flex gap-2 ">Produtos</div>
            </Nav.Link>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </Container>
  );
};
