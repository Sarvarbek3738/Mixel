import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const [username, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setUserPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: "0",
      // behavior: "smooth",
    });
  }, []);

  // registerUser
  const registerUser = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username,
      email,
      password,
      isadmin: true,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/users/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.id && password == confirmPassword) {
          toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
          navigate("/login");
        } else if (password != confirmPassword) {
          toast.info("Parolni tekshiring");
        } else {
          toast.error("result.email");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="signUp">
        <div className="container">
          <div className="signUpImg">
            <img src="/Side Image (1).png" alt="" />
          </div>
          <div></div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              registerUser();
            }}
            action="#"
          >
            <div className="signUpText">
              <h1>Create an account</h1>
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
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="Email "
              />
              <br />
              <input
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                type="text"
                placeholder="Confirm password"
              />
              <br />
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="text"
                placeholder="Create an account"
              />
              <br />
              <button className="Account">Create an account</button> <br />
              <button className="google">
                <div>
                  <img src="/Icon-Google.svg" alt="" />
                </div>{" "}
                <div>Sign up with Google</div>
              </button>
              <h5 className="toLogin">
              Already have an account?{" "}
                <Link to={"/login"}>Login</Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
