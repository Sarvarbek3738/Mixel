import React, { useEffect, useState } from "react";
import "./Modal.css";
import { toast } from "react-toastify";

function Modal({ showModal, openModal, closeModal }) {
  const [orders, setOrders] = useState(null);

  //   deleteOrder function
  const deleteOrder = (id) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("mixelToken")}`
    );

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://abzzvx.pythonanywhere.com/order-items/${id}/`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        toast.success("Order deleted succsessfully");
        getOrders();
      })
      .catch((error) => console.error(error));
  };
  // getOrders function
  const getOrders = () => {
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

    fetch("https://abzzvx.pythonanywhere.com/order-items/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setOrders(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="Modal">
      <div className="container">
        <div className="ModalClose">
          <h3>Orders</h3>
          <div>
            <img
              onClick={closeModal}
              src="/imgs/Component 2.svg"
              alt=""
            />
          </div>
        </div>
        <div className="modalPanelBlock">
          {orders?.map((item) => {
            return (
              <div className="Modal_Panel">
                <div className="Modal_Panel_Img">
                  <img src={item.main_image} alt="" />
                </div>
                <div className="Modal_Panel_Title">
                  <p>{item.product_name}</p>
                  <h3>16 559 000 cум</h3>
                </div>
                <div className="Modal_Panel_Btn">
                  <div className="Modal_Panel_Btn_namber">
                    <p className="amountTitle">Amount:</p>
                    <p>{item.amount}</p>
                    {/* <button className="Modal_Panel_Btn_plusBtn">+</button> */}
                  </div>
                  <div className="Modal_Panel_Btn_Icon">
                    {/* <div>
                      <i class="fa-regular fa-heart"></i>
                    </div> */}
                    <div
                      onClick={() => {
                        deleteOrder(item.id);
                      }}
                    >
                      <i class="fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="Modal_money">
          <div>
            <p>Total 3 products</p>
          </div>
          <div>
            <h3>12000000 UZS</h3>
          </div>
        </div>
        <div className="Modal_Shop">
          <div className="Modal_Continue">
            <button>Continue Shopping</button>
          </div>
          <div className="Modal_Make">
            <button>Make a purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
