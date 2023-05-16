import {HouseLine} from "phosphor-react";
import React, {useState} from "react";
import {Button, Card, Container, Form, ListGroup, Modal} from "react-bootstrap";
import {enderecoApi} from "../../Redux/domain/cliente/endereco-api";
import {getIdClient} from "../../utils/get-id-client";
import {Loading} from "../loading";
import {CardEndereco} from "../card-endereco";
import {Controller, useForm} from "react-hook-form";

interface Form {
  endId: number
}

export const DeliveryAddress = () => {
  const [show, setShow] = useState(false);
  const {data, isLoading} = enderecoApi.useGetEnderecoPorClienteQuery({clienteId: getIdClient()!})
  const [endIndex, setEndIndex] = useState(0)
  const {control, handleSubmit} = useForm<Form>()

  function selectEndereco(data: Form) {
    setEndIndex(data.endId)
    handleClose()

  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="shadow p-3 mb-5 bg-body-tertiary rounded p-5">
      <div className="d-flex align-items-center gap-2">
        <HouseLine size={30}/>
        <span className="fs-3 fw-semibold">Endereço de entrega</span>
      </div>
      {isLoading && <Loading/>}
      <ListGroup variant="flush">
        <ListGroup.Item>{`${data?.data[endIndex].tipoLogradouro} ${data?.data[endIndex].logradouro} ${data?.data[endIndex].numeroEndereco}`}</ListGroup.Item>
        <ListGroup.Item>CEP {data?.data[endIndex].cep} - {data?.data[endIndex].nomeCidade} - {data?.data[endIndex].nomeEstado} </ListGroup.Item>
        <ListGroup.Item>
          <Button onClick={handleShow} variant="outline-primary" className="w-100">
            Alterar endereço
          </Button>
        </ListGroup.Item>
      </ListGroup>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Endereços cadastrados</Modal.Title>
        </Modal.Header>
        <Modal.Body className={'d-flex flex-column'}>
          {data?.data.map((end, index) =>
            (
              <Form.Group controlId={`checkbox-${end.idEndereco}`} key={end.idEndereco}>
                <Controller
                  name="endId"
                  control={control}
                  render={({field}) => (
                    <Form.Check
                      inline
                      type="radio"
                      label={<CardEndereco tipoLogradouro={end.tipoLogradouro}
                                           logradouro={end.logradouro}
                                           nomeCidade={end.nomeCidade} nomeEstado={end.nomeEstado} cep={end.cep}
                                           numero={end.numeroEndereco}/>}
                      {...field}
                      value={index}
                    />)}/>
              </Form.Group>)
          )}
          <Button variant='success' onClick={handleSubmit(selectEndereco)}>Selecionar Endereço</Button>
        </Modal.Body>
      </Modal>
    </Container>
  )
    ;
};
