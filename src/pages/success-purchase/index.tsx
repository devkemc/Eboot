import { Check } from "phosphor-react";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const SuccessPurchase = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    setTimeout(() => {
      navigate("/profile");
    }, 1500);
  },[])
  
  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center vh-100 position-fixed">
      <div className="d-flex flex-column align-items-center justify-content-center p-3 mb-5 bg-body-tertiary p-2 mb-2 border-opacity-25 rounded">
        <Check size={600} color="#cc4e10" />
        <span className="fs-2 text-primary">Compra realizada com sucesso</span>
      </div>
    </Container>
  );
};
