import { HouseLine } from "phosphor-react";
import { useState } from "react";
import { Button, Card, Container, ListGroup, Modal } from "react-bootstrap";

export const DeliveryAddress = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="shadow p-3 mb-5 bg-body-tertiary rounded p-5">
      <div className="d-flex align-items-center gap-2">
        <HouseLine size={30} />
        <span className="fs-3 fw-semibold">Endereço de entrega</span>
      </div>

      <ListGroup variant="flush">
        <ListGroup.Item>Joaquim Kennedy</ListGroup.Item>
        <ListGroup.Item>rua Elias Fernandes Garcez</ListGroup.Item>
        <ListGroup.Item>CEP 08753-330 - Mogi das Cruzes - SP </ListGroup.Item>
        <ListGroup.Item>
          <Button onClick={handleShow} variant="outline-primary" className="w-100">
            Alterar endereço
          </Button>
        </ListGroup.Item>
      </ListGroup>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Endereços cadastrados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              adicionar novo endereço
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
