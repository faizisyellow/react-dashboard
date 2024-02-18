import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserList({ user, onDeleteData }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.email}</td>
      <td>{user.name}</td>
      <td>{user.password}</td>
      <td>{user.role.name}</td>
      <td>
        <Link to={`/update/${user.id}`}>
          <Button className="btn btn-warning">Update</Button>
        </Link>
      </td>
      <td>
        <Button className="btn btn-danger" onClick={() => onDeleteData(user.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default UserList;
