import { Button, Container, Table } from "react-bootstrap";
import UserList from "./UserList";
import { Link } from "react-router-dom";

function TableUsers({ users, onDeleteData }) {
  return (
    <Container className="mt-5">
      <Link to={"/add"}>
        <Button>Add</Button>
      </Link>
      <Table className="mt-3">
        <thead>
          <tr>
            <th>id</th>
            <th>Email</th>
            <th>Name</th>
            <th>Password</th>
            <th>Role</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserList key={user.id} user={user} onDeleteData={onDeleteData} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default TableUsers;
