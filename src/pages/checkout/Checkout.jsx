import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Checkout({ orderItems }) {
  const [first_name, setFirstName] = React.useState(null);
  const [last_name, setLastName] = React.useState(null);
  const [phone_number, setPhoneNumber] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [fio, setFio] = React.useState(null);
  const [region, setRegion] = React.useState(null);
  const [city, setCity] = React.useState(null);
  const [orderedProducts, setOrderedProducts] = useState(null);

  const navigation = useNavigate();
  const getorderedProducts = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("mixelToken")}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://abzzvx.pythonanywhere.com/checkout/items/get/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setOrderedProducts(result);
      })
      .catch((error) => console.error(error));
  };

  // updateOrder function
  const updateOrder = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("mixelToken")}`
    );

    const raw = JSON.stringify({
      phone_number,
      first_name,
      last_name,
      fio,
      payment_type: "cash",
      region: "string",
      city: "string",
      address,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/orders/7/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        toast.success("Buyurtmanign muvaffaqiyatli yaratildi!");
        navigation("/");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getorderedProducts();
    console.log(orderedProducts);
  }, []);
  return (
    <div className="checkoutPage">
      <div className="container">
        <div className="basicTitleLeft">
          <div>
            <p>Home</p>
            <div>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <div>
            <p>Checkout</p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateOrder();
          }}
          className="mainContent"
        >
          <div className="leftForms">
            <div className="form">
              <h2>Order palace</h2>
              <div className="dataTitle">
                <div className="titleNumber">
                  <p>1</p>
                  <h2>Your info</h2>
                </div>
                <div className="formInputs">
                  <div className="row">
                    <input
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      required
                      type="text"
                      placeholder="Last name"
                    />
                    <input
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      required
                      type="text"
                      placeholder="First name"
                    />
                  </div>
                  <div className="row">
                    <input
                      onChange={(e) => {
                        setFio(e.target.value);
                      }}
                      required
                      type="text"
                      placeholder="Father`s name"
                    />
                    <input
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      required
                      type="text"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="yourOrder">
                <div className="titleNumber">
                  <p>2</p>
                  <h2>Your order</h2>
                </div>
                <div className="orderItems">
                  {orderedProducts?.map((product) => {
                    return (
                      <div className="orderItem">
                        <div
                          onClick={() => {
                            console.log(product);
                          }}
                          className="orderImg"
                        >
                          <img src={product?.product_image} alt="" />
                        </div>
                        <div className="orderItemInfo">
                          <h2>Product name</h2>
                        </div>
                        <div className="orderAmount">
                          <p>1 pt</p>
                        </div>
                        <div className="orderItemPrice">
                          <h2>$ 100.00</h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="optainingMethod">
                  <div className="titleNumber">
                    <p>3</p>
                    <h2>Method of obtaining</h2>
                  </div>
                  <div className="obtainingData">
                    <div className="obtainingMethodItems">
                      <div className="obtainingMethodItem">
                        <label htmlFor="city">Your city/province</label>
                        <input
                          onChange={(e) => {
                            setAddress(`${address} ${e.target.value}`);
                          }}
                          required
                          type="text"
                          placeholder="Your City"
                        />
                      </div>
                      <div className="obtainingMethodItem">
                        <label htmlFor="city">Your district</label>
                        <input
                          onChange={(e) => {
                            setAddress(`${address} ${e.target.value}`);
                          }}
                          required
                          type="text"
                          placeholder="Your district"
                        />
                      </div>
                    </div>
                    <div className="obtainingMethodItem lastMethodItem">
                      <label htmlFor="city">Your address</label>
                      <input
                        onChange={(e) => {
                          setAddress(`${address} ${e.target.value}`);
                        }}
                        required
                        type="text"
                        placeholder="Your street"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightInfo">
            <h2>Your order info</h2>
            <div className="rightInfoRows">
              <div className="orderRow">
                <p>Subtotal price:</p>
                <h3>526350 uzs</h3>
              </div>
              <div className="orderRow">
                <p>Delivery:</p>
                <h3>0 uzs</h3>
              </div>
            </div>
            <div className="totalPrice">
              <p>Total price:</p>
              <h3>5 262 000 uzs</h3>
            </div>
            <button className="complateBtn">Complete the purchase</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
