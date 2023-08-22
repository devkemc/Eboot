import { HouseLine, Pencil } from "phosphor-react";
import React, { ReactNode, useState } from "react";
import { Button, Card, Col, Collapse, Container, Form, ListGroup, Modal, Row } from "react-bootstrap";
import { enderecoApi } from "../../redux/domain/cliente/endereco-api";
import { getIdClient } from "../../utils/get-id-client";
import { Loading } from "../loading";
import { CardEndereco } from "../card-endereco";
import { Controller, useForm } from "react-hook-form";
import { NewAddress } from "../new-address";
import InputMask from "react-input-mask";
import { EnderecoState } from "../../redux/domain/cliente/types/endereco";
import { toast } from "react-toastify";
import { mockEndereco } from "../../mocks/endereco";

interface Form {
  endId: number;
}

export const DeliveryAddress: React.FC = () => {
  const [show, setShow] = useState(false);
  // const { data, isLoading } = enderecoApi.useGetEnderecoPorClienteQuery({ clienteId: getIdClient()! });

  const data = mockEndereco;
  const isLoading = false;

  const [endIndex, setEndIndex] = useState(0);
  const { control, handleSubmit } = useForm<Form>();
  const { register, handleSubmit: submitAddress } = useForm<EnderecoState>({
    defaultValues: { idEndereco: getIdClient()! },
  });
  const [colapse, setColapse] = useState(false);
  const [addEndereco, { isSuccess }] = enderecoApi.useAddEnderecoMutation();

  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Endereço cadastrado com sucesso");
    }
  }, [isSuccess]);

  function selectEndereco(data: Form) {
    // setEndIndex(data.endId);
    handleClose();
  }
  function newAddress(data: EnderecoState) {
    data.cep = Number(String(data.cep).replace("-", ""));
    addEndereco(data);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (isLoading) return <Loading />;
  return (
    <Container className="border rounded p-5">
      <div className="d-flex align-items-center gap-2">
        <HouseLine size={30} />
        <span className="fs-3 fw-semibold flex-grow-1 text-primary">Endereço de entrega</span>
        <div title="Clique para cadastrar novo endereço">
          <Pencil
            aria-label={"Clique para alterar o endereço"}
            className={"order-1"}
            role={"button"}
            onClick={handleShow}
            size={24}
          />
        </div>
      </div>
      <ListGroup variant="flush">
        <ListGroup.Item>{`${data?.data[endIndex].tipoLogradouro} ${data?.data[endIndex].logradouro} ${data?.data[endIndex].numeroEndereco}`}</ListGroup.Item>
        <ListGroup.Item>
          CEP {data?.data[endIndex].cep} - {data?.data[endIndex].nomeCidade} - {data?.data[endIndex].nomeEstado}{" "}
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            onClick={() => {
              setColapse(!colapse);
            }}
            variant="outline-primary"
            className="w-100"
          >
            Adicionar novo endereço
          </Button>
        </ListGroup.Item>
      </ListGroup>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Endereços cadastrados</Modal.Title>
        </Modal.Header>
        <Modal.Body className={"d-flex flex-column justify-content-center"}>
          {data?.data.map((end) => (
            <CardEndereco
              key={end.idEndereco}
              tipoLogradouro={end.tipoLogradouro}
              logradouro={end.logradouro}
              nomeCidade={end.nomeCidade}
              nomeEstado={end.nomeEstado}
              cep={end.cep}
              numero={end.numeroEndereco}
              idEndereco={end.idEndereco}
              setIdEndereco={setEndIndex}
              isSelected={end.idEndereco === endIndex}
            />
          ))}
          <Button onClick={handleSubmit(selectEndereco)}>Selecionar Endereço</Button>
        </Modal.Body>
      </Modal>
      <Collapse in={colapse}>
        <Container>
          <Row>
            <Col xs={12} sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tipo de endereço</Form.Label>
                <Form.Select {...register("tipoEndereco")} aria-label="Default select example">
                  <option value="ENTREGA">Entrega</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tipo de Imovel</Form.Label>
                <Form.Select {...register("tipoImovel")} aria-label="Default select example">
                  <option>Selecione tipo de Imovel</option>
                  <option value="COMERCIAL">Comercial</option>
                  <option value="RESIDENCIAL">Residencial</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={2}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tipo</Form.Label>
                <Form.Select {...register("tipoLogradouro")} aria-label="Default select example">
                  <option>Selecione tipo de Imovel</option>
                  <option value="RUA">Rua</option>
                  <option value="AVENIDA">Avenida</option>
                  <option value="PRACA">Praça</option>
                  <option value="ESTRADA">Estrada</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} sm={9}>
              <Form.Group className="mb-3">
                <Form.Label>Logradouro</Form.Label>
                <Form.Control type="text" placeholder="digite logradouro" {...register("logradouro")} />
              </Form.Group>
            </Col>
            <Col xs={12} sm={1}>
              <Form.Group className="mb-3">
                <Form.Label>N</Form.Label>
                <Form.Control type="text" placeholder="digite numero" {...register("numeroEndereco")} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              <Form.Group>
                <Form.Label>Bairro</Form.Label>
                <Form.Control {...register("bairro")} className="mb-3" placeholder="digite seu bairro" />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label>CEP</Form.Label>
                <InputMask {...register("cep")} mask="99999-999">
                  {
                    ((props: any) => (
                      <Form.Control type="text" placeholder="digite seu cep" {...props} />
                    )) as unknown as ReactNode
                  }
                </InputMask>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Cidade</Form.Label>
                <Form.Control {...register("nomeCidade")} type="text" placeholder="digite sua cidade" />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Estado</Form.Label>
                <Form.Control {...register("nomeEstado")} type="text" placeholder="digite seu estado" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="w-100" onClick={submitAddress(newAddress)}>
            Cadastrar novo endereço
          </Button>
        </Container>
      </Collapse>
    </Container>
  );
};
