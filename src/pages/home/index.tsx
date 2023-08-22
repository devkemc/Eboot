import { Carousel, Col, Container, Figure, Image, Pagination, Row } from "react-bootstrap";
import Banner from "../../assets/lindos-tenis-grafite 2.jpg";
import { Product } from "../../components/product";
import { productApi } from "../../redux/domain/product/product-api";
import { Loading } from "../../components/loading";
import { ListaTenis } from "../../mocks/tenis";

export const Home = () => {
  // const {isLoading, data: DateProducts, isSuccess} = productApi.useGetProductsQuery();
  const isLoading = false;
  const isSuccess = true;
  const DateProducts = ListaTenis;

  return (
    <Container fluid=" xxl" className="vh-100 mt-5">
      <Container className="py-5">
        {isLoading && <Loading />}
        <>
          <Figure.Image width={"100%"} height={200} src={Banner} />
          <Row>
            {isSuccess &&
              DateProducts.data.map((product) => (
                <Col key={product.id}>
                  <Product
                    key={product.id}
                    name={product.nome}
                    id={product.id}
                    price={product.preco}
                    url_picture={product.url_ft1}
                    categoria={product.categoria}
                    description={product.descricao}
                  />
                </Col>
              ))}
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
