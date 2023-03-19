import { Outlet } from "react-router-dom"
import { SidebarAdm } from "../components/sidebar-adm"

export const AdmLayout = () =>{
    return(
        <>
        <SidebarAdm/>
        <Outlet/>
        </>
    )
}