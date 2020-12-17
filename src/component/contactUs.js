import React, { useState } from "react";
import { Container, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";

const Content = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  //handle Change data
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Container className="mb-0 mb-md-5 mb-lg-5 mb-xl-5 mt-150">
      <Row>
        <Col>
          <h4 className="text-center mb-5 font-weight-bold">Contant Us</h4>
        </Col>
      </Row>
      <Row className="d-flex  justify-content-center">
        <Col className="shadow-lg p-5 rounded-lg" lg={5} md={5}>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                value={data.name}
                name="name"
                id="name"
                placeholder="Enter your name"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                value={data.email}
                name="position"
                id="position"
                placeholder="Enter your email"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="subject">Sunbject</Label>
              <Input
                type="select"
                name="subject"
                id="subject"
                value={data.subject}
                onChange={handleInputChange}
                required
              >
                <option value="">Please select your subject</option>
                <option value={1}>subject 1</option>
                <option value={2}>subject 2</option>
                <option>subject 3</option>
                <option>subject 4</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="message">Description</Label>
              <Input
                type="textarea"
                rows={3}
                value={data.message}
                name="message"
                id="message"
                placeholder="Enter your message here"
                onChange={handleInputChange}
              />
            </FormGroup>
            <div className="button button-primary">Send</div>
          </Form>
        </Col>
        <Col
          lg={5}
          md={5}
          className="pl-0 pr-0 pt-3 pb-0  pb-md-3 pb-lg-3 pb-xl-3 map-box"
        >
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.136990316203!2d101.68163805975432!3d3.08553462767277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a46c1cb4cf1%3A0x26fd121ec4b9ef00!2sKuchai%20Lama%2C%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2suk!4v1603183817096!5m2!1sen!2suk"
            width="100%"
            height="100%"
            frameBorder="0"
            className="border-0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};
export default Content;
