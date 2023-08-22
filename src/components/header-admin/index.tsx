import { BellSimple, House, ShoppingCartSimple, SignIn, SignOut, User } from "phosphor-react";
import { Badge, Container, Figure, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Icon from "../../assets/icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../../redux/domain/auth/auth-slice";
import { useAppDispatch } from "../../redux/root/hooks";
import { clientAutheticated } from "../../authenticate/auth-client";
import { ModalNotifications } from "../notifications";
import React from "react";

export const HeaderAdmin = () => {
  const dispacth = useAppDispatch();
  const navigate = useNavigate();
  const isLogged = clientAutheticated();
  const [openNotifications, setOpenNotifications] = React.useState(false);

  function logof() {
    alert("tem certeza?");
    dispacth(removeUser());
    navigate("/");
  }

  return (
    <header className="mb-5">
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/admin">
            <Figure.Image width={35} height={35} src={Icon} />
            EbootAdmin
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
                EbootAdmin
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="w-100 d-flex justify-content-end">
                <div className="d-md-block d-lg-none">
                  <Nav.Link as={NavLink} to="/adm/">
                    <div className="d-flex gap-2 ">Dashboard</div>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/adm/consultar-clientes">
                    <div className="d-flex gap-2 ">Clientes</div>
                  </Nav.Link>
                  <Nav.Link title="Perfil" as={NavLink} to="/adm/produtos-listar">
                    <div className="d-flex gap-2 ">Produtos</div>
                  </Nav.Link>
                </div>
                <Nav.Link title="Sair" onClick={logof}>
                  <SignOut size={24} />
                </Nav.Link>
                <Nav.Link
                  title="Notificações"
                  onClick={() => {
                    setOpenNotifications(true);
                  }}
                >
                  <BellSimple size={24} />
                  <Badge className="px-1" pill>
                    8
                  </Badge>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <ModalNotifications setShow={setOpenNotifications} show={openNotifications} />
    </header>
  );
};
