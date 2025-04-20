import React, { useState } from "react";
import "./OrderModal.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
function OrderModal({
  setShowOrderModal,
  addToCart,
  oneProductData,
  showOrderModal,
}) {
  const [productAmount, setProductAmount] = useState(1);

  return (
    <div
      onClick={(e) => {
        if (e.target.classList.contains("orderModalBack")) {
          setShowOrderModal(false);
        }
      }}
      className={showOrderModal ? "orderModalBack open" : "orderModalBack"}
    >
      <div
        onClick={(e) => {
          e.preventDefault();
        }}
        className={showOrderModal ? "orderModal open" : "orderModal"}
      >
        <div
          className="closeModal"
          onClick={() => {
            setShowOrderModal(false);
          }}
        >
          <IoMdCloseCircleOutline />
        </div>
        <div className="productImgSide">
          <div className="mainImg">
            <img src={oneProductData?.images[0]?.image} alt="" />
          </div>
          <div className="itemImgs">
            <div className="itemImg">
              <img src={oneProductData?.images[0]?.image} alt="" />
            </div>
            <div className="itemImg">
              <img src={oneProductData?.images[1]?.image} alt="" />
            </div>
            <div className="itemImg">
              <img src={oneProductData?.images[2]?.image} alt="" />
            </div>
            <div className="itemImg">
              <img src={oneProductData?.images[3]?.image} alt="" />
            </div>
          </div>
        </div>
        <div className="productData">
          <h2 className="productTitle">{oneProductData?.name}</h2>
          <h3
            className={
              oneProductData?.discount_price
                ? "productPrice disabled"
                : "productPrice"
            }
          >
            Price: <span>{oneProductData?.price} UZS</span>
          </h3>
          {oneProductData?.discount_price && (
            <h3 className="discountPrice">
              Discount Price: {oneProductData?.discount_price}
            </h3>
          )}

          <p className="detailsTitle">Details: </p>
          <p className="productDetails">{String(oneProductData?.details)}</p>
          <p>Country: {oneProductData?.country}</p>
          <div className="counter">
            <button
              onClick={() => {
                productAmount > 1
                  ? setProductAmount(productAmount - 1)
                  : setProductAmount(productAmount);
              }}
              className="minusBtn"
            >
              -
            </button>
            <p>{productAmount}</p>
            <button
              onClick={() => {
                setProductAmount(productAmount + 1);
              }}
              className="plusBtn"
            >
              +
            </button>
          </div>
          <div className="addToCart">
            <button
              onClick={() => {
                addToCart(oneProductData?.id, productAmount);
                setShowOrderModal(false)
              }}
              className="addToCartBtn"
            >
              {" "}
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
