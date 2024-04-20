import React, { useState } from "react";
import { Modal, Button, Form, InputGroup, FormControl, FormGroup, FormCheck } from "react-bootstrap";

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button
        style={{ color: "white" }}
        className="nav-link btn btn-secondary"
        onClick={handleShow}
      >
        Login
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">Sign in to LuxChoronos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Email</Form.Label>
              <InputGroup>
                <InputGroup.Text><i className="fas fa-envelope"></i></InputGroup.Text>
                <FormControl type="email" placeholder="example@company.com" />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Your Password</Form.Label>
              <InputGroup>
                <InputGroup.Text><i className="fas fa-unlock-alt"></i></InputGroup.Text>
                <FormControl type="password" placeholder="Password" />
              </InputGroup>
            </Form.Group>

            <FormGroup className="mb-3 d-flex justify-content-between align-items-center">
              <FormCheck type="checkbox" id="defaultCheck55" label="Remember me" />
              <a href="#" className="small">Lost password?</a>
            </FormGroup>

            <Button variant="primary" type="submit" className="d-grid mb-3 w-100">Log in</Button>
          </Form>

          <div className="text-center mb-3">
            <span className="fw-normal">or login with</span>
          </div>

          <div className="btn-wrapper my-4 text-center">
            <Button variant="outline-secondary" className="btn-pill me-2"><i className="fab fa-facebook-f"></i></Button>
            <Button variant="outline-secondary" className="btn-pill me-2"><i className="fab fa-twitter"></i></Button>
            <Button variant="outline-secondary" className="btn-pill"><i className="fab fa-github"></i></Button>
          </div>

          <p className="text-center">Not registered? <a href="#" className="fw-bold">Create account</a></p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
