import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const logincredentials = {
     "username": email, 
     "password": password
     };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/login", logincredentials);
      if (response.data.loginsuccess) {
        setIsLoggedIn(true);
        navigate("/welcome");
      } else {
        setError("Invalid login credentials");
      }
    } catch (err) {
      console.error(err);
      setError("Error connecting to server");
    }
  };

  const goToRegister = () => {
    navigate("/adduser");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "380px" }}>
        <h3 className="text-center mb-4">Login</h3>

        {error && (
          <div className="alert alert-danger text-center">{error}</div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary w-100 mt-2" type="submit">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <span className="text-muted">Don't have an account?</span>
          <br />
          <button className="btn btn-link p-0 mt-1" onClick={goToRegister}>
            Register Here
          </button>
        </div>

        <div className="text-center mt-2">
          <small className="text-muted">
          </small>
        </div>
      </div>
    </div>
  );
}
