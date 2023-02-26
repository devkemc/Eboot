import { Col, Container, Row } from "react-bootstrap";
import { ProductCart } from "../../components/product-in-cart";
import { PurchaseSumary } from "../../components/purchase-summary";

export const CarrinhoCompras = () => {
  return (
    <Container fluid="sm" className="p-5 vh-100">
      <Row clas>
        <Col xs={12} sm={8}>
          <h3>Meu carrinho</h3>
          <Container fluid className="d-flex flex-column gap-1">
            <ProductCart />
            <ProductCart />
          </Container>
        </Col>

        <Col xs={12} sm={4}>
          <h3>Resumo da compra</h3>
          <Container fluid className="shadow p-3 mb-5 bg-body-tertiary rounded">
            <PurchaseSumary />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
