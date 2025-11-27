import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Nav";
import Login from "./Login";
import Welcome from "./Welcome";
import UserList from "./Userlist";
import EditUser from "./EditUser";
import AddUser from "./AddUser";
import UploadDocument from "./UploadDocument";   
import DocumentList from "./DocumentList";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {!isLoggedIn ? (
        // =============== BEFORE LOGIN ===============
        <Routes>
          <Route
            path="/"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/adduser" element={<AddUser />} /> 
          {/* Register page accessible ONLY before login */}
        </Routes>
      ) : (
        // =============== AFTER LOGIN ===============
        <>
          <Navbar />
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/" element={<Welcome />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/edituser/:id" element={<EditUser />} />
            <Route path="/uploadoc" element={<UploadDocument />} />
            <Route path="/documentlist" element={<DocumentList />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
