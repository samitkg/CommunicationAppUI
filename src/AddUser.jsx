import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      redirect: false,
      error: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("http://127.0.0.1:8000/user", newUser)
      .then((response) => {
        console.log("User added:", response.data);
        this.setState({ redirect: true });
      })
      .catch((err) => {
        console.error("Error:", err);
        this.setState({ error: "Failed to add user. Try again." });
      });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow-lg p-4" style={{ width: "380px" }}>
          <h3 className="text-center mb-3">Add New User</h3>
          <hr />

          {this.state.error && (
            <div className="alert alert-danger">{this.state.error}</div>
          )}

          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Enter full name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Enter email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Enter password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Create Account
            </button>
          </form>
        </div>
      </div>
    );
  }
}
