import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setEmail } from "../../store/cliente/clientSlice";
export const Login = () => {
  const { register, handleSubmit } = useForm<{ email: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmitLogin() {
    navigate("/adm/consultar-clientes");
  }
  function handleSubmitFirstAccess(data: { email: string }) {
    console.log(data.email);
    const email: string = data.email;

    dispatch(setEmail(email));

    navigate("/cadastrar-cliente");
  }
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100 gap-5 d-flex justify-content-center">
        <Col xs={12} sm={5}>
          <Form onSubmit={handleSubmitLogin}>
            <h2>Já Sou cliente</h2>
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
            <Button variant="primary" type="submit" className="w-100">
              Entrar
            </Button>
          </Form>
        </Col>
        <Col xs={12} sm={5}>
          <Form onSubmit={handleSubmit(handleSubmitFirstAccess)}>
            <h2>Criar conta</h2>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control {...register("email")} type="email" placeholder="digite seu email" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Proseguir
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
