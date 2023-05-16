import {Container} from "react-bootstrap";
import {ShoppingCartSimple} from "phosphor-react";

export const CarrinhoVazio = () =>{
  return(
    <Container className='d-flex flex-column align-items-center p-5'>
      <ShoppingCartSimple size={250} />
      <span className='fs-1 fw-light'>Seu carrinho está vazio</span>
    </Container>
  )
}