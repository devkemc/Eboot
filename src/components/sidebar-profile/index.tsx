import { CaretDoubleRight, CreditCard, HouseSimple, Repeat, Truck, UserCircle } from "phosphor-react";
import { useState } from "react";
import { Button, Container, Figure, Nav, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Icon from "../../assets/icon.png";

export const SidebarProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container
      fluid
      className="w-100 d-flex flex-column py-5 vh-100 align-items-center"
      style={{ backgroundColor: "#c58c6f" }}
    >
      <Figure.Image width={100} height={100} src={Icon} />
      <Container className="bg-light d-flex flex-column shadow p-3 mb-5 bg-body-tertiary rounded">
        <Nav.Link as={NavLink} to="/profile" className="border-bottom p-3">
          <div className="d-flex gap-2 ">
            <Truck size={24} />
            Pedidos
          </div>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/profile/seus-dados" className="border-bottom p-3">
          <div className="d-flex gap-2">
            <UserCircle size={24} />
            Seus dados
          </div>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/profile" className="border-bottom p-3">
          <div className="d-flex gap-2">
            <HouseSimple size={24} />
            Endereços
          </div>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/profile" className="border-bottom p-3">
          <div className="d-flex gap-2">
            <CreditCard size={24} />
            Cartões salvos
          </div>
        </Nav.Link>
      </Container>
    </Container>
  );
};
