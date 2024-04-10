import React from "react";
import { Modal, Button } from "react-bootstrap";

const CardModal = ({ isOpen, onClose, content, title }) => {
  if (!isOpen) return null;

  return (
    <Modal show={isOpen} onHide={onClose} size="md">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="word-break  overflow-auto-y">{content}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
