import React from "react";
import "./ProductAlotCard.css";
function ProductAlotCard({item}) {
  return (
    <>
      <div className="PhoneFiltrAlotCards">
        <div className="AloImg">
          <img src={item?.images[0]?.image} alt="" />
        </div>
        <div className="AlotTitle">
          <h3>{item?.name}</h3>
          <p>
            Brend: <span>{item?.brand}</span>
          </p>
          <p>
            Ishlab chiqaruvchi davlat: <span>{item?.country}</span>
          </p>
          <p>
            Turi: <span>An‘anaviy</span>
          </p>
        </div>
        <div className="AlotBuy">
          <h4>{item?.monthly_price} сум/мес</h4>
          <p>{item?.price} сум</p>
          <div>
            <button>
              <div>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div>
                <p>В корзину</p>
              </div>
            </button>
          </div>
          <div className="AlotBuyIcon">
            <div className="AlotBuyIconHeard">
              <i class="fa-solid fa-heart"></i>
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
