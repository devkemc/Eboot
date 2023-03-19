import { Carousel, Col, Container, Image, Pagination, Row } from "react-bootstrap";
import img1 from "../../assets/Promocao.webp";
import { Product } from "../../components/product";

export const Home = () => {
  return (
    <Container fluid=" xxl" className="vh-100 mt-5">
      <Carousel>
        <Carousel.Item>
          <Image fluid style={{ minHeight: "40vh" }} src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image fluid style={{ minHeight: "40vh" }} src={img1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Container className="py-5">
        <Row>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
        </Row>
        <Row>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
        </Row>
        <Row>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
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
      </Container>
    </Container>
  );
};
