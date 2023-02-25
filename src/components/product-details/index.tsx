import { Button, Col, Container, Figure, Form, Row } from "react-bootstrap";
import Img from "../../assets/tenis.jpg";

export const ProductDetails = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Container>
        <Row className="mt-5 p-5 border border-success p-2 border-opacity-10">
          <Col xs={12} sm={6}>
            <Figure.Image className="shadow p-3 mb-5 bg-body-tertiary rounded" width={400} height={400} src={Img} />
          </Col>
          <Col xs={12} sm={6}>
            <p className="fw-light">Tênis Adidas Duramo 10 Preto Masculino</p>
            <h2>R$499,00</h2>
            <span className="text-primary">cartão 10x sem juros</span>
            <p>escolha o tamanho: </p>
            <Form>
              <Form.Check inline label="35" name="group1" />
              <Form.Check inline label="36" name="group1" />
              <Form.Check inline label="37" name="group1" />
              <Form.Check inline label="38" name="group1" />
            </Form>
            <Button className="mt-5" variant="success">
              Comprar
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
