import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Loading } from "../../components/loading";
import { authApi } from "../../redux/domain/auth/auth-api";
import React, { useState } from "react";
import { useAppDispatch } from "../../redux/root/hooks";
import { setUser } from "../../redux/domain/auth/auth-slice";
import { toast } from "react-toastify";
import { setForm } from "../../redux/domain/cliente/client-slice";

interface Form {
  email: string;
  senha: string;
}

export const Login = () => {
  const { register, handleSubmit } = useForm<Form>();
  const [viewPassword, setViewPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [login, { isLoading, data: loginData, isSuccess: isLoginSuccess, error: loginError, isError: isLoginError }] =
    authApi.useLoginMutation();

  async function handleSubmitLogin(user: Form) {
    // user.email && user.senha && await login(user)
    toast.success("Login efetuado com sucesso!");
    user.email === "admin@gmail.com" ? navigate("/adm/") : navigate("/");
  }

  React.useEffect(() => {
    if (isLoginSuccess) {
      toast.success("Login efetuado com sucesso!");
      dispatch(setUser({ token: loginData.data.token, id: loginData.data.id, admin: loginData.data.admin }));
      loginData.data.admin === true ? navigate("/adm/consultar-clientes") : navigate("/");
    }
    if (isLoginError) {
      toast.error((loginError as any).data.message);
    }
  }, [isLoginSuccess, isLoginError]);

  function handleSubmitFirstAccess() {
    dispatch(setForm({ email: createdUserEmail }));

    navigate("/cadastrar-cliente");
  }

  return (
    <>
      {isLoading && <Loading />}
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-100 gap-5 d-flex justify-content-center">
          <Col xs={12} sm={5}>
            <Form onSubmit={handleSubmit(handleSubmitLogin)}>
              <h2>Já sou cliente</h2>
              <Form.Group className="mb-3" controlId="loginEmail">
                <Form.Label>Login</Form.Label>
                <Form.Control type="email" placeholder="entre com seu email" {...register("email")} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="loginSenha">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type={viewPassword ? "text" : "password"}
                  placeholder="entre com sua senha"
                  {...register("senha")}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="manterConectado">
                <Form.Check
                  type="checkbox"
                  label="Mostrar senha"
                  onChange={() => {
                    setViewPassword(!viewPassword);
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Entrar
              </Button>
            </Form>
          </Col>
          <Col xs={12} sm={5}>
            <Form onSubmit={handleSubmit(handleSubmitFirstAccess)}>
              <h2>Criar conta</h2>
              <Form.Group className="mb-3" controlId="criarContaEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(event) => setCreatedUserEmail(event.target.value)}
                  type="email"
                  placeholder="digite seu email"
                />
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
