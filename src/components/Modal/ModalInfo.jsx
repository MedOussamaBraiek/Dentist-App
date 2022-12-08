import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./modal.css";
import { UilArrowRight, UilMultiply } from "@iconscout/react-unicons";

function ModalInfo(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Modal
        size="lg"
        scrollable={true}
        style={{ marginTop: "5rem" }}
        isOpen={props.modal}
        toggle={props.toggle}
      >
        <ModalHeader toggle={props.toggle}>
          <h4 className="modal__header">{props.title}</h4>
          <div onClick={props.toggle} className="close_btn ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="">
            <p>{props.p1}</p>
            <img
              className="teeths mt-3 mb-5 img-fluid"
              alt="img1"
              src={props.img1}
            />
            <p>{props.p2}</p>
            <img
              className="teeths mt-3 mb-5 img-fluid"
              alt="img1"
              src={props.img2}
            />
            <p>{props.p3}</p>
            <img
              className="teeths mt-3 mb-5 img-fluid"
              alt="img1"
              src={props.img3}
            />
            {props.p4 && (
              <>
                <p>{props.p4}</p>
                <img
                  className="teeths mt-3 img-fluid"
                  alt="img1"
                  src={props.img4}
                />
              </>
            )}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggle}>
            Fermer
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalInfo;
