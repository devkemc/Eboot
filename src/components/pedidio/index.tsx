import { CheckCircle, Receipt, Truck, XCircle } from "phosphor-react";
import { Button, Col, Container, Figure, Row } from "react-bootstrap";
import Tenis from "../../assets/tenis.jpg";
import { OrderDetails } from "../order-details";
import React from "react";

export const Pedido = () => {
  const [show, setShow] = React.useState(false);
  return (
    <Container className="p-3 mb-5 bg-body-tertiary border border-primary-subtle rounded ">
      <Row>
        <Col>
          <Figure.Image width={200} height={200} src={Tenis} />
        </Col>
        <Col className="d-flex align-items-center">
          <div>
            <Receipt size={32} color="#0aa05a" />
            <p>pedido realizado</p>
          </div>

          <div>
            <XCircle size={32} color="#0aa05a" />
            <p> pedido cancelado</p>
          </div>
          <div>
            <Truck size={32} color="#0aa05a" />
            <p>pedido em transporte</p>
          </div>
          <div>
            <CheckCircle size={32} color="#0aa05a" />
            <p>pedido entregue</p>
          </div>
        </Col>
        <Col>
          <h2 className="text-primary">Resumo do pedido</h2>
          <div className="d-flex flex-column">
            <span>Valor total: R$250,00</span>
            <Button
              variant="outline-primary"
              onClick={() => {
                setShow(true);
              }}
            >
              Detalhes do pedido
            </Button>
          </div>
        </Col>
      </Row>
      <OrderDetails setShow={setShow} show={show} />
    </Container>
  );
};
