import { Container, Form } from "react-bootstrap";

export const RegisterCard = () => {
  return (
    <Container className="p-3">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Número do cartão</Form.Label>
          <Form.Control type="text" placeholder="digite número do seu cartão" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome do titular</Form.Label>
          <Form.Control type="text" placeholder="digite nome do titular do cartão" />
        </Form.Group>
        <Form.Group className="d-flex align-items-center justify-content-between gap-3">
          <Form.Group className="mb-3 w-100">
            <Form.Label>Mês</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Mês</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
              <option value="3">7</option>
              <option value="3">8</option>
              <option value="3">9</option>
              <option value="3">10</option>
              <option value="3">11</option>
              <option value="3">12</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 w-100">
            <Form.Label>Ano</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Ano</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
              <option value="2032">2032</option>
              <option value="2033">2033</option>
              <option value="2034">2034</option>
              <option value="2035">20352</option>
            </Form.Select>
          </Form.Group>
        </Form.Group>
      </Form>
    </Container>
  );
};
