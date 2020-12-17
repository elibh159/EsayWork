import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import ModalDetail from "./modalDetail";
import ModalCreateEditPeople from "./modalCreateEditPeople";

const ImportantPeople = () => {
  //#region list of important people
  const [importPeople, setImportPeople] = useState([
    {
      id: 1,
      image: "gaetan-houssin.jpg",
      name: "Frank Ltarnam",
      position: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .",
    },
    {
      id: 2,
      image: "nicolas-lebarreau.jpg",
      name: "Bob Shefley",
      position: "UI/UX Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .",
    },
    {
      id: 3,
      image: "jerome-mahuet.jpg",
      name: "Jason Stewars",
      position: "Full-Stack Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .",
    },
    {
      id: 4,
      image: "manuela-faveri.jpg",
      name: "Sabrina Rachel",
      position: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .",
    },
    {
      id: 5,
      image: "darlene-chabrat.jpg",
      name: "Marissa Lawren",
      position: "Customer Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .",
    },
    {
      id: 6,
      image: "romane-regad.jpg",
      name: "Romane Regad",
      position: "Jr UI/UX Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .",
    },
    {
      id: 7,
      image: "tania-ferreira.jpg",
      name: "Tania Ferreira",
      position: "Business Analyst",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .",
    },
  ]);
  //#endregion

  //#region edit mode
  const [editMode, setEditMode] = useState(false);
  //#endregion

  //#region select/Cancel/Remove Item
  const [selectedItem, setSelectedItem] = useState(0);

  const BodyOfSelectCardBtn = (item) => {
    if (!editMode) return <div></div>;
    else if (selectedItem === item.id)
      return <div className="select-card-btn active"></div>;
    else
      return (
        <div
          className="select-card-btn"
          onClick={() => setSelectedItem(item.id)}
        ></div>
      );
  };
  const cancelFotEditing = () => {
    setEditMode(false);
    setSelectedItem(0);
  };

  const removeItem = () => {
    setImportPeople(importPeople.filter((m) => m.id !== selectedItem));
  };
  //#endregion

  //#region handle change importantList
  const handleListChange = (data) => {
    debugger;
    const tmpList = [...importPeople];
    if (data.id > 0) {
      var item = importPeople
        .map((o, i) => {
          o.index = i;
          return o;
        })
        .filter((m) => m.id === data.id)[0];
      tmpList[item.index] = data;
    } else {
      tmpList.push(data);
    }
    setImportPeople(tmpList);
  };
  //#endregion

  //#region modal for show Detail Information Important person
  const [modalDetail, setModalDetail] = useState({ state: false, id: 0 });

  const toggleModalDetail = useCallback(
    (id) => {
      setModalDetail({ state: !modalDetail.state, id: id ? id : 0 });
    },
    [modalDetail.state]
  );

  const BodyOfModalDetail = useCallback(() => {
    const res = importPeople.filter((m) => m.id === modalDetail.id)[0];
    return (
      <ModalDetail
        buttonLabel="click me"
        toggleState={modalDetail.state}
        toggleChange={toggleModalDetail}
        size="md"
        className="p-0 detail-people"
      >
        <Card className="border-0">
          <Row>
            <Col md={4}>
              <CardImg right="true" src={`assets/images/${res && res.image}`} />
            </Col>
            <Col md={8}>
              <h6 className="pt-3 pb-0 font-weight-bold"> {res && res.name}</h6>
              <div className="small secondary"> {res && res.position}</div>
              <p className="small">{res && res.description}</p>
            </Col>
          </Row>
        </Card>
      </ModalDetail>
    );
  }, [importPeople, modalDetail.id, modalDetail.state, toggleModalDetail]);

  useEffect(() => {
    if (modalDetail.state === true) {
      BodyOfModalDetail();
    }
  }, [modalDetail, BodyOfModalDetail]);
  //#endregion

  return (
    <Container>
      <BodyOfModalDetail />
      <Row className="mt-150 mr-0 ml-0 mb-5">
        <Col md={8} lg={8}>
          <span className="smile-icon"></span>
          <h4>
            Our important people is listed <br />
            here
          </h4>
        </Col>
        <Col md={4} lg={4} className="d-flex justify-content-end pr-0">
          <span
            className={editMode ? "button mr-5" : "hidden"}
            onClick={cancelFotEditing}
          >
            Cancel
          </span>
          <span
            className={editMode ? "delete-img-icon p-3" : "hidden"}
            onClick={removeItem}
          ></span>
          <span
            className={editMode ? "hidden" : "btn-edit"}
            onClick={() => setEditMode(true)}
          >
            Edit
          </span>
          <ModalCreateEditPeople
            buttonLabel="Add"
            headerTitle="Add People"
            values={{
              id: 0,
              image: "empty.png",
              name: "",
              position: "",
              description: "",
            }}
            btnClass={editMode ? "hidden" : "btn-add"}
            onClick={(data) => handleListChange(data)}
          />
        </Col>
      </Row>
      <Row className="d-flex mb-5 justify-content-center">
        {importPeople.map((item) => (
          <Col
            data-aos="flip-left"
            data-aos-duration="1000"
            className="import-people-col"
            key={item.id.toString()}
            lg={2}
            md={4}
            sm={4}
            xs={6}
          >
            <div className="d-flex justify-content-between btn-card">
              <BodyOfSelectCardBtn id={item.id} />
              <ModalCreateEditPeople
                headerTitle="Edit People"
                values={item}
                btnClass="edit-card"
                onClick={(data) => handleListChange(data)}
              />
            </div>
            <Card
              onClick={() => toggleModalDetail(item.id)}
              className="mb-4 border-0 shadow-md rounded import-people"
            >
              <CardImg
                top
                width="100%"
                src={`assets/images/${item.image}`}
                alt={item.name}
              />
              <CardBody className="text-center pb-0">
                <CardSubtitle className="font-weight-bold small black">{item.name}</CardSubtitle>
                <CardText className="small secondary">{item.position}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ImportantPeople;
