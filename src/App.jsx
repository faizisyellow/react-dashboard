import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstence } from "./config/axios";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import TableUsers from "./components/TableUsers";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosInstence.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axiosInstence.delete(`/users/${id}`);
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableUsers users={users} onDeleteData={deleteData} />} />
        <Route path="/add" element={<AddUser onFetch={fetchData} />} />
        <Route path="/update/:id" element={<UpdateUser onFetch={fetchData} />} />
      </Routes>
    </Router>
  );
}

export default App;
