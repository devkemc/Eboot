import { House, ShoppingCartSimple, SignIn, SignOut, User } from "phosphor-react";
import { Container, Figure, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Icon from "../../assets/icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../../redux/domain/auth/auth-slice";
import { useAppDispatch } from "../../redux/root/hooks";
import { clientAutheticated } from "../../authenticate/auth-client";

export const Header = () => {
  const dispacth = useAppDispatch();
  const navigate = useNavigate();
  // const isLogged = clientAutheticated();
  const isLogged = true

  function logof() {
    alert("tem certeza?");
    dispacth(removeUser());
    navigate("/");
  }

  return (
    <header className="mb-5">
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
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
                Eboot
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="w-100 d-flex justify-content-end">
                <Nav.Link as={NavLink} to="/">
                  <House size={24} />
                </Nav.Link>
                {/* {!isLogged ? (
                  <> */}
                    <Nav.Link as={NavLink} to="/login">
                      <SignIn size={24} />
                    </Nav.Link>
                  {/* </>
                ) : (
                  <> */}
                    <Nav.Link title="Perfil" as={NavLink} to="/profile">
                      <User size={24} />
                    </Nav.Link>
                    <Nav.Link title="Sair" onClick={logof}>
                      <SignOut size={24} />
                    </Nav.Link>
                  {/* </>
                )} */}
                <Nav.Link title="Carrinho" as={NavLink} to="/carrinho-compras">
                  <ShoppingCartSimple size={24} />
                </Nav.Link>
                <Nav.Link title="Carrinho" as={NavLink} to="/adm">
                  Admin
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};
