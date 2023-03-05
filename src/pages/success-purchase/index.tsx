import { Check } from "phosphor-react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const SuccessPurchase = () => {
  const navigate = useNavigate();
  function handleHome() {
    navigate("/");
  }
  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center vh-100 position-fixed">
      <div className="d-flex flex-column align-items-center justify-content-center shadow p-3 mb-5 bg-body-tertiary border border-primary p-2 mb-2 border-opacity-25 rounded">
        <Check size={320} color="#1c71d8" />
        <span className="fs-2 text-primary">Compra realizada com sucesso</span>
      </div>
      <Button variant="outline-primary" className="w-50" onClick={handleHome}>
        Ir para incio
      </Button>
    </Container>
  );
};
