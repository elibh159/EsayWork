import React from "react";
import { Container, Col, Row } from "reactstrap";

const Content = () => (
  <Container>
    <Row className="mt-5">
      <Col
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        lg={{ size: 6, order: 1 }}
        sm={{ order: 2 }}
        xs={{ order: 2 }}
      >
        <img
          src="assets/images/content-001.png"
          alt="content-001"
          className="w-100"
        />
      </Col>
      <Col
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        lg={{ size: 6, order: 2 }}
        sm={{ order: 1 }}
        xs={{ order: 1 }}
      >
        <div className="p-5">
          <h4 className="font-weight-bold">
            We can give you <br />
            our best user experience
            <br /> to your system
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Col>
      <Col
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="900"
        lg={{ size: 6, order: 3 }}
        sm={{ order: 3 }}
        xs={{ order: 3 }}
      >
        <div className="p-5">
          <h4 className="font-weight-bold">
            Easy access.
            <br /> Whenever, wherever
            <br />
            you want
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Col>
      <Col
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="900"
        lg={{ size: 6, order: 4 }}
        sm={{ order: 4 }}
        xs={{ order: 4 }}
      >
        <img
          src="assets/images/content-002.png"
          alt="content-002"
          className="w-100"
        />
      </Col>
    </Row>
  </Container>
);
export default Content;
