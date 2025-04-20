import React from "react";
import "./Liked.css";
// import ProductCard from "../../components/productCard/ProductCard";
import ProductBox from "../../components/productBox/ProductBox";
function Liked({ likedProducts, getLikedProducts }) {
  console.log(likedProducts);

  return (
    <div className="likedPage">
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
              <p>Featured</p>
            </div>
          </div>
        </div>
        <h2 className="pageTitle">Featured</h2>
        <div className="productsBlock">
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </div>
      </div>
    </div>
  );
}

export default Liked;
