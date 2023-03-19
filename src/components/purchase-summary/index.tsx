import { useState } from "react";
import { Accordion, Button, Collapse, Container, Form, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const PurchaseSumary = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  function handlePurchashe() {
    navigate("/");
  }
  function handleCompletion() {
    navigate("/finalizacao");
  }
  return (
    <Container>
      <ListGroup variant="flush">
        <ListGroup.Item>Subtotal (2 item): R$999,98</ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          Cupom desconto
          <div>
            <a
              role="button"
              className="ml-2 fs-6 link-primary"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Adicionar
            </a>
          </div>
        </ListGroup.Item>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <Form.Group className="d-flex align-items-center gap-2 p-3">
              <Form.Control type="text" placeholder="digite o cupom" />
              <Button>Aplicar</Button>
            </Form.Group>
          </div>
        </Collapse>
        <ListGroup.Item>Valor total: R$999,98</ListGroup.Item>
        <ListGroup.Item>
          <Button onClick={handleCompletion} className="w-100">
            Finalizar
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="outline-primary" onClick={handlePurchashe} className="w-100">
            Continuar comprando
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};
