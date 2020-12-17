import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const ModalDetail = (props) => {
  const {
    size,
    className,
    children,
    toggleState,
    toggleChange,
    headerTitle,
  } = props;

  return (
    <div>
      <Modal
        isOpen={toggleState}
        toggle={toggleChange}
        className={className}
        size={size}
      >
        <ModalHeader toggle={toggleChange} className="border-0">
          {headerTitle}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </div>
  );
};

export default ModalDetail;
