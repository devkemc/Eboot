import { ReactNode } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactInputMask from "react-input-mask";

export const UpdateProfileClient = () => {
  return (
    <Container className="shadow p-3 mb-5 bg-body-tertiary rounded">
      <Form className="w-100">
        <h2>Alterar cadastro</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control value="Joaquim Kennedy" type="text" placeholder="digite seu nome" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control value="Batista de Souza" type="text" placeholder="digite seu sobrenome" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Senha</Form.Label>
          <Form.Control value="testedfdd" type="password" className="mb-3" placeholder="digite sua senha" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>CPF</Form.Label>
          <ReactInputMask value="48005136854" mask="999.999.999-99">
            {(() => <Form.Control type="text" placeholder="digite seu CPF" />) as unknown as ReactNode}
          </ReactInputMask>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control
            value="09/04/2002"
            type="date"
            placeholder="selecione sua data de nascimento"
            datatype="dd/mm/yyyy"
          />
        </Form.Group>
        <Button variant="primary" type="button" className="w-100">
          Atualizar
        </Button>
      </Form>
    </Container>
  );
};
