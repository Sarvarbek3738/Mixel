import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductBox.css";
function ProductBox({
  getUser,
  userData,
  deleteFromLiked,
  item,
  getData,
  getOneProductData,
  addToLiked,
  getLikedProducts,
  setShowOrderModal,
}) {
  const navigate = useNavigate();
  const [localLiked, setLocalLiked] = useState(false);
  // console.log(item.like_id[0]);

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
          <h3 className="Title4">
            {item?.name?.length > 10
              ? item?.name.slice(0, 15) + "..."
              : item?.name}
          </h3>

          <div className="Box4Tovar">
            <div
              onClick={(e) => {
                if (userData) {
                  getOneProductData(item?.id);
                  setShowOrderModal(true);
                } else {
                  navigate("/signup");
                }
                e.preventDefault();
              }}
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                if (userData) {
                  if (item?.like) {
                    setLocalLiked(false);
                    deleteFromLiked(item?.like_id);
                    getLikedProducts();
                  } else {
                    addToLiked(item.id);
                    setLocalLiked(true);
                  }
                } else {
                  navigate("/signup");
                }
                getData();
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
