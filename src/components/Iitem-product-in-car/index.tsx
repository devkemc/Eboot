import {MinusCircle, PlusCircle, X} from "phosphor-react";
import React, {useState} from "react";
import {Button, Col, Container, Figure, Row} from "react-bootstrap";
import {productApi} from "../../Redux/domain/product/product-api";
import {Loading} from "../loading";


import {shoppingCartApi} from "../../Redux/domain/carrinho/shopping-cart-api";
import {getIdClient} from "../../utils/get-id-client";



interface Props {
  quantidade: number
  valorTotal: string
  tamanho: number
  produtoId: number
  itemCarrinhoId:number
  refecth: () => void

}

export const ItemProductCar = ({tamanho, quantidade, valorTotal, produtoId, itemCarrinhoId, refecth}: Props) => {
  const {isLoading: productIsLoading, data: productData, isSuccess} = productApi.useGetOneProductQuery({id: produtoId})
  const [quantity, setQuantity] = useState(quantidade);
  const [imagem, setImagem] = React.useState()
  const [deleteItem ] = shoppingCartApi.useDeleteProductInCarMutation()
  const [updateItem,{isSuccess: updateIsSuccess}] = shoppingCartApi.useUpdateProductInCarMutation()
  React.useLayoutEffect(() => {
    (async () => {
      if (isSuccess) {
        const img1 = await import(productData!.data.url_ft1)
        setImagem(img1.default)
      }
    })()

  }, [isSuccess])
  React.useEffect(()=>{
    if(updateIsSuccess){
      refecth()
    }
  },[updateIsSuccess])
  React.useEffect(()=>{
    updateItemCar()
  },[quantity])
  function addQuantity() {
    setQuantity(quantity + 1);

  }

  function minusQuantity() {
    setQuantity(quantity - 1);
  }
  function deleteItemInCar(){
    deleteItem({itemCarrinhoId})
    refecth()


  }
  function updateItemCar(){
    updateItem({itemCarrinhoId, quantidadeProduto: quantity})

  }
  return (
    <Container
      className="d-flex flex-column justify-content-between gap-3 p-5 shadow p-3 mb-5 bg-body-tertiary rounded">
      {productIsLoading && <Loading/>}
      <div className='d-flex justify-content-end hover'><X role={"button"} onClick={deleteItemInCar} size={24} /></div>
      <Row className="border-bottom">
        <Col>
          <Figure.Image width={171} height={180} src={imagem}/>
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
            <MinusCircle size={20}/>
          </Button>
          <span className="border p-1 px-3">{quantity}</span>
          <Button size="sm" variant="light" onClick={addQuantity}>
            <PlusCircle size={20}/>
          </Button>
        </Col>
        <Col>
          <p className="fs-2 fw-bolder">R${valorTotal}</p>
        </Col>
      </Row>
    </Container>
  );
};
