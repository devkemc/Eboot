import { MinusCircle, PlusCircle } from "phosphor-react";
import { useState } from "react";
import { Button, Col, Container, Figure, Image, Row } from "react-bootstrap";
import Tenis from "../../assets/tenis.jpg";

export const ProductCart = () => {
  const [quantity, setQuantity] = useState(1);
  function addQuantity() {
    setQuantity(quantity + 1);
  }
  function minusQuantity() {
    setQuantity(quantity - 1);
  }
  return (
    <Container className="d-flex flex-column justify-content-between gap-3 p-5 shadow p-3 mb-5 bg-body-tertiary rounded">
      <Row className="border-bottom">
        <Col>
          <Figure.Image width={171} height={180} src={Tenis} />
        </Col>
        <Col>
          <h3>Tênis Adidas Duramo 10 Preto Masculino</h3>
          <p>Tamanho: 40</p>
          <p>Cor: preto</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex gap-3 align-items-center">
          <span>Quantidade:</span>
          <Button size="sm" variant="light" onClick={minusQuantity} disabled={quantity <= 1}>
            <MinusCircle size={20} />
          </Button>
          <span className="border p-1 px-3">{quantity}</span>
          <Button size="sm" variant="light" onClick={addQuantity}>
            <PlusCircle size={20} />
          </Button>
        </Col>
        <Col>
          <p className="fs-2 fw-bolder">R$499,00</p>
        </Col>
      </Row>
    </Container>
  );
};
