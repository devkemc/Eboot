import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
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
      <Container>
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
      </Container>
    </Container>
  );
};
