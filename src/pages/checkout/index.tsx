import { CreditCard } from "phosphor-react";
import { useState } from "react";
import { Button, Col, Collapse, Container, Form, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DeliveryAddress } from "../../components/delivery-address";
import { MethodCreditCard } from "../../components/method-payment-credit-card";
import { OrderSummary } from "../../components/order-summary";
import { RegisterCard } from "../../components/register-card";

export const Checkout = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  function handleSuccess() {
    navigate("/compra-sucedida");
  }

  function handleChecked() {
    setChecked(!checked);
  }
  return (
    <Container fluid="sm" className="p-5 vh-100">
      <Row>
        <Col>
          <Row>
            <Col>
              <DeliveryAddress />
            </Col>
          </Row>
          <Row>
            <Col>
              <form className="d-flex flex-column justify-content-between align-items-center gap-2 shadow p-3 mb-5 bg-body-tertiary rounded p-5">
                <div className="d-flex align-items-center justify-content-start gap-2 w-100">
                  <CreditCard size={25} />
                  <span className="fw-semibold fs-5">Cartão de credito</span>
                </div>
                <Row className="w-100">
                  <MethodCreditCard />
                  <MethodCreditCard />
                  <MethodCreditCard />
                </Row>
                <Row className="w-100">
                  <Container fluid="xs">
                    <Row className="w-100">
                      <Col xs={2} className="d-flex justify-content-center align-items-center">
                        <Form.Check id='card' type="checkbox" onChange={handleChecked} />
                      </Col>
                      <Col className="d-flex align-items-center ">
                        <label htmlFor="card">Pagar com outro cartão</label>
                      </Col>
                    </Row>
                    <Row>
                      <Collapse in={checked}>
                        <div id="example-collapse-text">
                          <RegisterCard />
                        </div>
                      </Collapse>
                    </Row>
                  </Container>
                </Row>
                <Row className="w-100">
                  <Button onClick={handleSuccess}>Finalizar com cartão</Button>
                </Row>
              </form>
            </Col>
          </Row>
        </Col>
        <Col>
          <h3>Resumo do pedido</h3>
          <Container fluid className="shadow p-3 mb-5 bg-body-tertiary rounded">
            <OrderSummary />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
