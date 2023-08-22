import { Container, Pagination, Table } from "react-bootstrap";
import { pedidosMock } from "../../../mocks/pedidos";
import { useNavigate } from "react-router-dom";

export const OrdersList = () => {
  const isLoading = false;
  const data = pedidosMock;
  const navigate = useNavigate();
  return (
    <Container className="p-5 d-flex flex-column align-items-center justify-content-center">
      <h3 className="text-primary">Pedidos</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Número pedido</th>
            <th>Valor Pedido</th>
            <th>Valor Frete Pedido</th>
            <th>Data Realização pedido</th>
            <th>Status Pedido</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            data?.data.map((order) => {
              return (
                <tr key={order.idPedido}>
                  <td>{order.idPedido}</td>
                  <td>{`${order.valorTotal}`}</td>
                  <td>{order.valorFrete}</td>
                  <td>{order.dataPedido}</td>
                  <td>{order.status}</td>
                  <td className="d-flex align-items-center gap-5 justify-content-center">
                    <a className="text-primary" role="button"
                      onClick={() => {
                        navigate("/adm/order-details");
                      }}
                    >
                      Detalhes pedido
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
