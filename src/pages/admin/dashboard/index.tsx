import { GraficProductsBestSaller } from "../../../components/dashboard/charts/saller-products/products-best-saller";
import { Col, Container, Row } from "react-bootstrap";
import { GraficQuantitySaller } from "../../../components/dashboard/charts/saller-products/quantity-saller";
import { GraficSallerForProduct } from "../../../components/dashboard/charts/saller-products/saller-for-product";

export const Dashboard = () => {
  return (
    <Container className="py-5 d-flex flex-column gap-4">
      <Row className="d-flex">
        <Col>
          <GraficProductsBestSaller title="Vendas por mês" />
        </Col>

        <Col>
          <GraficProductsBestSaller title="Grafico de produtos mais vendidos" />
        </Col>
      </Row>
      <Row className="d-flex">
        <Col>
          <GraficQuantitySaller title="Vendas por mês" />
        </Col>

        <Col xs={12} sm={6} md={6} lg={4}>
          <GraficSallerForProduct title="Grafico de produtos mais vendidos" />
        </Col>
      </Row>
    </Container>
  );
};
