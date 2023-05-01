import {Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import React from "react";

interface Props {
  id: number,
  name: string,
  price: number
  url_picture: string
  categoria: string
}

export const Product = ({url_picture, name, price, id, categoria}: Props) => {
  const [imagem, setImagem] = React.useState('')
  const navigate = useNavigate();

  function handleDescription() {
    navigate(`/detalhes-produto?id=${id}`);
  }

  React.useLayoutEffect(() => {

    (async () => {
      const img = await import(url_picture)
      setImagem(img.default)
    })()
  }, [])

  return (
    <Card
      role="button" onClick={handleDescription}
      style={{width: "280px", height: "380px"}}
      className="m-2 border border-0 shadow p-3 mb-5 bg-body-tertiary rounded :hover{transform:scale(0.2)}"
    >
      <div className="bg-info w-50 d-flex justify-content-center">
        {categoria}
      </div>
      <Card.Img variant="top" src={imagem}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>R${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
