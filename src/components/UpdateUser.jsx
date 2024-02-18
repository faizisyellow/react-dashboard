import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstence } from "../config/axios";

function UpdateUser({ onFetch }) {
  const nav = useNavigate();
  const { id } = useParams();

  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputRolesId, setInputRolesId] = useState(0);

  const submit = async (e) => {
    e.preventDefault();

    let body = {
      email: inputEmail ? inputEmail : undefined,
      name: inputName ? inputName : undefined,
      password: inputPassword ? inputPassword : undefined,
      rolesId: inputRolesId ? inputRolesId : undefined,
    };

    try {
      await axiosInstence.patch(`/users/${id}`, body);
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

export default UpdateUser;
