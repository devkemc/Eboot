import { Button, Container, ListGroup } from "react-bootstrap";

export const PurchaseSumary = () => {
  return (
    <Container>
      <ListGroup variant="flush">
        <ListGroup.Item>Subtotal (1 itemz): R$254,00</ListGroup.Item>
        <ListGroup.Item>Cupom desconto</ListGroup.Item>
        <ListGroup.Item>Valor total: R$254,00</ListGroup.Item>
        <ListGroup.Item>
          <Button className="w-100">Finalizar</Button>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};
