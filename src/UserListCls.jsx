import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";   // <-- Add this


export default class UserListCls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
  const usersString = localStorage.getItem("users");
  if (usersString) {
    const users = JSON.parse(usersString);
    this.setState({ users });
  }
}

 render() {
    const { users } = this.state;
    return (
      <div className="container">
        <h1>User List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
