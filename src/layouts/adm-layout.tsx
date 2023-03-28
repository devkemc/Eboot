import { Outlet } from "react-router-dom";
import { SidebarAdm } from "../components/sidebar-adm";
import { Header } from "../components/header";

export const AdmLayout = () => {
  return (
    <>
    <Header/>
      <div className="app-layout">
        <SidebarAdm />
        <Outlet />
      </div>
    </>
  );
};
