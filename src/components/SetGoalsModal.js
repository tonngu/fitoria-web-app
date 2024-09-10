// src/components/SetGoalsModal.js
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const SetGoalsModal = ({ show, handleClose }) => {
  const [goalData, setGoalData] = useState({
    goalType: "",
    target: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setGoalData({ ...goalData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(goalData); // Placeholder for submitting data
    handleClose(); // Close modal after submitting
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "#1F2833", borderColor: "#45A29E" }}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "#66FCF1" }}
        >
          Set New Goals
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#0B0C10", color: "#C5C6C7" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Goal Type</Form.Label>
            <Form.Control
              as="select"
              name="goalType"
              onChange={handleChange}
              required
            >
              <option>Choose...</option>
              <option value="weight">Weight</option>
              <option value="endurance">Endurance</option>
              <option value="strength">Strength</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Target</Form.Label>
            <Form.Control
              type="text"
              name="target"
              placeholder="Enter target"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              type="date"
              name="deadline"
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer
        style={{ backgroundColor: "#1F2833", borderColor: "#45A29E" }}
      >
        <Button
          onClick={handleSubmit}
          style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
        >
          Set Goal
        </Button>
        <Button
          onClick={handleClose}
          style={{ backgroundColor: "#666", color: "#C5C6C7" }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SetGoalsModal;
