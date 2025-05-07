
import React, { useState, useEffect } from "react";
import "./OrderModal.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

function OrderModal({
  setShowOrderModal,
  addToCart,
  oneProductData,
  showOrderModal,
}) {
  const [productAmount, setProductAmount] = useState(1);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (showOrderModal && oneProductData?.images?.[0]?.image) {
      setMainImage(oneProductData.images[0].image);
    }
  }, [showOrderModal, oneProductData]);

  const handleCloseModal = () => {
    setShowOrderModal(false);
    setProductAmount(1);
    setMainImage(oneProductData?.images?.[0]?.image || "");
  };

  return (
    <div
      onClick={(e) => {
        if (e.target.classList.contains("orderModalBack")) {
          handleCloseModal();
        }
      }}
      className={showOrderModal ? "orderModalBack open" : "orderModalBack"}
    >
      <div
        onClick={(e) => e.preventDefault()}
        className={showOrderModal ? "orderModal open" : "orderModal"}
      >
        <div className="closeModal" onClick={handleCloseModal}>
          <IoMdCloseCircleOutline />
        </div>

        <div className="productImgSide">
          <div className="mainImg">
            <img src={mainImage} alt="Main product" />
          </div>
          <div className="itemImgs">
            {(oneProductData?.images || []).slice(0, 4).map((img, index) => (
              <div
                key={index}
                className="itemImg"
                onClick={() => setMainImage(img.image)}
              >
                <img src={img.image} alt={`Product thumbnail ${index + 1}`} />
              </div>
            ))}
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
                if (productAmount > 1) setProductAmount(productAmount - 1);
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
                handleCloseModal();
              }}
              className="addToCartBtn"
            >
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, nihil!


export default OrderModal;
