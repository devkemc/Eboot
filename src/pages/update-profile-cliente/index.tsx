import { ReactNode, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactInputMask from "react-input-mask";
import { clienteApi } from "../../store/cliente/apiSlice";
import { Loading } from "../../components/loading";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ListCliente } from "./lista";
interface personalData {
  id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  genero: string;
  dataNascimento: string;
  email: string;
  senha: string;
}
export const UpdateProfileClient = () => {
  const cliente = useSelector((state: RootState) => state.cliente);
  const [updateClient, { isSuccess }] = clienteApi.useUpdateClientMutation();
  const { isLoading, data } = clienteApi.useGetOneClientQuery({ id: cliente.id });
  const { register, handleSubmit, setValue, getValues } = useForm<personalData>();

  useEffect(() => {
    if (!isLoading) {
      setValue("id", data!.data!.id);
      setValue("nome", data!.data!.nome);
      setValue("sobrenome", data!.data!.sobrenome);
      setValue("cpf", data!.data!.cpf);
      setValue("email", data!.data!.email);
      setValue("senha", data!.data!.senha);
      setValue("dataNascimento", data!.data!.dataNascimento.slice(0, 10));
    }
  }, [data]);
  async function submit(cliente: personalData) {
    const payload = await updateClient(cliente);
    if (payload.error) {
      alert(payload.error.data.message);
    } else {
      alert(payload.data.message);
    }
  }

  return (
    <>
      {isLoading && <Loading />}
      <Container className="shadow p-3 mb-5 bg-body-tertiary rounded">
        <Form className="w-100" onSubmit={handleSubmit(submit)}>
          <h2>Alterar cadastro</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control {...register("nome")} type="text" placeholder="digite seu nome" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control {...register("sobrenome")} type="text" placeholder="digite seu sobrenome" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Senha</Form.Label>
            <Form.Control {...register("senha")} type="password" className="mb-3" placeholder="digite sua senha" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" placeholder="digite seu CPF" {...register("cpf")} maxLength={11} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Data de nascimento</Form.Label>
            <Form.Control
              {...register("dataNascimento")}
              type="date"
              defaultValue={getValues("dataNascimento")}
              placeholder="selecione sua data de nascimento"
              datatype="dd/mm/yyyy"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Atualizar
          </Button>
        </Form>
      </Container>
    </>
  );
};
