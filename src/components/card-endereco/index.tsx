
import {Container, ListGroup} from "react-bootstrap";

interface Props{
  tipoLogradouro: string
  logradouro: string
  nomeCidade: string
  nomeEstado:string
  cep:number
  numero:string
}
export const CardEndereco = ({logradouro,tipoLogradouro,nomeCidade,nomeEstado, cep, numero}:Props) =>{
  return(
    <Container className="shadow p-3 mb-5 bg-body-tertiary rounded p-5">
      <ListGroup variant="flush">
        <ListGroup.Item>{ `${tipoLogradouro} ${logradouro}  ${numero}` }</ListGroup.Item>
        <ListGroup.Item>CEP {cep} - {nomeCidade} - {nomeEstado} </ListGroup.Item>
      </ListGroup>
    </Container>
  )
}