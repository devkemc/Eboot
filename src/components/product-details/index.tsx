import { Button, Carousel, Col, Container, Figure, Form, Row } from "react-bootstrap";
import Tenis from "../../assets/tenis.jpg";
import TenisTras from "../../assets/tenis-tras.jpg";
import TenisCima from "../../assets/tenis-cima.jpg";
import { useNavigate } from "react-router-dom";

export const ProductDetails = () => {
  const navigate = useNavigate();
  function handlePurchashe() {
    navigate("/carrinho-compras");
  }
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Container>
        <Row className="mt-5 p-5 border border-success p-2 border-opacity-10 shadow p-3 mb-5 bg-body-tertiary rounded">
          <Col xs={12} sm={4}>
            <p className="fw-light fs-3">Tênis Adidas Duramo 10 Preto Masculino</p>
          </Col>
          <Col xs={12} sm={4}>
            <Carousel>
              <Carousel.Item>
                <Figure.Image width={400} height={400} src={Tenis} />
              </Carousel.Item>
              <Carousel.Item>
                <Figure.Image width={400} height={400} src={TenisTras} />
              </Carousel.Item>
              <Carousel.Item>
                <Figure.Image width={400} height={400} src={TenisCima} />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} sm={4}>
            <h2>R$499,00</h2>
            <span className="text-primary">cartão 10x sem juros</span>
            <p>escolha o tamanho: </p>
            <Form>
              <Form.Check inline type="radio" label="35" name="group1" />
              <Form.Check inline type="radio" label="36" name="group1" />
              <Form.Check inline type="radio" label="37" name="group1" />
              <Form.Check inline type="radio" label="38" name="group1" />
            </Form>
            <p>escolha a cor: </p>
            <Form>
              <Form.Check inline type="radio" label="preto" name="group1" />
              <Form.Check inline type="radio" label="amarelo" name="group1" />
              <Form.Check inline type="radio" label="cinza" name="group1" />
              <Form.Check inline type="radio" label="preto" name="group1" />
            </Form>
            <Button className="mt-5 w-100" variant="success" onClick={handlePurchashe}>
              Comprar
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
