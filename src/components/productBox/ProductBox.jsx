import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductBox.css";
function ProductBox({
  getUser,
  userData,
  deleteFromLiked,
  item,
  getData,
  getOneProductData,
  addToLiked,
  setShowOrderModal,
}) {
  userData
  const [localLiked, setLocalLiked] = useState(false);
  return (
    <>
      <Link to={`/product/${item?.id}`}>
        <div className="box4-1">
          <div className="cardImg">
            {item?.discount && (
              <div className="discVal">
                <p>{item.discount}%</p>
              </div>
            )}
            <img src={item?.images[0]?.image} alt="" />
          </div>
          <div className="Box4Narx">
            <div>
              <h3>{item?.price} UZS</h3>
            </div>
          </div>
          <h3 className="Title4">{String(item?.name).slice(0, 28)}</h3>

          <div className="Box4Tovar">
            <div
              onClick={(e) => {
                e.preventDefault();
                getOneProductData(item?.id);
                setShowOrderModal(true);
              }}
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                setLocalLiked(false);
                if (item?.like) {
                  deleteFromLiked(item.id);
                  getData();
                } else {
                  addToLiked(item.id);
                  setLocalLiked(true);
                  getData();
                }
              }}
              className="hear"
            >
              <i
                class={
                  item?.like || localLiked
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart"
                }
              ></i>
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <i class="fa-solid fa-scale-balanced"></i>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductBox;
