import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Userlist.jsx";
import EditUser from "./EditUser.jsx";
import Login from "./Login.jsx";
import Nav from "./Nav.jsx"
import Welcome from "./Welcome.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }

  setLoginStatus = (status) => {
    this.setState({ isLogin: status });
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/app/*"
            element={
              this.state.isLogin ? <Nav /> : <Navigate to="/" />
            }
/>

          {/* LOGIN PAGE */}
          {/* <Route path="/" element={<Login setLoginStatus={this.setLoginStatus} />} /> */}
          

          {/* PROTECTED LAYOUT */}
          <Route path="/app" element={<Nav />}>

            {/* Pages inside layout */}
            <Route path="welcome" element={<Welcome />} />
            <Route path="userlist" element={<UserList />} />
            <Route path="edituser/:id" element={<EditUser />} />

          </Route>

        </Routes>
      </Router>
    );
  }
}
