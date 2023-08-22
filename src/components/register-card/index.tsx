import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { cardApi } from "../../redux/domain/card/card-api";
import { useForm } from "react-hook-form";
import { getIdClient } from "../../utils/get-id-client";
import { toast } from "react-toastify";
import React from "react";

interface Props {
  refetch: () => void;
  setActiveForm: () => void;
}

interface FormCreatedCard {
  numeroCartao: number;
  nomeImpresso: string;
  codSeguranca: number;
  bandeiraCartao: string;
  validade: string;
  clienteId: number;
}

export const RegisterCard = ({ refetch, setActiveForm }: Props) => {
  const [addCard, { isSuccess }] = cardApi.useAddCardMutation();
  const { register, handleSubmit, reset } = useForm<FormCreatedCard>({
    defaultValues: {
      clienteId: getIdClient()!,
    },
  });

  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Cartão cadastrado com sucesso");
      refetch();
      reset();
      setActiveForm();
    }
  }, [isSuccess]);
  const createdCard = (data: FormCreatedCard) => {
    addCard({
      codSeguranca: Number(data.codSeguranca),
      numeroCartao: Number(data.numeroCartao),
      bandeiraCartao: data.bandeiraCartao,
      validade: data.validade,
      clienteId: data.clienteId,
      nomeImpresso: data.nomeImpresso,
    });
  };
  return (
    <Container className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Bandeira</Form.Label>
          <Form.Select {...register("bandeiraCartao")}>
            <option value="VISA">VISA</option>
            <option value="MASTERCARD">MASTERCARD</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Número do cartão</Form.Label>
          <Form.Control {...register("numeroCartao")} type="text" placeholder="digite número do seu cartão" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome do titular</Form.Label>
          <Form.Control {...register("nomeImpresso")} type="text" placeholder="digite nome do titular do cartão" />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Label>Validade</Form.Label>
              <Form.Control type="date" {...register("validade")} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Label>Código segurança</Form.Label>
              <Form.Control {...register("codSeguranca")} />
            </Form.Group>
          </Col>
        </Row>
        <Button onClick={handleSubmit(createdCard)} className="w-100">
          Cadastrar cartão
        </Button>
      </Form>
    </Container>
  );
};
