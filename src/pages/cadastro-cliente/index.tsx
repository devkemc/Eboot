import React, { ReactNode } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

export const CadastroCliente = () => {
  const [nextForm, setNextForm] = React.useState(false);
  const navigate = useNavigate();
  function handleNextForm() {
    setNextForm(!nextForm);
  }

  function handleSubmit() {
    navigate("/carrinho");
  }
  return (
    <Container className=" d-flex justify-content-center align-items-center vh-100">
      <Container className="w-100">
        <Form>
          {!nextForm ? (
            <>
              <h2>Dados Pessoais</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="digite seu nome" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control type="text" placeholder="digite seu sobrenome" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CPF</Form.Label>
                <InputMask mask="999.999.999-99">
                  {(() => <Form.Control type="text" placeholder="digite seu CPF" />) as unknown as ReactNode}
                </InputMask>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="date" placeholder="selecione sua data de nascimento" datatype="dd/mm/yyyy" />
              </Form.Group>
              <Button onClick={handleNextForm} variant="primary" type="button" className="w-100">
                Proximo
              </Button>
            </>
          ) : (
            <>
              {" "}
              <h2>Dados Endereço</h2>
              <Row>
                <Col xs={12} sm={2}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>tipo de logradouro</option>
                      <option value="1">Rua</option>
                      <option value="2">Avenida</option>
                      <option value="3">Praça</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} sm={10}>
                  <Form.Group className="mb-3">
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control type="text" placeholder="digite seu logradouro" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Bairro</Form.Label>
                <Form.Control type="text" placeholder="digite seu bairro" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CEP</Form.Label>
                <InputMask mask="99999-999">
                  {(() => <Form.Control type="text" placeholder="digite seu CEP" />) as unknown as ReactNode}
                </InputMask>
              </Form.Group>
              <Row>
                <Col xs={12} sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" placeholder="digite sua cidade" />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" placeholder="digite seu estado" />
                  </Form.Group>
                </Col>
              </Row>
              <Button onClick={handleSubmit} variant="primary" type="button" className="w-100">
                Cadastrar
              </Button>
            </>
          )}
        </Form>
      </Container>
    </Container>
  );
};
