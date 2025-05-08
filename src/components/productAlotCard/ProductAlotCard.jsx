import React, { useState } from "react";
import "./ProductAlotCard.css";
function ProductAlotCard({
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
  const [localLiked, setLocalLiked] = useState(false);

  return (
    <>
      <div className="PhoneFiltrAlotCards">
        <div className="AloImg">
          {item?.images[0]?.image && (
            <img src={item?.images[0]?.image} alt="" />
          )}
        </div>
        <div className="AlotTitle">
          <h3>{item?.name}</h3>
          <p>
            Brend: <span>{item?.brand}</span>
          </p>
          <p>
            Ishlab chiqaruvchi davlat: <span>{item?.country}</span>
          </p>
        </div>
        <div className="AlotBuy">
          <h4>{item?.price} сум/мес</h4>
          <div className="AlotBuyBtn">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (userData) {
                  getOneProductData(item?.id);
                  setShowOrderModal(true);
                } else {
                  navigate("/signup");
                }
              }}
            >
              <div>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div>
                <p>To Cart</p>
              </div>
            </button>
          </div>
          <div className="AlotBuyIcon">
            <div
              className="AlotBuyIconHeard"
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
            >
              <i
                class={
                  item?.like || localLiked
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart"
                }
              ></i>
            </div>
            <div>
              <i class="fa-solid fa-scale-balanced"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductAlotCard;
