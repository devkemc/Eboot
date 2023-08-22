import React from "react";
import { Container, ListGroup } from "react-bootstrap";

interface Props {
  idEndereco: number;
  tipoLogradouro: string;
  logradouro: string;
  nomeCidade: string;
  nomeEstado: string;
  cep: string;
  numero: string;
  setIdEndereco: (id: number) => void;
  isSelected: boolean;
}
export const CardEndereco = ({
  idEndereco,
  logradouro,
  tipoLogradouro,
  nomeCidade,
  nomeEstado,
  cep,
  numero,
  setIdEndereco,
  isSelected,
}: Props) => {
  return (
    <Container
      role="button"
      className={`border ${
        isSelected ? "border-primary" : "" 
      } p-3 mb-3 bg-body-tertiary rounded p-1 cursor-point`}
      onClick={() => {
        setIdEndereco(idEndereco);
      }}
    >
      <ListGroup variant="flush">
        <ListGroup.Item>{`${tipoLogradouro} ${logradouro}  ${numero}`}</ListGroup.Item>
        <ListGroup.Item>
          CEP {cep} - {nomeCidade} - {nomeEstado} {idEndereco}
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};
