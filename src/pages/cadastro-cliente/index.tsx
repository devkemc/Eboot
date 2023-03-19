import { ReactNode } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { clienteApi } from "../../store/cliente/apiSlice";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDadosCliente } from "../../store/cliente/clientSlice";
import { CadastroClienteInterface } from "../../store/cliente/interfaces/cliente";
import { Loading } from "../../components/loading";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const CadastroCliente = () => {
  const [addCliente, { isLoading }] = clienteApi.useAddClientMutation();
  const cliente = useSelector((state: RootState) => state.cliente);
  const { register, handleSubmit } = useForm<CadastroClienteInterface>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit_ok({
    nome,
    sobrenome,
    cpf,
    senha,
    dataNascimento,
    genero,
    tipoTelefone,
    dddTelefone,
    numeroTelefone,
  }: CadastroClienteInterface) {
    cpf = cpf.replace(/[^\d]/g, "");
    dddTelefone = Number(dddTelefone);
    numeroTelefone = Number(numeroTelefone);

    dispatch(
      setDadosCliente({
        nome,
        sobrenome,
        cpf,
        senha,
        dataNascimento,
        genero,
        tipoTelefone,
        dddTelefone,
        numeroTelefone,
      })
    );
    addClinetesss();
  }
  function addClinetesss() {
    addCliente(cliente).then((res) => {
      navigate("/login");
    });
  }
  return (
    <>
      {isLoading && <Loading />}
      <Container className=" d-flex justify-content-center align-items-center vh-100">
        <Container className="w-100">
          <Form onSubmit={handleSubmit(handleSubmit_ok)}>
            <h2>Dados Pessoais</h2>
            <Row>
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control {...register("nome")} type="text" placeholder="digite seu nome" />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Sobrenome</Form.Label>
                  <Form.Control {...register("sobrenome")} type="text" placeholder="digite seu sobrenome" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={8}>
                <Form.Group className="mb-3">
                  <Form.Label>CPF</Form.Label>
                  <InputMask {...register("cpf")} mask="999.999.999-99">
                    {
                      ((props: any) => (
                        <Form.Control type="text" placeholder="digite seu CPF" {...props} />
                      )) as unknown as ReactNode
                    }
                  </InputMask>
                </Form.Group>
              </Col>
              <Col xs={12} sm={4}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Genero</Form.Label>
                  <Form.Select {...register("genero")} aria-label="Default select example">
                    <option>genero</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Label>Senha</Form.Label>
              <Form.Control {...register("senha")} type="password" className="mb-3" placeholder="digite sua senha" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Data de nascimento</Form.Label>
              <Form.Control
                {...register("dataNascimento")}
                type="date"
                placeholder="selecione sua data de nascimento"
                datatype="dd/mm/yyyy"
              />
            </Form.Group>
            <Row>
              <Col xs={12} sm={2}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Tipo de Telefone</Form.Label>
                  <Form.Control {...register("tipoTelefone")} type="text" placeholder="digite o tipo do seu telefone" />
                </Form.Group>
              </Col>
              <Col xs={12} sm={1}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>DDD</Form.Label>
                  <Form.Control {...register("dddTelefone")} type="text" placeholder="digite ddd do seu telefone" />
                </Form.Group>
              </Col>

              <Col xs={12} sm={9}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    {...register("numeroTelefone")}
                    type="text"
                    placeholder="digite o seu numero de telefone"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="w-100">
              Cadastrar
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  );
};
