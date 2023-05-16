import {Route, Routes} from "react-router-dom";
import {ProductDetails} from "../components/product-details";
import {UpdateProfileClient} from "../pages/update-profile-cliente";
import {AdmLayout} from "../layouts/adm-layout";
import {DefaultLayout} from "../layouts/default-layout";
import {CadastroCliente} from "../pages/cadastro-cliente";
import {CarrinhoCompras} from "../pages/carrinho-compras";
import {Checkout} from "../pages/checkout";
import {ConsultarClientes} from "../pages/consultar-clientes";
import {Home} from "../pages/home";
import {Login} from "../pages/login";
import {ProdutosListar} from "../pages/produtos-listar";
import {Profile} from "../components/profile";
import {SuccessPurchase} from "../pages/success-purchase";
import {Pedidos} from "../pages/pedidos";
import {PrivateRouteClient} from "../authenticate/private-route-client";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastrar-cliente" element={<CadastroCliente/>}/>
        <Route path="/detalhes-produto" element={<ProductDetails/>}/>
        <Route path="/carrinho-compras" element={<PrivateRouteClient><CarrinhoCompras/></PrivateRouteClient>}/>
        <Route path="/finalizacao" element={<PrivateRouteClient><Checkout/></PrivateRouteClient>}/>
        <Route path="/compra-sucedida" element={<SuccessPurchase/>}/>
      </Route>
      <Route path="/profile" element={<Profile/>}>
        <Route path="/profile/seus-dados" element={<UpdateProfileClient/>}/>
        <Route path="/profile" element={<Pedidos/>}/>
      </Route>
      <Route path="/adm" element={<AdmLayout/>}>
        <Route path="/adm/consultar-clientes" element={<ConsultarClientes/>}/>
        <Route path="/adm/produtos-listar" element={<ProdutosListar/>}/>
      </Route>
    </Routes>
  );
};
