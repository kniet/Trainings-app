import React, { useState } from "react";
import "../styles/loginPage.css";


function LoginPage() {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log("test");
  }

  return (
    <>
      <header class="headerLogin">
        <h1 class="h1Login">Welcome</h1>
        <img src={require("../images/logo.png")} alt="Logo" class="logoLogin" />
      </header>

      <main class="mainLogin">
        <div class="containerLogin">
          <p class="pLogin">Username</p>
          <input
            class="inputBoxLogin"
            type="text"
            name="Username"
            onChange={handleUserName}
          ></input>
          <p class="pLogin">Password</p>
          <input
            class="inputBoxLogin"
            type="password"
            onChange={handlePassword}
          ></input>
          <button class="logInButton" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </main>
      <p class="loginPageError">{error}</p>
    </>
  );
}

export default LoginPage;
