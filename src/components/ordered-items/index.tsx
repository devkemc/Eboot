import { Col } from "react-bootstrap";
import Tenis from "../../assets/tenis.jpg";

interface OrderedItemsProps {
  name: string;
  unityPrice: number;
  quantity: number;
  totalPrice: number;
  size: number;
}
export const OrderedItems = ({ name, quantity, totalPrice, unityPrice, size }: OrderedItemsProps) => {
  return (
    <div className="d-flex py-2 px-1">
      <Col md={6} className="d-flex align-items-cneter justify-content-center">
        <img style={{ height: "100px", width: "100px" }} src={Tenis} />
      </Col>
      <Col md={6}>
        <h2 className="text-primary">{name}</h2>
        <div className="d-flex flex-column">
          <span>Tamanho: {size}</span>
          <span>Quantidade: {quantity}</span>
          <span>Preço unitário: R${unityPrice}</span>
        </div>
        <div className="w-100 d-flex justify-content-end">
          <span className="fs-4 text-primary">R${totalPrice}</span>
        </div>
      </Col>
    </div>
  );
};
