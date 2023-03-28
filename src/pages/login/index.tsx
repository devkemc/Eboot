import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setForm } from "../../store/cliente/clientSlice";
import { clienteApi } from "../../store/cliente/apiSlice";
import { Loading } from "../../components/loading";
interface form {
  email: string;
  idCliente: number;
  login: string;
}
export const Login = () => {
  const { register, handleSubmit } = useForm<form>();
  const { isLoading, data } = clienteApi.useGetClientsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmitLogin(data: form) {
    dispatch(setForm({ email: data.email, id: data.idCliente }));
    if (data.login == "adm") navigate("/adm/consultar-clientes");
    else navigate("/profile");
  }
  function handleSubmitFirstAccess(data: form) {
    console.log(data.email);
    const email: string = data.email;

    dispatch(setForm({ email: data.email, id: data.idCliente }));

    navigate("/cadastrar-cliente");
  }
  return (
    <>
      {isLoading && <Loading />}
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-100 gap-5 d-flex justify-content-center">
          <Col xs={12} sm={5}>
            <Form onSubmit={handleSubmit(handleSubmitLogin)}>
              <h2>Já Sou cliente</h2>
              <Form.Group>
                <FloatingLabel label="Cliente">
                  {isLoading ? (
                    <Form.Select>
                      <option>Carregando...</option>
                    </Form.Select>
                  ) : (
                    <Form.Select aria-label="Default select example" {...register("idCliente")}>
                      <option value="">Selecione um cliente</option>
                      {data?.data.map((a) => (
                        <option value={a.id} key={a.id}>
                          {a.nome}
                        </option>
                      ))}
                    </Form.Select>
                  )}
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Login</Form.Label>
                <Form.Control {...register("login")} id="login" type="text" placeholder="entre com seu login" />
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
    </>
  );
};
