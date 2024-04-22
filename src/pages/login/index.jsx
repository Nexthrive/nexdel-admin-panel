import React from "react";
import "../../index.scss";
import "./index.scss";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";
function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };

    axios
      .post("http://localhost:3000/user/login", credentials)
      .then((response) => {
        console.log("Login successful", response.data);
        const token = response.data.token;
        Cookies.set("token", token); // Store the token
        navigate("/home");
      })
      .catch((error) => {
        console.error("Login error", error);
      });
  };
  return (
    <div className="main-div">
      <div className="left-div">
        <img
          className="image-green"
          src="https://utfs.io/f/f6b8c070-a2ce-4e99-aa62-3610db3707d5-w6m9r0.png"
          alt=""
        />
        <div className="div-inside">
          <img
            src="https://utfs.io/f/2f48fc1f-7a42-4e17-be5a-e6604f92c429-whw7xy.png"
            alt=""
          />
          <div className="">
            <h1 className="div-inside-text-title">Hello</h1>
            <h1 className="div-inside-text-title2">
              Let’s Get <span>Sending</span> Shall We
            </h1>
            <p className="text-login">
              Please login to use the Nex Delivery admin panel, dear admin . . .{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="right-div">
        <h1 className="login-title">Login</h1>
        <form className="login-form">
          <label htmlFor="email" className="username-text">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="username-input"
          />
          <label htmlFor="Password" className="password-text">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
          />
          <button type="submit" onClick={handleLogin} className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default index;
