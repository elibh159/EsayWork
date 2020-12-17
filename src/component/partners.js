import React from "react";
import { Container, Col, Row } from "reactstrap";

const Partners = () => (
  <Container className="mt-5">
    <Row>
      <Col>
        <h4 className="text-center mt-5 mb-5">We've worked with</h4>
      </Col>
    </Row>
    <Row className="d-flex partners  justify-content-center">
      <div data-aos="zoom-in-up" data-aos-duration="1500">
        <img className="p-3" src="assets/images/apple.PNG" alt="apple" />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1500">
        <img className="p-3" src="assets/images/airbnb.png" alt="airbnb" />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1500">
        <img className="p-3" src="assets/images/google.PNG" alt="google" />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1500">
        <img className="p-3" src="assets/images/nvidia.PNG" alt="nvidia" />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1500">
        <img className="p-3" src="assets/images/tesla.PNG" alt="tesla" />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1500">
        <img className="p-3" src="assets/images/samsung.PNG" alt="samsung" />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1500">
        <img className="p-3" src="assets/images/facebook.PNG" alt="facebook" />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1500">
        <img
          className="p-3"
          src="assets/images/microsoft.PNG"
          alt="microsoft"
        />
      </div>
    </Row>
  </Container>
);
export default Partners;
