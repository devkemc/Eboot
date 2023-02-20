import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/");
  }
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control type="text" placeholder="entre com seu login" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="entre com sua senha" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="mantenha-me conectado" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    </Container>
  );
};
