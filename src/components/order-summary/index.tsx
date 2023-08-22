import { Container, ListGroup } from "react-bootstrap";
interface Props{
  valorTotal: number
  valorFrete:number
  numCumpoDesconto: string
  quantidadeItens: number
}
export const OrderSummary = ({numCumpoDesconto = '',quantidadeItens,valorFrete = 0,valorTotal}:Props) => {
  return (
    <Container>
      <ListGroup variant="flush">
        <ListGroup.Item>Subtotal ({quantidadeItens} item): R${valorTotal.toLocaleString()}</ListGroup.Item>
        {numCumpoDesconto && <ListGroup.Item>Cupom desconto: </ListGroup.Item>}
        <ListGroup.Item>Frete: R$ {valorFrete.toLocaleString()}</ListGroup.Item>
        <ListGroup.Item>Valor total: R${(valorFrete + valorTotal).toLocaleString()}</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};
