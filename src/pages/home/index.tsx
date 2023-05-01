import {Carousel, Col, Container, Image, Pagination, Row} from "react-bootstrap";
import img1 from "../../assets/Promocao.webp";
import banner from "../../assets/bannerMaculino.jpg";
import {Product} from "../../components/product";
import {productApi} from "../../Redux/domain/product/product-api";
import {clientApi} from "../../Redux/domain/cliente/client-api";
import {Loading} from "../../components/loading";

export const Home = () => {
  const {isLoading, data: DateProducts, isSuccess} = productApi.useGetProductsQuery();
  return (
    <Container fluid=" xxl" className="vh-100 mt-5">
      <Carousel>
        <Carousel.Item interval={1500}>
          <Image
            className="w-100"
            fluid
            style={{minHeight: "40vh", maxHeight: "60vh", height: "50vh"}}
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <Image
            className="w-100"
            fluid
            style={{minHeight: "40vh", maxHeight: "60vh", height: "50vh"}}
            src={banner}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Container className="py-5">
        {isLoading && <Loading/>}
        <>
          <Row>
            {isSuccess && DateProducts.data.map((product) =>
              (
                <Col key={product.id}>
                  <Product key={product.id} name={product.nome} id={product.id}
                           price={product.preco} url_picture={
                    product.url_ft1

                  } categoria={product.categoria}/>

                </Col>)
            )}
          </Row>
          <Row>
            <Col className="w-100 d-flex justify-content-center">
              <Pagination>
                <Pagination.Item>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
              </Pagination>
            </Col>
          </Row>
        </>
      </Container>
    </Container>
  );
};
