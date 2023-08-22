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
          <Col xs={3} xl={3} md={3} sm={3}>
            <div style={{width:"350px"}} className="position-fixed">
              <SidebarProfile />
            </div>
          </Col>
          <Col xs={9} xl={9} md={9} sm={9} className="p-5">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
