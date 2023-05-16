import { useState } from "react";
import { Accordion, Button, Collapse, Container, Form, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
interface Props{
  valorTotal:string
  quantidadeItensCarrinho:number
  buttonDisabled:boolean
}
export const PurchaseSumary = ({quantidadeItensCarrinho,valorTotal, buttonDisabled}:Props) => {
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
        <ListGroup.Item>Subtotal ({quantidadeItensCarrinho} item): R${valorTotal}</ListGroup.Item>
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
        <ListGroup.Item>Valor total: R${valorTotal}</ListGroup.Item>
        <ListGroup.Item>
          <Button onClick={handleCompletion} disabled={buttonDisabled}  className="w-100">
            Finalizar
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="outline-primary"  onClick={handlePurchashe} className="w-100">
            Continuar comprando
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};
