import { Container, Pagination, Table } from "react-bootstrap";
import { clienteApi } from "../../store/cliente/apiSlice";

export const ConsultarClientes = () => {
  const { isLoading, data } = clienteApi.useGetClientsQuery();
  const [inativeClient] = clienteApi.useInativeClientMutation();
  return (
    <Container className="p-5 d-flex flex-column align-items-center justify-content-center vh-100">
      <h3>Clientes</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Ranking</th>
            <th>Genero</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            data?.data.map((cli) => {
              return (
                <tr key={cli.id}>
                  <td>{`${cli.nome} ${cli.sobrenome}`}</td>
                  <td>{cli.cpf}</td>
                  <td>{cli.email}</td>
                  <td>{cli.ranking}</td>
                  <td>{cli.genero}</td>
                  <td>{cli.isActive ? "Ativo" : "Desativado"}</td>
                  <td className="d-flex align-items-center gap-5 justify-content-center">
                    <a
                      onClick={() => {
                        inativeClient({ id: cli.id });
                      }}
                      href=""
                    >
                      Desativar
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Container className="w-100 d-flex justify-content-center">
        <Pagination>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
        </Pagination>
      </Container>
    </Container>
  );
};
