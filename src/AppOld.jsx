import React, { useState } from "react";
import UserList from "./UserListCls.jsx";

export default class AppOld extends React.Component {
  constructor(props) {
    super(props);
    console.log("App component constructor");
    this.state = {
      name: "App",
      counter: 0     

    };   
    
    let users =[
        {
          "id": "691b1159d3ea56b3232f0695",
          "name": "samit",
          "email": "samitkg@gmail.com"
        },
        {
          "id": "691e92849afaa01427e6eb8d",
          "name": "Harsh",
          "email": "harsh@gmail.com"
        },
        {
          "id": "691e92c39afaa01427e6eb8e",
          "name": "Dominic",
          "email": "dominic@gmail.com"
        },
        {
          "id": "691e92e29afaa01427e6eb8f",
          "name": "Kamal",
          "email": "kamal@gmail.com"
        }
      ]

       let usersString = JSON.stringify(users); // convert object into string
       localStorage.setItem("users", usersString);

  }
  componentDidMount() {
    console.log("App component mounted");
  }


  componentWillUnmount() {
    console.log("App component unmounted");
  }

  changeNameAndCounter = () => {
    this.setState({ name: "New App" });
    this.setState({ counter: this.state.counter + 1 });
  };


  render() {    
    return (
      <div>
        <UserList/> 
      </div>
    );
  }
}
