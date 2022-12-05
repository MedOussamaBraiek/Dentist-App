import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./modal.css";
import { UilArrowRight, UilMultiply } from "@iconscout/react-unicons";

function ModalInfo(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="btn__info" onClick={toggle}>
        More Info
      </button>
      <Modal
        className="modal"
        isOpen={modal}
        toggle={toggle}
        {...args}
        size="lg"
        scrollable={true}
        centered={true}
        fullscreen={true}
      >
        <ModalHeader toggle={toggle} className=" modal__header">
          <div> {args.work.title}</div>

          <div onClick={toggle} className="close_btn ">
            <UilMultiply />
          </div>
        </ModalHeader>
        <ModalBody>
          <p>{args.work.description}</p>
          <ul className="pl-3">
            <li>
              <p>{args.work.info1}</p>
            </li>
            <li>
              <p>{args.work.info2}</p>
            </li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <div className="d-flex">
            <a href={args.url} target="_blank" rel="noreferrer noopener">
              <button className="btn highlighted-btn demo" onClick={toggle}>
                Demo
                <UilArrowRight className="pl-1 arrow" />
              </button>
            </a>
            <Button color="secondary" className="demo cancel" onClick={toggle}>
              Cancel
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalInfo;
