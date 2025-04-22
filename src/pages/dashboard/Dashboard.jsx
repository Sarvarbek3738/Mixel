import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Switch from "@mui/material/Switch";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { toast } from "react-toastify";

const label = {
  inputProps: { "aria-label": "Switch demo", "aria-label": "Checkbox demo" },
};

function Dashboard({ userData, getUser }) {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [phone_number, setPhoneNumber] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("mixelToken")) {
      getUser();
    }
  }, []);
  useEffect(() => {
    setUserName(userData?.username);
    setFirstName(userData?.first_name);
    setLastName(userData?.last_name);
    setCardNumber(userData?.card_number);
    setPassword(userData?.password);
    setPhoneNumber(userData?.phone_number);
  }, [userData]);

  // updateUserData function
  const updateUserData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("mixelToken")}`
    );

    const raw = JSON.stringify({
      username: userName,
      first_name: firstName,
      last_name: lastName,
      password,
      phone_number,
      card_number: cardNumber,
      isadmin: false,
    });

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/users/me", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.id) {
          toast.success("Ma'lumotlar muvaffaqiyatli yangilandi!");
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="dashboardPage">
      <div className="container">
        <div className="basicTitle">
          <div className="basicTitleLeft">
            <div>
              <p>Home</p>
              <div>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
            <div>
              <p>Personal account</p>
            </div>
          </div>
        </div>
        <div className="mainContent">
          <div className="accountSidebar">
            <div className="userData">
              <div className="iconImg">
                <img src="/user.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>Shukurillo Tojonazarov</p>
                <p>+998 99 0333848</p>
              </div>
            </div>
            <div className="rowItem">
              <div className="iconImg">
                <img src="/cart.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>My installments</p>
              </div>
            </div>
            <div className="rowItem">
              <div className="iconImg">
                <img src="/file-text.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>My installments</p>
              </div>
            </div>
            <div className="rowItem">
              <div className="iconImg">
                <img src="/clock.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>My installments</p>
              </div>
            </div>
            <div className="rowItem">
              <div className="iconImg">
                <img src="/log-out.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>My installments</p>
              </div>
            </div>
          </div>
          <div className="rightForm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateUserData();
              }}
              action="#"
            >
              <h2 className="formTitle">Edit Your Profile</h2>
              <div className="row">
                <div className="rowItem">
                  <label>First Name</label>
                  <input
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    value={firstName}
                    required
                    type="text"
                    placeholder="Firstname"
                  />
                </div>
                <div className="rowItem">
                  <label>Last Name</label>
                  <input
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    value={lastName}
                    required
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="row">
                <div className="rowItem">
                  <label>Username</label>
                  <input
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    value={userName}
                    required
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="rowItem">
                  <label>Card Number</label>
                  <input
                    onChange={(e) => {
                      setCardNumber(e.target.value);
                    }}
                    value={cardNumber}
                    required
                    type="text"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
              </div>
              <div className="rowItem">
                <label>Phone</label>
                <input
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  value={phone_number}
                  required
                  type="text"
                  placeholder="+998 (12) 345 67 89"
                />
              </div>
              <div className="passwordChanges">
                <h2>Password Changes</h2>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  type="password"
                  placeholder="New Password"
                />
                <input type="password" placeholder="Confirim New Password" />
                <div className="formBtns">
                  <button className="cancelBtn">Cancel</button>
                  <button className="saveBtn">Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
