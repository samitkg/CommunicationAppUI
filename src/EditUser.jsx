import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    
  });

  const [loading, setLoading] = useState(true);

  // Get user details
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/user/${id}`)
      .then((res) => {
        setUser({
          name: res.data.name,
          email: res.data.email,
        });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Update API
  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`http://127.0.0.1:8000/user/${id}`, user)
      .then((res) => {
        alert("User updated successfully!");
        navigate("/userlist"); // redirect back
      })
      .catch((err) => console.log(err));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Edit User</h2>

      <form onSubmit={handleUpdate}>
        {/* NAME */}
        <div style={{ marginBottom: "15px" }}>
          <label>Name</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
            className="form-control"
          />
        </div>

        {/* EMAIL */}
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
            className="form-control"
          />
        </div>
          {/* Password */}
        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
            className="form-control"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button type="submit" className="btn btn-primary">
          Update User
        </button>
      </form>
    </div>
  );
}
