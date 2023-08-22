import { Outlet } from "react-router-dom";
import { SidebarAdm } from "../components/sidebar-adm";
import {HeaderAdmin} from "../components/header-admin";

export const AdmLayout = () => {
  return (
    <>
    <HeaderAdmin/>
      <div className="app-layout">
        <SidebarAdm />
        <Outlet />
      </div>
    </>
  );
};
