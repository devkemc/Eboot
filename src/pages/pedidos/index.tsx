import { Container } from "react-bootstrap";
import { Pedido } from "../../components/pedidio";
import { LabelHeader } from "../../components/label-header";

export const Pedidos = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Container>
      <LabelHeader label="Meus pedidos"/>
      {arr.map((i) => {
        return <Pedido key={i} />;
      })}
    </Container>
  );
};
