import React from "react";
import "./App.css";

import RegisterForm from "./Auth/Containers/RegisterForm/RegisterForm";
import LoginForm from "./Auth/Containers/LoginForm/LoginForm"

const App = () => {
  return (
    <>
      <RegisterForm />
      <LoginForm/>
      
    </>
  );
};

export default App;
