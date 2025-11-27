import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);

  // Fetch users
  const loadUsers = () => {
    axios
      .get("http://127.0.0.1:8000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log("Error:", err));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // DELETE user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://127.0.0.1:8000/user/${id}`);
      loadUsers(); // refresh list
    } catch (err) {
      console.log("Delete Error:", err);
    }
  };

  return (
      <div className="container mt-4">
      <h3 className="mb-3">User list</h3>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
          </tr>
        </thead>

        <tbody>
         {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>

            <td>
              {/* EDIT */}
              <Link
                to={`/edituser/${user.id}`}
                className="btn btn-primary btn-sm"
                style={{ marginRight: "8px" }}
              >
                Edit
              </Link>

              {/* DELETE */}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>  
  );
}
