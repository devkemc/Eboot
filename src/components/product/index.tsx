import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/tenis.jpg";

export const Product = () => {
  const navigate = useNavigate();
  function handleDescription() {
    navigate("/detalhes-produto");
  }
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img variant="top" src={Img} role="button" onClick={handleDescription} />
      <Card.Body>
        <Card.Title>Tenis Adidas Duramo 10 preto masculino</Card.Title>
        <Card.Text>R$499,00</Card.Text>
        <Button variant="success">Comprar</Button>
      </Card.Body>
    </Card>
  );
};
