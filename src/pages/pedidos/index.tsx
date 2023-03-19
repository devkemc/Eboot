import { Container } from "react-bootstrap";
import { Pedido } from "../../components/pedidio";

export const Pedidos = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Container>
      <h2>Pedidos</h2>
      {arr.map((i) => {
        return <Pedido key={i} />;
      })}
    </Container>
  );
};
