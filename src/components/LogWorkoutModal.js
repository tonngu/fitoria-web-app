import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const LogWorkoutModal = ({ show, handleClose }) => {
  const [workoutData, setWorkoutData] = useState({
    date: "",
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
  });

  const handleChange = (e) => {
    setWorkoutData({ ...workoutData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(workoutData); // Placeholder for submitting data
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
          Log New Workout
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#0B0C10", color: "#C5C6C7" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Exercise</Form.Label>
            <Form.Control
              type="text"
              name="exercise"
              placeholder="Enter exercise"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Sets</Form.Label>
            <Form.Control
              type="number"
              name="sets"
              placeholder="Number of sets"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Reps</Form.Label>
            <Form.Control
              type="number"
              name="reps"
              placeholder="Number of reps per set"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Weight (lbs)</Form.Label>
            <Form.Control
              type="number"
              name="weight"
              placeholder="Weight per rep"
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
          Submit
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

export default LogWorkoutModal;
