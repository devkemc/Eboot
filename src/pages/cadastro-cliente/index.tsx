import React, { ReactNode, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { clientApi } from "../../Redux/domain/cliente/client-api";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/loading";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/root/store";
import { ArrowCircleLeft } from "phosphor-react";
import * as yup from "yup";
import {toast} from "react-toastify";

interface CadastroForm {
  nome: string;
  sobrenome: string;
  cpf: string;
  genero: string;
  dataNascimento: string;
  email: string;
  senha: string;
  confimeSenha: string;
  tipoTelefone: string;
  dddTelefone: number;
  numeroTelefone: number;
  tipoImovel: string;
  tipoEndereco: string;
  tipoLogradouro: string;
  logradouro: string;
  numeroEndereco: string;
  bairro: string;
  cep: string;
  nomeCidade: string;
  nomeEstado: string;
}

export const CadastroCliente = () => {
  const [addCliente, { isLoading: ClientIsLoading, data: ClientData, isSuccess: ClientSuccess, isError:ClientError }] = clientApi.useAddClientMutation();
  const [currentForm, setCurrentForm] = useState(1);
  const schema = yup.object().shape({
    senha: yup.string().required(),
    confirmeSenha: yup
      .string()
      .required()
      .oneOf([yup.ref("senha")], "As senhas devem ser iguais"),
  });
  const client = useSelector((state: RootState) => state.client);
  console.log(client)
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<CadastroForm>();
  const [viewPassword, setViewPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit_ok({
    nome,
    sobrenome,
    cpf,
    senha,
    dataNascimento,
    genero,
    tipoTelefone,
    dddTelefone,
    numeroTelefone,
    tipoEndereco,
    tipoImovel,
    tipoLogradouro,
    logradouro,
    numeroEndereco,
    bairro,
    cep,
    nomeCidade,
    nomeEstado,
  }: CadastroForm) {
    cpf = cpf.replace(/[^\d]/g, "");
    cep = cep.replace(/[^\d]/g, "");
    dddTelefone = Number(dddTelefone);
    numeroTelefone = Number(numeroTelefone);
    const email = client.email ? client.email : 'teste'
     addCliente({
      email,
      nome,
      sobrenome,
      cpf,
      senha,
      dataNascimento,
      genero,
      tipoTelefone,
      dddTelefone,
      numeroTelefone,
      tipoEndereco,
      tipoImovel,
      tipoLogradouro,
      logradouro,
      numeroEndereco,
      bairro,
      cep: Number(cep),
      nomeCidade,
      nomeEstado,
    });
  }

  React.useEffect(()=>{
    if(ClientSuccess){
      toast.success(`Seu cadastro foi realizado com sucesso ${getValues('nome')}`)
      navigate('/login')
    }
    if(ClientError){
      toast.error('Deu um erro no seu cadastro, tente novamente!')
      reset()
      navigate('/login')
    }
  },[ClientSuccess])

  return (
    <>
      {ClientIsLoading && <Loading />}
      <Container className=" d-flex justify-content-center align-items-center vh-100">
        <Container className="w-100 shadow p-5 bg-body-tertiary rounded">
          <form onSubmit={handleSubmit(handleSubmit_ok)}>
            {currentForm === 1 && (
              <>
                <div className="d-flex w-100 justify-content-center ">
                  <h2>Dados Pessoais</h2>
                </div>
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
                      <Form.Label>Gênero</Form.Label>
                      <Form.Select {...register("genero")} aria-label="Default select example">
                        <option>Selecione gênero</option>
                        <option value="MASCULINO">Masculino</option>
                        <option value="FEMININO">Feminino</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label>Senha</Form.Label>
                      <Form.Control
                        {...register("senha")}
                        type={viewPassword ? "text" : "password"}
                        className="mb-3"
                        placeholder="digite sua senha"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label>Repita a senha</Form.Label>
                      <Form.Control
                        {...register("confimeSenha")}
                        type={viewPassword ? "text" : "password"}
                        className="mb-3"
                        placeholder="digite sua senha novamente"
                      />
                    </Form.Group>
                  </Col>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Mostrar senhas"
                      onChange={() => {
                        setViewPassword(!viewPassword);
                      }}
                    />
                  </Form.Group>
                </Row>
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
                      <Form.Select {...register("tipoTelefone")} aria-label="Default select example">
                        <option>Selecione tipo de telefone</option>
                        <option value="CELULAR">Celular</option>
                        <option value="FIXO">Fixo</option>
                      </Form.Select>
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
                <Button
                  variant="primary"
                  type="button"
                  className="w-100"
                  onClick={() => {
                    setCurrentForm(2);
                  }}
                >
                  Proximo
                </Button>
              </>
            )}
            {currentForm == 2 && (
              <>
                <div className="d-flex w-100 justify-content-center ">
                  <h2>Dados Endereço</h2>
                </div>
                <a
                  title="voltar"
                  onClick={() => {
                    setCurrentForm(1);
                  }}
                >
                  <ArrowCircleLeft cursor="pointer" size={24} color="#5e5c64" />
                </a>

                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tipo de endereço</Form.Label>
                      <Form.Select {...register("tipoEndereco")} aria-label="Default select example">
                        <option>Selecione tipo de endereço</option>
                        <option value="COBRANCA">Cobrança</option>
                        <option value="ENTREGA">Entrega</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tipo de Imovel</Form.Label>
                      <Form.Select {...register("tipoImovel")} aria-label="Default select example">
                        <option>Selecione tipo de Imovel</option>
                        <option value="COMERCIAL">Comercial</option>
                        <option value="RESIDENCIAL">Residencial</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={2}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tipo de Logradouro</Form.Label>
                      <Form.Select {...register("tipoLogradouro")} aria-label="Default select example">
                        <option>Selecione tipo de Imovel</option>
                        <option value="RUA">Rua</option>
                        <option value="AVENIDA">Avenida</option>
                        <option value="PRACA">Praça</option>
                        <option value="ESTRADA">Estrada</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={9}>
                    <Form.Group className="mb-3">
                      <Form.Label>Logradouro</Form.Label>
                      <Form.Control type="text" placeholder="digite logradouro" {...register("logradouro")} />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={1}>
                    <Form.Group className="mb-3">
                      <Form.Label>Número</Form.Label>
                      <Form.Control type="text" placeholder="digite numero" {...register("numeroEndereco")} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label>Bairro</Form.Label>
                      <Form.Control {...register("bairro")} className="mb-3" placeholder="digite seu bairro" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>CEP</Form.Label>
                      <InputMask {...register("cep")} mask="99999-999">
                        {
                          ((props: any) => (
                            <Form.Control type="text" placeholder="digite seu cep" {...props} />
                          )) as unknown as ReactNode
                        }
                      </InputMask>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Cidade</Form.Label>
                      <Form.Control {...register("nomeCidade")} type="text" placeholder="digite sua cidade" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Estado</Form.Label>
                      <Form.Control {...register("nomeEstado")} type="text" placeholder="digite seu estado" />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit" className="w-100" onClick={handleSubmit(handleSubmit_ok)}>
                  Cadastrar
                </Button>
              </>
            )}
          </form>
        </Container>
      </Container>
    </>
  );
};
