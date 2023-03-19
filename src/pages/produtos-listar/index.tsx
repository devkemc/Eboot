import { useState } from "react";
import { Button, Card, Container, Form, Modal, Pagination, Table } from "react-bootstrap";

export const ProdutosListar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className=" positon-relative  p-5 d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="d-flex flex-column w-100">
        <h3>Produtos</h3>
        <div className="d-flex w-100 justify-content-end mb-3">
          <Button onClick={handleShow}>Cadastrar tenis</Button>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade disponivel</th>
            <th>Preço</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>{" "}
          <tr>
            <td>Tenis</td>
            <td>102</td>
            <td>R$150,00</td>
            <td>Ativo</td>
            <td className="d-flex align-items-center gap-5 justify-content-center">
              <a href="">Desativar</a> <a href="">Detalhes</a> <a href="">Editar</a>
            </td>
          </tr>
        </tbody>
      </Table>
      <Container className="w-100 d-flex justify-content-center">
        <Pagination>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
        </Pagination>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar tênis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="digite nome do produto" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Quatidade</Form.Label>
              <Form.Control type="text" placeholder="digite a quantidade" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Valor</Form.Label>
              <Form.Control type="password" className="mb-3" placeholder="dite o valor" />
            </Form.Group>
            <Form.Group className="mb-3 w-100">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecione o status</option>
                <option value="1">Ativo</option>
                <option value="2">Inativo</option>
              </Form.Select>
            </Form.Group>
            <Button onClick={handleClose} variant="primary" type="button" className="w-100">
              Cadastrar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
