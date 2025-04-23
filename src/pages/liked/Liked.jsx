

import React, { useEffect, useState } from "react";
import "./Liked.css";
// import ProductCard from "../../components/productCard/ProductCard";
import ProductBox from "../../components/productBox/ProductBox";
import Skeleton from "react-loading-skeleton";

function Liked({}) {
  const [likedProducts, setLikedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLikedProducts = () => {
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

    fetch("https://abzzvx.pythonanywhere.com/liked-items/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLikedProducts(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("mixelToken")) {
      getLikedProducts();
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="likedPage">
      <div className="container">
        <div className="basicTitle">
          <div className="basicTitleLeft">
            <div>
              <p>Home</p>
              <div>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
            <div>
              <p>Featured</p>
            </div>
          </div>
        </div>
        <h2 className="pageTitle">Featured</h2>

        <div className="productsBlock">
          {loading ? (
            [1, 2, 3, 4, 5].map((item) => (
              <div className="loadingSkeletons" key={item}>
                <Skeleton width={230} height={210} />
                <Skeleton style={{ marginTop: "30px" }} width={230} height={18} />
                <Skeleton style={{ marginTop: "20px" }} width={230} height={32} />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className="skeletonButtons"
                >
                  <Skeleton style={{ marginTop: "20px" }} width={50} height={42} />
                  <Skeleton style={{ marginTop: "20px" }} width={50} height={42} />
                  <Skeleton style={{ marginTop: "20px" }} width={50} height={42} />
                </div>
              </div>
            ))
          ) : likedProducts.length === 0 ? (
            <div className="emptyWishlist">
              <p>Istaklar ro'yxatida hech narsa mavjud emas</p>
            </div>
          ) : (
            likedProducts.map((item) => (
              <ProductBox item={item.product} key={item.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Liked;
