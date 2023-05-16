import {ReactComponentElement} from "react";
import {clientAutheticated} from "../auth-client";
import {toast} from "react-toastify";
import {Navigate} from "react-router-dom";

interface Props {
  children: ReactComponentElement<any>
}
export const PrivateRouteClient = ({children}:Props) =>{
    if (!clientAutheticated()){
      toast.error("Faça o login para continuar")
      return <Navigate to={'/login'}/>
    }
  return children
}