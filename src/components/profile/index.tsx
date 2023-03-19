import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Header } from "../header";

import { SidebarProfile } from "../sidebar-profile";

export const Profile = () => {
  return (
    <>
      <Header />
      <Container fluid=" xxl" className="vh-100">
        <Row className="w-100">
          <Col xs={12} xl={3} md={4} sm={5}>
            <div className="position-fixed w-25">
              <SidebarProfile />
            </div>
          </Col>
          <Col xs={12} xl={9} md={8} sm={7} className="p-5">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
