import { CreditCard } from "phosphor-react";
import { Col, Container, Form, Row } from "react-bootstrap";

export const MethodCreditCard = () => {
  return (
    <Container fluid="xs" className="d-flex  w-100 align-items-center border-bottom">
      <Row className="w-100">
        <Col xs={2} className="d-flex justify-content-center align-items-center">
          <Form.Check type="checkbox" />
        </Col>
        <Col xs={5} className="d-flex flex-column justify-content-center">
          <span>Numero Cartão</span>
          <span>498423XXXXXX3771 </span>
        </Col>
        <Col xs={3} className="d-flex flex-column justify-content-center">
          <span>titular</span>
          <span>joaquim kennedy</span>
        </Col>
        <Col xs={2} className="d-flex flex-column justify-content-center">
          <span>Validade</span>
          <span>08/23</span>
        </Col>
      </Row>
    </Container>
  );
};
