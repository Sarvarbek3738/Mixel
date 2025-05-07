import React from "react";
import "./Checkout.css";
function Checkout() {
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
        <div className="mainContent">
          <div className="leftForms">
            <form action="#">
              <h2>Order palace</h2>
              <div className="dataTitle">
                <div className="titleNumber">
                  <p>1</p>
                  <h2>Your info</h2>
                </div>
                <div className="formInputs">
                  <div className="row">
                    <input type="text" placeholder="Last name" />
                    <input type="text" placeholder="First name" />
                  </div>
                  <div className="row">
                    <input type="text" placeholder="Father`s name" />
                    <input type="text" placeholder="Phone number" />
                  </div>
                </div>
              </div>
              <div className="yourOrder">
                <div className="titleNumber">
                  <p>2</p>
                  <h2>Your order</h2>
                </div>
                <div className="orderItems">
                  <div className="orderItem">
                    <div className="orderImg">
                      <img src="/public/credit-card.svg" alt="" />
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
                        <input type="text" placeholder="Your City" />
                      </div>
                      <div className="obtainingMethodItem">
                        <label htmlFor="city">Your district</label>
                        <input type="text" placeholder="Your district" />
                      </div>
                    </div>
                    <div className="obtainingMethodItem lastMethodItem">
                      <label htmlFor="city">Your address</label>
                      <input type="text" placeholder="Your street" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
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
            <button className="complateBtn" >Complete the purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
