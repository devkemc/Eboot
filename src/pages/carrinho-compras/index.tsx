import {Col, Container, Row} from "react-bootstrap";
import {ItemProductCar} from "../../components/Iitem-product-in-car";
import {PurchaseSumary} from "../../components/purchase-summary";
import {shoppingCartApi} from "../../Redux/domain/carrinho/shopping-cart-api";
import {Loading} from "../../components/loading";
import React from "react";
import {getIdClient} from "../../utils/get-id-client";
import {CarrinhoVazio} from "../../components/carrinho-vazio";

export const CarrinhoCompras = () => {

  const {isLoading, data, isSuccess, refetch} = shoppingCartApi.useGetShoppingCartQuery({id: getIdClient()!})
  React.useEffect(() => {
    refetch()
  }, [])
  return (
    <Container fluid="sm" className="p-5 vh-100">
      {isLoading && <Loading/>}
      {isSuccess && (<Row>
        <Col xs={12} sm={8}>
          <h3>Meu carrinho</h3>
          {data?.data.itensCarrinho.length != 0 ? (<Container fluid className="d-flex flex-column gap-1">
            {data?.data.itensCarrinho.map((item) => {
              return (<ItemProductCar key={item.icar_id} valorTotal={Number(item.icar_valor_total).toLocaleString()}
                                      produtoId={item.produto_id}
                                      quantidade={item.icar_quantidade} tamanho={item.tamanho.tam_tamanho}
                                      itemCarrinhoId={item.icar_id} refecth={refetch}/>)
            })}

          </Container>) : (<CarrinhoVazio/>)}

        </Col>

        <Col xs={12} sm={4}>
          <h3>Resumo da compra</h3>
          <Container fluid className="shadow p-3 mb-5 bg-body-tertiary rounded">
            <PurchaseSumary quantidadeItensCarrinho={data!.data!.itensCarrinho!.length}
                            valorTotal={Number(data!.data.valorTotalCarrinho).toLocaleString()}
                            buttonDisabled={data!.data!.itensCarrinho!.length < 1}/>
          </Container>
        </Col>
      </Row>)}

    </Container>
  );
};
