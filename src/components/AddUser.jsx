import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { axiosInstence } from "../config/axios";
import { useNavigate } from "react-router-dom";

function AddUser({ onFetch }) {
  const nav = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputRolesId, setInputRolesId] = useState(0);

  const submit = async (e) => {
    e.preventDefault();

    let body = {
      email: inputEmail,
      name: inputName,
      password: inputPassword,
      rolesId: inputRolesId,
    };

    try {
      await axiosInstence.post("/users", body);
      onFetch();
      nav("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container className="mt-3">
      <Form className="d-flex row">
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setInputEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name" onChange={(e) => setInputName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="password" onChange={(e) => setInputPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Roles id</Form.Label>
          <Form.Control type="number" placeholder="roles" onChange={(e) => setInputRolesId(Number(e.target.value))} />
        </Form.Group>

        <Button onClick={submit}>Submit Users</Button>
      </Form>
    </Container>
  );
}

export default AddUser;
