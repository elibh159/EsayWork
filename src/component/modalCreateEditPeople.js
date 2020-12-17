import React, { useState } from "react";
import {
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from "reactstrap";

const ModalCreateEditPeople = (props) => {
  const {
    buttonLabel,
    className,
    values,
    btnClass,
    headerTitle,
    onClick,
  } = props;
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(values);
  const toggle = () => setModal(!modal);

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

  //delete picture
  const deletePic = () => {
    setData({ ...data, image: "empty.png" });
  }

  //previwe image before it is uploaded
  const fileupImage = () => {
    var fileTag = document.getElementById("filesToBeSent"),
      preview = document.getElementById("blah");

    fileTag.addEventListener("change", function () {
      changeImage(this);
    });

    function changeImage(input) {
      var reader;

      if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = function (e) {
          preview.setAttribute("src", e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
      }
    }
  };


  return (
    <div>
      <div onClick={toggle} className={btnClass}>
        {buttonLabel}
      </div>
      <Modal isOpen={modal} size="md" toggle={toggle} className={className}>
        <ModalHeader className="border-0" toggle={toggle}>
          {headerTitle}
        </ModalHeader>
        <ModalBody className="p-4">
          <Form>
            <Row className="d-flex justify-content-center">
              <Col md={4} sm={4} xs={5}>
                <FormGroup>
                  <img
                    width="100%"
                    src={`assets/images/${data.image}`}
                    alt={data.name}
                    className="rounded-circle"
                    id="blah"
                  />
                  <Input
                    type="file"
                    name="file"
                    id="filesToBeSent"
                    className="edit-modal"
                    onBlur={() => fileupImage()}
                  />
                  <div className="edit-img-modal"></div>
                  <div className={data.id === 0 ? "hidden" : "mt-3 delete-img"}>
                    <span className="delete-img-icon"></span>
                    <span className="text-center pl-4 ml-1"
                      onClick={() => deletePic()}
                    >
                      Delete Picture
                    </span>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                value={data.name}
                name="name"
                id="name"
                placeholder="Enter name"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="position">Position</Label>
              <Input
                type="text"
                value={data.position}
                name="position"
                id="position"
                placeholder="Enter position"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                rows={3}
                value={data.description}
                name="description"
                id="description"
                placeholder="Enter description"
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="border-0 p-4">
          <div className="button" onClick={toggle}>
            Cancel
          </div>
          <div className="button button-primary" onClick={() => { onClick(data); toggle(); }}>
            Save
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCreateEditPeople;
