import { Button, Container } from "react-bootstrap";
import { mockPedidoComCliente } from "../../../mocks/pedidos";
import { OrderedItems } from "../../../components/ordered-items";
import { LabelHeader } from "../../../components/label-header";

export const AdmOrderDetails = () => {
  const order = mockPedidoComCliente;
  return (
    <Container className="p-5 d-flex flex-column align-items-center justify-content-center">
      <LabelHeader label={`Detalhes pedido  ${order.data.idPedido}`} />
      <Container className="border px-3">
        <div className="d-flex flex-column gap-4 border-bottom py-4">
          <div className="d-flex justify-content-between">
            <h4 className="text-primary">Dados pedido</h4>
            <Button>Confirmar pagamento</Button>
          </div>
          <div className="d-flex flex-column align-items-start justify-content-center">
            <span>Valor total R${order.data.valorTotal}</span>
            <span>Valor frete R${order.data.valorFrete}</span>
            <span>Data realização pedido {order.data.dataPedido}</span>
            <h2 className="text-primary fw-bold">{order.data.status}</h2>
          </div>
        </div>
        <div className="border-bottom py-4">
          <h4 className="text-primary">Itens pedido</h4>
          <div className="d-flex  align-items-center justify-content-center">
            {order.data.itensPedido.map((item) => (
              <OrderedItems
                key={item.idProduto}
                quantity={item.quantidade}
                size={item.tamanho}
                totalPrice={item.valorTotal}
                name={item.nomeProduto}
                unityPrice={item.valorUnitario}
              />
            ))}
          </div>
        </div>
        <div className="border-bottom py-4">
          <h4 className="text-primary">Dados entrega</h4>
          <div className="d-flex flex-column">
            <span>Endereco entrega: {order.data.enderecoEntrega.logradouro}</span>
            <span>Bairro: {order.data.enderecoEntrega.bairro}</span>
            <span>Cidade: {order.data.enderecoEntrega.cidade}</span>
            <span>Estado: {order.data.enderecoEntrega.estado}</span>
          </div>
        </div>
        <div className="border-bottom py-4">
          <h4 className="text-primary">Dados cliente</h4>
          <div className="d-flex flex-column">
            <span>Nome: {order.data.cliente.nome}</span>
            <span>CPF: {order.data.cliente.cpf}</span>
            <span>Email: {order.data.cliente.email}</span>
          </div>
        </div>
        <div className="border-bottom py-4">
          <h4 className="text-primary">Informações pagamento</h4>
          <div className="d-flex flex-column">
            <span>Forma pagamento: {order.data.formaPagamento}</span>
            <span>Numero cartão: {order.data.cartao.numero}</span>
            <span>Nome titular: {order.data.cartao.nome}</span>
            <span>Validade: {order.data.cartao.validade}</span>
          </div>
        </div>
      </Container>
    </Container>
  );
};
