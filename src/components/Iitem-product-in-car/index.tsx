import { MinusCircle, PlusCircle, X } from "phosphor-react";
import React, { useState } from "react";
import { Button, Col, Container, Figure, Row } from "react-bootstrap";
import { productApi } from "../../redux/domain/product/product-api";
import { Loading } from "../loading";

import { shoppingCartApi } from "../../redux/domain/carrinho/shopping-cart-api";
import { getIdClient } from "../../utils/get-id-client";
import { oneTenis } from "../../mocks/tenis";
import { ReactJSXElementAttributesProperty } from "@emotion/react/types/jsx-namespace";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  quantidade: number;
  valorTotal: string;
  tamanho: number;
  produtoId: number;
  itemCarrinhoId: number;
  refecth: () => void;
}

export const ItemProductCar = ({ tamanho, quantidade, valorTotal, produtoId, itemCarrinhoId, refecth, ...props }: Props) => {
  // const {
  //   isLoading: productIsLoading,
  //   data: productData,
  //   isSuccess,
  // } = productApi.useGetOneProductQuery({ id: produtoId });
  const [quantity, setQuantity] = useState(quantidade);
  const [imagem, setImagem] = React.useState();

  //mocks
  const isSuccess = true;
  const productIsLoading = false;
  const deleteItemInCar = () => console.log("deleteItemInCar");
  const productData = oneTenis;
  const minusQuantity = () => console.log("minusQuantity");
  const addQuantity = () => console.log("addQuantity");

  // const [deleteItem] = shoppingCartApi.useDeleteProductInCarMutation();
  // const [updateItem, { isSuccess: updateIsSuccess }] = shoppingCartApi.useUpdateProductInCarMutation();
  React.useLayoutEffect(() => {
    (async () => {
      if (isSuccess) {
        const img1 = await import(productData!.data.url_ft1);
        setImagem(img1.default);
      }
    })();
  }, [isSuccess]);
  // React.useEffect(() => {
  //   if (updateIsSuccess) {
  //     refecth();
  //   }
  // }, [updateIsSuccess]);
  // React.useEffect(() => {
  //   updateItemCar();
  // }, [quantity]);
  // function addQuantity() {
  //   setQuantity(quantity + 1);
  // }

  // function minusQuantity() {
  //   setQuantity(quantity - 1);
  // }
  // function deleteItemInCar() {
  //   deleteItem({ itemCarrinhoId });
  //   refecth();
  // }
  // function updateItemCar() {
  //   updateItem({ itemCarrinhoId, quantidadeProduto: quantity });
  // }

  return (
    <Container {...props} className="d-flex flex-column justify-content-between gap-3 p-5 border border-primary rounded">
      {productIsLoading && <Loading />}
      <div title="Clique para retirar item do carrinho" className="d-flex justify-content-end hover">
        <X role={"button"} onClick={deleteItemInCar} size={24} />
      </div>
      <Row className="border-bottom">
        <Col>
          <Figure.Image width={171} height={180} src={imagem} />
        </Col>
        <Col>
          <h3>{productData?.data.nome}</h3>
          <p>Tamanho: {tamanho}</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex gap-3 align-items-center">
          <span>Quantidade:</span>
          <Button size="sm" variant="light" onClick={minusQuantity} disabled={quantity <= 1}>
            <MinusCircle size={20} />
          </Button>
          <span className="border p-1 px-3">{quantity}</span>
          <Button size="sm" variant="light" onClick={addQuantity}>
            <PlusCircle size={20} />
          </Button>
        </Col>
        <Col>
          <p className="fs-2 fw-bolder text-primary">R${valorTotal}</p>
        </Col>
      </Row>
    </Container>
  );
};
