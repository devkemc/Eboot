import { Container, ListGroup } from "react-bootstrap";

export const OrderSummary = () => {
  return (
    <Container>
      <ListGroup variant="flush">
        <ListGroup.Item>Subtotal (1 item): R$999,98</ListGroup.Item>
        <ListGroup.Item>Cupom desconto: </ListGroup.Item>
        <ListGroup.Item>Frete: R$ 10,00</ListGroup.Item>
        <ListGroup.Item>Valor total: R$1009,98</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};
