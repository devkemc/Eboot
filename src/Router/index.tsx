import { Route, Routes } from "react-router-dom";
import { ProductDetails } from "../components/product-details";
import { DefaultLayout } from "../layouts/default-layout";
import { CadastroCliente } from "../pages/cadastro-cliente";
import { CarrinhoCompras } from "../pages/carrinho-compras";
import { Home } from "../pages/home";
import { Login } from "../pages/login";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar-cliente" element={<CadastroCliente />} />
        <Route path="/detalhes-produto" element={<ProductDetails />} />
        <Route path="carrinho-compras" element={<CarrinhoCompras />} />
      </Route>
    </Routes>
  );
};
