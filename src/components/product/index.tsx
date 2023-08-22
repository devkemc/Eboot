import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import React from "react";

interface Props {
  id: number;
  name: string;
  price: number;
  url_picture: string;
  categoria: string;
  description: string;
}

export const Product = ({ url_picture, name, price, id, categoria, description }: Props) => {
  const [imagem, setImagem] = React.useState("");
  const navigate = useNavigate();

  function handleDescription() {
    navigate(`/detalhes-produto?id=${id}`);
  }

  React.useLayoutEffect(() => {
    (async () => {
      const img = await import(url_picture);
      setImagem(img.default);
    })();
  }, []);

  return (
    <Card
      role="button"
      onClick={handleDescription}
      style={{ width: "280px", height: "380px" }}
      className="m-2 border border-primary-subtle  p-3 mb-5 bg-body-tertiary rounded"
    >
      <span className="bg-info w-50 d-flex justify-content-center rounded">{categoria}</span>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center" style={{ width: "170px", height: "170px" }}>
          <Card.Img variant="top" src={imagem} />
        </div>
      </div>

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="fs-2 fw-semibold text-primary">R${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
