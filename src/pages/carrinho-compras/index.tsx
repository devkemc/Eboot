import { Col, Container, Row } from "react-bootstrap";
import { ItemProductCar } from "../../components/Iitem-product-in-car";
import { PurchaseSumary } from "../../components/purchase-summary";
import { shoppingCartApi } from "../../redux/domain/carrinho/shopping-cart-api";
import { Loading } from "../../components/loading";
import React from "react";
import { getIdClient } from "../../utils/get-id-client";
import { CarrinhoVazio } from "../../components/carrinho-vazio";
import { useAppDispatch } from "../../redux/root/hooks";
import { carSlice, setCar } from "../../redux/domain/carrinho/car-slice";
import { itensCarrinho } from "../../mocks/tenis";
import { LabelHeader } from "../../components/label-header";

export const CarrinhoCompras = () => {
  // const { isLoading, data, isSuccess, refetch } = shoppingCartApi.useGetShoppingCartQuery({ id: getIdClient()! });
  const isLoading = false;
  const isSuccess = true;
  const data = itensCarrinho;
  const refetch = () => console.log("refetch");

  // const dispatch = useAppDispatch();
  // React.useEffect(() => {
  //   refetch();
  //   if (isSuccess) {
  //     dispatch(setCar(data!.data));
  //   }
  // }, [data]);
  if (isLoading) return <Loading />;
  return (
    <Container fluid="sm" className="p-5 vh-100">
      <Row>
        <Col xs={12} sm={8}>
          <LabelHeader label="Meu carrinho" />
          {data?.data.itensCarrinho.length != 0 ? (
            data?.data.itensCarrinho.map((item) => {
              return (
                <ItemProductCar
                  key={item.icr_id}
                  valorTotal={Number(item.icr_valor_total).toLocaleString()}
                  produtoId={item.icr_prd_id}
                  quantidade={item.icr_quantidade}
                  tamanho={item.tamanho.tam_tamanho}
                  itemCarrinhoId={item.icr_id}
                  refecth={refetch}
                  style={ {marginBottom: "20px"} }
                />
              );
            })
          ) : (
            <CarrinhoVazio />
          )}
        </Col>

        <Col xs={12} sm={4}>
          <LabelHeader label="Resumo da compra" />
          <Container fluid className="border rounded py-2" >
            <PurchaseSumary
              quantidadeItensCarrinho={data!.data!.itensCarrinho!.length}
              valorTotal={Number(data!.data.valorTotalCarrinho).toLocaleString()}
              buttonDisabled={data!.data!.itensCarrinho!.length < 1}
            />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
