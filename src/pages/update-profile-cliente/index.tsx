import { ReactNode, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactInputMask from "react-input-mask";
import { clientApi } from "../../redux/domain/cliente/client-api";
import { Loading } from "../../components/loading";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/root/store";

import { selectAuth } from "../../redux/domain/auth/auth-slice";
import { toast } from "react-toastify";
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
  const { id } = useSelector(selectAuth);
  const [updateClient, { isSuccess: updateUser, data: updateClientData, isLoading: updateIsLoading }] =
    clientApi.useUpdateClientMutation();
  const { isLoading, data: clientData, isSuccess: clientGetSuccess } = clientApi.useGetOneClientQuery({ id });
  const { register, handleSubmit, setValue, getValues } = useForm<personalData>();

  useEffect(() => {
    if (updateUser) {
      console.log(updateClientData);
      toast.success("Dados atualizados com sucesso");
    }
    if (clientGetSuccess) {
      console.log(clientData);
      setValue("id", clientData.data!.id);
      setValue("nome", clientData.data!.nome);
      setValue("sobrenome", clientData.data!.sobrenome);
      setValue("cpf", clientData.data!.cpf);
      setValue("email", clientData.data!.email);
      setValue("dataNascimento", clientData.data!.dataNascimento.slice(0, 10));
    }
  }, [clientData]);

  useEffect(() => {
    if (updateUser) {
      console.log(updateClientData);
      toast.success("Dados atualizados com sucesso");
    }
    if (clientGetSuccess) {
      setValue("id", updateClientData.data!.id);
      setValue("nome", updateClientData.data!.nome);
      setValue("sobrenome", updateClientData.data!.sobrenome);
      setValue("cpf", updateClientData.data!.cpf);
      setValue("email", updateClientData.data!.email);
      setValue("dataNascimento", updateClientData.data!.dataNascimento.slice(0, 10));
    }
  }, [updateClientData]);
  async function submit(cliente: personalData) {
    await updateClient(cliente);
  }

  return (
    <>
      {(isLoading || updateIsLoading) && <Loading />}
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control {...register("email")} type="text" placeholder="digite seu email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CPF</Form.Label>
            <Form.Control disabled type="text" placeholder="digite seu CPF" {...register("cpf")} maxLength={11} />
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
