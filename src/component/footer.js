import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => (
  <div>
    <div className="d-none d-lg-block mt-150"></div>
    <div className="footer-box pt-lg-5 pt-md-5 pt-2">
      <Container fluid="sm xs">
        <Row className="d-flex justify-content-start mr-0 ml-0">
          <Col md={4} lg={4} sm={3} xs={12} className="m-3">
            <h3 className="footer-company-name text-center">
              <img
                width="100"
                alt="Easy Work"
                className="pr-4"
                src="/assets/images/logo.png"
              />
              Easy Work
            </h3>
          </Col>
          <Col md={3} lg={3} sm={5} xs={8}>
            <h6 className="mb-1">Address</h6>
            <p className="mt-0">
              52-1,Jalan Awan Hijau, Taman Overseas Union,58200 Kuala Lumpur,
              Wilayah Persekutuan Kual Lumpur
            </p>
          </Col>
          <Col md={2} lg={2} sm={3} xs={4}>
            <h6 className="mb-1">Conract</h6>
            <p className="mt-0">03-7451 5283</p>
            <h6 className="mb-1">Fax</h6>
            <p className="mt-0">03-7451 5283</p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);
export default Footer;
