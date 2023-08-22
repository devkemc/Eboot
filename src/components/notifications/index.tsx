import { Modal } from "react-bootstrap";
import { pedidosMock } from "../../mocks/pedidos";
import { ItemNotification } from "./item-notification";
interface TradeRequestsProps {
  show: boolean;
  setShow: (show: boolean) => void;
}
export const ModalNotifications = ({ setShow, show }: TradeRequestsProps) => {
  const aproved = pedidosMock;
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">Pendências</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-between p-5">
        <div className="d-flex flex-column gap-4">
          {aproved.data.map((order) => (
            <ItemNotification
              key={order.idPedido}
              title={order.status}
              dataPedido={order.dataPedido}
              formaPagamento={order.formaPagamento}
              idPedido={order.idPedido}
              valorPedido={order.valorTotal}
              setShow={setShow}
            />
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};
