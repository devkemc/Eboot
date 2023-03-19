import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/tenis.jpg";

export const Product = () => {
  const navigate = useNavigate();
  function handleDescription() {
    navigate("/detalhes-produto");
  }
  return (
    <Card
      style={{ width: "18rem" }}
      className="m-2 border border-0 shadow p-3 mb-5 bg-body-tertiary rounded :hover{transform:scale(0.2)}"
    >
      <Card.Img variant="top" src={Img} role="button" onClick={handleDescription} />
      <Card.Body>
        <Card.Title>Tenis Adidas Duramo 10 preto masculino</Card.Title>
        <Card.Text>R$499,00</Card.Text>
      </Card.Body>
    </Card>
  );
};
