import { Button, Collapse, Container, Row } from "react-bootstrap";
import { MethodPaymentCreditCard } from "../method-payment-credit-card";
import { RegisterCard } from "../register-card";
import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import { getIdClient } from "../../utils/get-id-client";
import { cardApi } from "../../redux/domain/card/card-api";
import { cartao } from "../../mocks/cartao";

export const MethodPayment = () => {
  // const { data: dataCardClient, isLoading, refetch } = cardApi.useGetCardsQuery({ clienteId: getIdClient()! });
  const [activeFormCard, setActiveFormaCard] = useState(false);
  const dataCardClient = cartao;
  const refetch = () => console.log("refetch");
  const handleActiveFormCard = () => {
    setActiveFormaCard(!activeFormCard);
  };
  return (
    <Container fluid="xs" className="p-3 mb-5 bg-body-tertiary border rounded p-5">
      <Row>
        <h4 className="text-primary fs-3 fw-semibold">Pagar com cartão</h4>
        {dataCardClient &&
          dataCardClient.data.map((card, index) => (
            <MethodPaymentCreditCard
              key={index}
              numeroCartao={card.numeroCartao!}
              nomeTitular={card.nomeImpresso!}
              validade={card.validade!}
            />
          ))}
        <div className="mt-5 d-flex justify-content-center w-100">
          <Button className="w-75" variant='outline-primary' onClick={handleActiveFormCard}>Adicionar novo cartão</Button>
        </div>
        <Collapse key={111} in={activeFormCard}>
          <div className="w-100">
            <RegisterCard refetch={refetch} setActiveForm={handleActiveFormCard} />
          </div>
        </Collapse>
      </Row>
    </Container>
  );
};
