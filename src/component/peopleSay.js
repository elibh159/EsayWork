import React from "react";
import { Container, Col, Row, Card, CardImg, CardBody } from "reactstrap";
import Slider from "react-slick";

function NextArrowSlick(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

const PeopleSay = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.8,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrowSlick className="next-arrow-slick" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Row className="mt-5 mr-0 ml-0">
        <Col>
          <span className="heart-icon"></span>
          <h4 className="font-weight-bold">
            What other people say about <br />
            our service
          </h4>
        </Col>
        <Col>
          <Slider {...settings}>
            <div>
              <Card className="m-2 border-light shadow-sm rounded">
                <CardBody>
                  <Row className="pb-3  mr-0 ml-0">
                    <Col lg={3} md={3} sm={4} xs={4}>
                      <CardImg
                        left="true"
                        className="rounded-circle"
                        width="100%"
                        src="assets/images/david-campion.jpg"
                        alt="David Champion"
                      />
                    </Col>
                    <Col lg={9} md={9} sm={8} xs={8}>
                      <h6 className="font-weight-bold">David Champion</h6>
                      <p className="mt-0 small">CEO of iCloud</p>
                    </Col>
                  </Row>
                  <span>
                    "System is excellent.it has made my system user experience
                    to become one of the easiest"
                  </span>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="m-2 border-light shadow-sm rounded">
                <CardBody>
                  <Row className="pb-3  mr-0 ml-0">
                    <Col lg={3} md={3} sm={4} xs={4}>
                      <CardImg
                        left="true"
                        className="rounded-circle"
                        width="100%"
                        src="assets/images/vincent-joignie.jpg"
                        alt="David Frank van Hord"
                      />
                    </Col>
                    <Col lg={9} md={9} sm={8} xs={8}>
                      <h6 className="font-weight-bold">David Frank van Hord</h6>
                      <p className="mt-0 small">CEO of Markc.co</p>
                    </Col>
                  </Row>
                  <span>
                    "I wanted to share a quick note and let you know that you
                    guys do a really good job."
                  </span>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="m-2 border-light shadow-sm rounded">
                <CardBody>
                  <Row className="pb-3  mr-0 ml-0">
                    <Col lg={3} md={3} sm={4} xs={4}>
                      <CardImg
                        left="true"
                        className="rounded-circle"
                        width="100%"
                        src="assets/images/jerome-boudot.jpg"
                        alt="Jerome Boudot"
                      />
                    </Col>
                    <Col lg={9} md={9} sm={8} xs={8}>
                      <h6 className="font-weight-bold">Lucas Bond</h6>
                      <p className="mt-0 small">BOD of Skyscanner</p>
                    </Col>
                  </Row>
                  <span>
                    "Now it's almost like having a designer righ I just choose
                    the page,make the change an"
                  </span>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="m-2 border-light shadow-sm rounded">
                <CardBody>
                  <Row className="pb-3  mr-0 ml-0">
                    <Col lg={3} md={3} sm={4} xs={4}>
                      <CardImg
                        left="true"
                        className="rounded-circle"
                        width="100%"
                        src="assets/images/david-campion.jpg"
                        alt="David Champion"
                      />
                    </Col>
                    <Col lg={9} md={9} sm={8} xs={8}>
                      <h6 className="font-weight-bold">David Champion</h6>
                      <p className="mt-0 small">CEO of iCloud</p>
                    </Col>
                  </Row>
                  <span>
                    "System is excellent.it has made my system user experience
                    to become one of the easiest"
                  </span>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="m-2 border-light shadow-sm rounded">
                <CardBody>
                  <Row className="pb-3  mr-0 ml-0">
                    <Col lg={3} md={3} sm={4} xs={4}>
                      <CardImg
                        left="true"
                        className="rounded-circle"
                        width="100%"
                        src="assets/images/vincent-joignie.jpg"
                        alt="David Frank van Hord"
                      />
                    </Col>
                    <Col lg={9} md={9} sm={8} xs={8}>
                      <h6 className="font-weight-bold">David Frank van Hord</h6>
                      <p className="mt-0 small">CEO of Markc.co</p>
                    </Col>
                  </Row>
                  <span>
                    "I wanted to share a quick note and let you know that you
                    guys do a really good job."
                  </span>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="m-2 border-light shadow-sm rounded">
                <CardBody>
                  <Row className="pb-3  mr-0 ml-0">
                    <Col lg={3} md={3} sm={4} xs={4}>
                      <CardImg
                        left="true"
                        className="rounded-circle"
                        width="100%"
                        src="assets/images/jerome-boudot.jpg"
                        alt="Jerome Boudot"
                      />
                    </Col>
                    <Col lg={9} md={9} sm={8} xs={8}>
                      <h6 className="font-weight-bold">Lucas Bond</h6>
                      <p className="mt-0 small">BOD of Skyscanner</p>
                    </Col>
                  </Row>
                  <span>
                    "Now it's almost like having a designer righ I just choose
                    the page,make the change an"
                  </span>
                </CardBody>
              </Card>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};
export default PeopleSay;
