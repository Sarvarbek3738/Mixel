import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  // getUser function
  const getUser = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/token/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.access) {
          localStorage.setItem("mixelToken", result.access);
          toast.success("Tizimga muvaffaqiyatli kirdingiz!");
          navigate("/");
        } else {
          toast.error("Login yoki parol noto'g'ri!");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="signIn">
        <div className="container">
          <div className="signInImg">
            <img src="/Side Image (1).png" alt="" />
          </div>
          <div></div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getUser();
            }}
            action="#"
          >
            <div className="signInText">
              <h1>Login to Mixel.uz</h1>
              <p>Enter your details below</p>
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                type="text"
                placeholder="Username"
              />
              <br />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="text"
                placeholder="Password"
              />
              <br />
              <div className="signInIcon">
                <div>
                  <button>Login</button>{" "}
                </div>
                <div>
                  <p>Forgot your password?</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
