import { Route, Routes } from "react-router-dom";
import { ProductDetails } from "../pages/product-details";
import { UpdateProfileClient } from "../pages/update-profile-cliente";
import { AdmLayout } from "../layouts/adm-layout";
import { DefaultLayout } from "../layouts/default-layout";
import { CadastroCliente } from "../pages/cadastro-cliente";
import { CarrinhoCompras } from "../pages/carrinho-compras";
import { Checkout } from "../pages/checkout";

import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { ProdutosListar } from "../pages/admin/produtos-listar";
import { Profile } from "../components/profile";
import { SuccessPurchase } from "../pages/success-purchase";
import { Pedidos } from "../pages/pedidos";
import { PrivateRouteClient } from "../authenticate/private-route-client";
import { Dashboard } from "../pages/admin/dashboard";
import { ConsultarClientes } from "../pages/admin/consultar-clientes";
import { OrdersList } from "../pages/admin/orders-list";
import { AdmOrderDetails } from "../pages/admin/adm-order-details";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar-cliente" element={<CadastroCliente />} />
        <Route path="/detalhes-produto" element={<ProductDetails />} />
        <Route
          path="/carrinho-compras"
          element={
            <PrivateRouteClient>
              <CarrinhoCompras />
            </PrivateRouteClient>
          }
        />
        <Route
          path="/finalizacao"
          element={
            <PrivateRouteClient>
              <Checkout />
            </PrivateRouteClient>
          }
        />
        <Route path="/compra-sucedida" element={<SuccessPurchase />} />
      </Route>
      <Route path="/profile" element={<Profile />}>
        <Route path="/profile/seus-dados" element={<UpdateProfileClient />} />
        <Route path="/profile" element={<Pedidos />} />
      </Route>
      <Route path="/adm" element={<AdmLayout />}>
        <Route path="/adm" element={<Dashboard />} />
        <Route path="/adm/consultar-clientes" element={<ConsultarClientes />} />
        <Route path="/adm/produtos-listar" element={<ProdutosListar />} />
        <Route path="/adm/pedidos" element={<OrdersList />} />
        <Route path="/adm/order-details" element={<AdmOrderDetails />} />
      </Route>
    </Routes>
  );
};
