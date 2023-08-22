import { Button, Carousel, Col, Container, Figure, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { productApi } from "../../redux/domain/product/product-api";
import React from "react";
import { Loading } from "../../components/loading";
import { Controller, useForm } from "react-hook-form";
import { getIdClient } from "../../utils/get-id-client";
import { AdicionaItemCarrinho } from "../../redux/domain/carrinho/types";
import { shoppingCartApi } from "../../redux/domain/carrinho/shopping-cart-api";
import { toast } from "react-toastify";
import { oneTenis } from "../../mocks/tenis";

export const ProductDetails = () => {
  const [srcImage1, setSrcImage1] = React.useState("");
  const [srcImage2, setSrcImage2] = React.useState("");
  const [srcImage3, setSrcImage3] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  // const {isLoading, data, isSuccess} = productApi.useGetOneProductQuery({id: Number(id)})
  const isLoading = false;
  const isSuccess = true;
  const data = oneTenis;
  const { register, handleSubmit, getValues, control } = useForm<AdicionaItemCarrinho>({
    defaultValues: {
      produtoId: Number(id),
      clienteId: getIdClient()!,
      quantidadeProduto: 1,
    },
  });
  const [addProduct, { isSuccess: addProductCarrinhoIsSuccess, isError: addProductCarrinhoError }] =
    shoppingCartApi.useAddProductInCarMutation();

  React.useEffect(() => {
    if (addProductCarrinhoIsSuccess && data) {
      toast.success("Produto adicionado no carrinho com sucesso");
      navigate("/carrinho-compras");
    }
    if (addProductCarrinhoError) {
      toast.error("Erro ao adicionar produto no carrinho");
    }
  }, [addProductCarrinhoError, addProductCarrinhoIsSuccess]);

  function handlePurchashe({ clienteId, tamanhoTenis, quantidadeProduto, produtoId }: AdicionaItemCarrinho) {
    // addProduct({clienteId, quantidadeProduto, produtoId, tamanhoTenis: Number(tamanhoTenis)})
    toast.success("Produto adicionado no carrinho com sucesso");
    navigate("/carrinho-compras");
  }

  React.useLayoutEffect(() => {
    (async () => {
      if (data) {
        const img1 = import(data!.data.url_ft1);
        const img2 = import(data!.data.url_ft2);
        const img3 = import(data!.data.url_ft3);
        const [image1, image2, image3] = await Promise.all([img1, img2, img3]);
        setSrcImage1(image1.default);
        setSrcImage2(image2.default);
        setSrcImage3(image3.default);
      }
    })();
  }, [isSuccess]);
  if (isLoading) return <Loading />;
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Container>
        <Row>
          <Col xs={6} sm={6} className="d-flex flex-column gap-5">
            <Row>
              <Col md={6}>
                <Figure.Image className="border rounded border-primary" width={250} height={200} src={srcImage1} />
              </Col>

              <Col md={6}>
                <Figure.Image className="border rounded border-primary" width={250} height={200} src={srcImage2} />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Figure.Image className="border rounded border-primary" width={250} height={200} src={srcImage1} />
              </Col>

              <Col md={6}>
                <Figure.Image className="border rounded border-primary" width={250} height={200} src={srcImage2} />
              </Col>
            </Row>
          </Col>
          <Col xs={6} sm={6}>
            <h1 className="fs-1">{data.data.nome}</h1>
            <p>{data.data.descricao}</p>
            <h2 className="text-primary fs-2">R${data.data.preco.toLocaleString()}</h2>
            <span>escolha o tamanho: </span>
            <Form className="d-flex ">
              {data.data.tamanhos.map((t) => (
                <Form.Group controlId={`checkbox-${t.tamanho.tam_id}`} key={t.tamanho.tam_id}>
                  <Controller
                    name="tamanhoTenis"
                    control={control}
                    render={({ field }) => (
                      <Form.Check
                        inline
                        type="radio"
                        label={t.tamanho.tam_tamanho}
                        {...field}
                        value={Number(t.tamanho.tam_id)}
                      />
                    )}
                  />
                </Form.Group>
              ))}
            </Form>
            <Button className="mt-5 w-100" onClick={handleSubmit(handlePurchashe)}>
              Comprar
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
