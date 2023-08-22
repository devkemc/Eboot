import { Button, Col, Modal } from "react-bootstrap";
import { mockPedido } from "../../mocks/pedidos";
import { PhoneDisconnect } from "phosphor-react";
import { OrderedItems } from "../ordered-items";

interface OrderDetailsProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const OrderDetails = ({ show, setShow }: OrderDetailsProps) => {
  const pedido = mockPedido;
  return (
    <Modal show={show} size="xl" onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">Detalhes do pedido</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-between p-5">
        <Col md={5} className="border  rounded p-3">
          <h4 className="text-primary fw-semibold">Itens do pedido</h4>
          {pedido.data.itensPedidos.map((item) => (
            <OrderedItems
              key={item.idProduto}
              name={item.nomeProduto}
              quantity={item.quantidade}
              size={item.tamanho}
              totalPrice={item.valorTotal}
              unityPrice={item.valorUnitario}
            />
          ))}
        </Col>
        <Col md={6} className="border rounded p-3">
          <h4 className="text-primary fw-semibold">Resumo da compra</h4>
          <div className="d-flex flex-column">
            <div className="d-flex p-2 flex-column align-items-center w-100">
              <div className="d-flex align-items-center gap-2">
                <span className="fs-4">Pedido</span>
                <span className=" fs-3 semi-bold text-primary">{pedido.data.idPedido}</span>
              </div>
              <span>Realizado em {new Date(pedido.data.dataPedido).toLocaleDateString()}</span>
              <div className=" mt-2 w-100 border-bottom"></div>
            </div>
            <div className="d-flex p-2 w-100 align-items-center flex-column px-5">
              <div className="d-flex align-items-center gap-3">
                <span className="fs-4 text-primary">Endereço de entrega</span>
              </div>
              <span>
                {pedido.data.enderecoEntrega.logradouro}, {pedido.data.enderecoEntrega.bairro}
              </span>
              <span>{pedido.data.enderecoEntrega.cidade}</span>
              <span>{pedido.data.enderecoEntrega.estado}</span>
              <span>{pedido.data.enderecoEntrega.cep}</span>
              <div className=" mt-2 w-100 border-bottom"></div>
            </div>
            <div className="d-flex p-2 w-100 align-items-center flex-column px-5">
              <span className="fs-4 text-primary">Forma de pagamento</span>
              {pedido.data.formaPagamento}
              <div className=" mt-2 w-100 border-bottom"></div>
            </div>
            <div className="d-flex p-2 w-100 align-items-center flex-column px-5">
              <span className="fs-4 text-primary">Total da compra</span>
              <div className="d-flex justify-content-between w-100">
                <ul className="w-100">
                  <li className="d-flex justify-content-between w-100">
                    <span>Subtotal de produtos</span>
                    <span>R$ {pedido.data.subtotalProdutos}</span>
                  </li>
                  <li className="d-flex justify-content-between w-100">
                    <span>Frete</span>
                    <span>R$ {pedido.data.valorFrete}</span>
                  </li>
                </ul>
              </div>

              <div className=" mt-2 w-100 border-bottom"></div>
            </div>
            <div className="d-flex p-2 w-100 align-items-center flex-column">
              <div className="d-flex align-items-center gap-3">
                <span className="fs-4 text-primary">Valor total</span>
                <span className="fs-3 fw-semibold text-primary">R$ {pedido.data.valorTotal}</span>
              </div>
            </div>
            <div className="d-flex gap-3 py-5">
              <Button className="w-100 mt-3" variant="outline-primary">
                Solicitar troca
              </Button>
              <Button className="w-100 mt-3" variant="outline-primary">
                Solicitar devolução
              </Button>
            </div>
          </div>
        </Col>
      </Modal.Body>
    </Modal>
  );
};
