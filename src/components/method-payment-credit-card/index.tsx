import {
  Col,
  Collapse,
  Container, FloatingLabel,
  Form,
  FormCheck,
  FormGroup,
  Row
} from "react-bootstrap";
import {useState} from "react";
import {NumericFormat} from "react-number-format";
import {format} from 'date-fns'

interface Props {
  numeroCartao: number
  nomeTitular: string
  validade: string
}

export const MethodPaymentCreditCard = ({validade,nomeTitular,numeroCartao}:Props) => {
  const [selectionCard, setSelectionCard] = useState(false)
  return (
    <Container fluid="xs" className="d-flex flex-column  w-100 align-items-center">
      <Row className="w-100">
        <Col xs={1} className="d-flex justify-content-center align-items-center">
          <Form.Check onChange={() => {
            setSelectionCard(!selectionCard)
          }} type="checkbox"/>
        </Col>
        <Col xs={5} className="d-flex flex-column justify-content-center">
          <span className="text-primary fs-5">Numero Cartão</span>
          <span>{numeroCartao}</span>
        </Col>
        <Col xs={4} className="d-flex flex-column justify-content-center">
          <span className="text-primary fs-5">Titular</span>
          <span>{nomeTitular}</span>
        </Col>
        <Col xs={1} className="d-flex flex-column justify-content-center">
          <span className="text-primary fs-5">Validade</span>
          <span>{format(new Date(validade),'MM/yy')}</span>
        </Col>
      </Row>
      <Collapse in={selectionCard}>
        <div className='w-100 px-3'>
          <FormGroup className='mb-3'>
            <FloatingLabel
              controlId="floatingInput"
              label='Valor a ser pago pelo cartão'
              className="my-3"
            >
              <Form.Control as={NumericFormat}
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={2}
                            fixedDecimalScale
                            placeholder=''
                            prefix="R$ "/>
            </FloatingLabel>
          </FormGroup>
          <FormGroup className={'d-flex align-items-center justify-content-end gap-2 mb-3'}>
            <FormCheck className='m-0'/>
            <Form.Label className='m-0'>Pagar tudo</Form.Label>
          </FormGroup>
        </div>
      </Collapse>
      <div className="border-bottom border-primary-subtle w-100 my-2"></div>
    </Container>
  );
};
