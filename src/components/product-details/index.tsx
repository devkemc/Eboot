import {Button, Carousel, Col, Container, Figure, Form, Row} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {productApi} from "../../Redux/domain/product/product-api";
import React from "react";
import {Tamanhos} from "../../Redux/domain/product/types";
import {Loading} from "../loading";

export const ProductDetails = () => {

  const [srcImage1, setSrcImage1] = React.useState('')
  const [srcImage2, setSrcImage2] = React.useState('')
  const [srcImage3, setSrcImage3] = React.useState('')
  const navigate = useNavigate();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  const {isLoading, data, isSuccess} = productApi.useGetOneProductQuery({id: Number(id)})
  console.log(data)

  function handlePurchashe() {
    navigate("/carrinho-compras");
  }

  React.useLayoutEffect(() => {
    (async () => {
      if (data) {
        const img1 = import(data!.data.url_ft1)
        const img2 = import(data!.data.url_ft2)
        const img3 = import(data!.data.url_ft3)
        const [image1, image2, image3] = await Promise.all([img1, img2, img3])
        setSrcImage1(image1.default)
        setSrcImage2(image2.default)
        setSrcImage3(image3.default)
      }
    })()
  }, [isSuccess])

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Container>
        {isLoading && <Loading/>}
        {isSuccess &&
            <Row
                className="mt-5 p-5 border border-success p-2 border-opacity-10 shadow p-3 mb-5 bg-body-tertiary rounded">
                <Col xs={12} sm={4}>
                    <p className="fw-semibold- fs-2">{data.data.nome}</p>
                    <span className='fw-light fs-6'>{data.data.descricao}</span>
                </Col>
                <Col xs={12} sm={4}>
                    <Carousel>
                        <Carousel.Item>
                            <Figure.Image width={400} height={400} src={srcImage1}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Figure.Image width={400} height={400} src={srcImage2}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Figure.Image width={400} height={400} src={srcImage3}/>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={12} sm={4}>
                    <h2>R${data.data.preco.toLocaleString()}</h2>
                    <span className="text-primary">cartão 10x sem juros</span>
                    <p>escolha o tamanho: </p>
                    <Form>
                      {data.data.tamanhos.map((t) => (
                        <Form.Check key={t.tamanho.tam_id} value={t.tamanho.tam_id} inline type="radio"
                                    label={t.tamanho.tam_tamanho}
                                    name="group1"/>
                      ))}
                    </Form>
                    <Button className="mt-5 w-100" variant="success" onClick={handlePurchashe}>
                        Comprar
                    </Button>
                </Col>
            </Row>
        }
      </Container>
    </Container>
  );
};
