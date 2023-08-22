import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
interface ItemNotificationProps {
  title: string;
  idPedido: number;
  valorPedido: number;
  formaPagamento: string;
  dataPedido: string;
  setShow: (show: boolean) => void;
}
export const ItemNotification: React.FC<ItemNotificationProps> = ({
  dataPedido,
  formaPagamento,
  idPedido,
  title,
  valorPedido,
  setShow
}) => {
  const navigate = useNavigate();
  return (
    <div className="border border-primary-subtle p-3 rounded">
      <h3 className="text-primary">{title}</h3>
      <div>
        <p>Numero pedido: {idPedido}</p>
        <p>Valor total do pedido: R${valorPedido}</p>
        <p>Forma pagamento do pedido: {formaPagamento}</p>
        <p>Data realização do pedido: {new Date(dataPedido).toLocaleDateString()}</p>
      </div>
      <div className="d-flex justify-content-between">
        <Button
          variant="outline-primary"
          onClick={() => {
            navigate("/adm/order-details");
            setShow(false);
          }}
        >
          Detalhes
        </Button>
        <div className="d-flex gap-2">
          <Button variant="outline-primary">Recusar</Button>
          <Button>Aprovar</Button>
        </div>
      </div>
    </div>
  );
};
