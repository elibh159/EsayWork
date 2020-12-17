import React from "react";
import { Container, Row, Col } from "reactstrap";

const Banner = () => (
  <div className="banner-box">
    <Container
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="banner-continer"
    >
      <Row className="d-flex justify-content-around">
        <Col
          md={8}
          lg={8}
          className="pl-xs-5 pl-sm-2"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h1>
            Make development
            <br />
            easy with us.
          </h1>
          <div>
            Doing development can never be easy,and it takes time and resources.
          </div>
          <div>We at EsayWork has the solution</div>
        </Col>
      </Row>
    </Container>
  </div>
);
export default Banner;
