import { CheckCircle, Receipt, Truck, XCircle } from "phosphor-react";
import { Col, Container, Figure, Row } from "react-bootstrap";
import Tenis from "../../assets/tenis.jpg";

export const Pedido = () => {
  return (
    <Container className="shadow p-3 mb-5 bg-body-tertiary rounded ">
      <Row>
        <Col>
          <Figure.Image width={200} height={200} src={Tenis} />
        </Col>
        <Col className="d-flex align-items-center">
          <div>
            <Receipt size={32} color="#2ec27e" />
            <p>pedido realizado</p>
          </div>

          <div>
            <XCircle size={32} color="#c01c28" />
            <p> pedido cancelado</p>
          </div>
          <div>
            <Truck size={32} color="#26a269" />
            <p>pedido em transporte</p>
          </div>
          <div>
            <CheckCircle size={32} color="#26a269" />
            <p>pedido entregue</p>
          </div>
        </Col>
        <Col>
          <h2>resumo</h2>
          valor total:2500
        </Col>
      </Row>
    </Container>
  );
};
