import { CreditCard } from "phosphor-react";
import { useState } from "react";
import { Button, Col, Collapse, Container, Form, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DeliveryAddress } from "../../components/delivery-address";
import { MethodPaymentCreditCard } from "../../components/method-payment-credit-card";
import { OrderSummary } from "../../components/order-summary";
import { RegisterCard } from "../../components/register-card";
import { useSelector } from "react-redux";

import { selectCar } from "../../redux/domain/carrinho/car-slice";
import { MethodPayment } from "../../components/method-payment";
import { LabelHeader } from "../../components/label-header";

export const Checkout = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const { carrinhoId, valorTotalCarrinho, itensCarrinho } = useSelector(selectCar);

  function handleSuccess() {
    navigate("/compra-sucedida");
  }

  function handleChecked() {
    setChecked(!checked);
  }
  return (
    <Container fluid="sm" className="p-5 vh-100">
      <Row>
        <Col md={6}>
          <LabelHeader label="Métodos de pagamento" />
          <MethodPayment />
        </Col>
        <Col md={6}>
          <LabelHeader label="Entrega e Resumo" />
          <div className="d-flex flex-column align-items-center gap-3">
            <Row className="w-100">
              <DeliveryAddress />
            </Row>
            <Row className="w-100">
              <Container fluid className="border rounded p-5">
                <h3 className="text-primary">Resumo do pedido</h3>
                <OrderSummary
                  valorTotal={valorTotalCarrinho}
                  quantidadeItens={itensCarrinho.length}
                  numCumpoDesconto={""}
                  valorFrete={0}
                />
                <div className="mt-3 w-100 d-flex align-items-center justify-content-center">
                <Button className="w-100" variant="primary" onClick={handleSuccess}>
                  Finalizar pedido
                </Button>
              </div>
              </Container>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
