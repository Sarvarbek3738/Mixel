import React, { useEffect, useState } from "react";
import "./Liked.css";
// import ProductCard from "../../components/productCard/ProductCard";
import ProductBox from "../../components/productBox/ProductBox";
import Skeleton from "react-loading-skeleton";
function Liked({}) {
  const [likedProducts, setLikedProducts] = useState(null);
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
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    if (localStorage.getItem("mixelToken")) {
      getLikedProducts();
    }
  }, [likedProducts]);
  useEffect(() => {
    window.scrollTo({
      top: "0",
    });
  }, []);
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
          {likedProducts?.map((item) => {
            return <ProductBox item={item.product} />;
          }) ||
            [1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item) => {
              return (
                <div className="loadingSkeletons">
                  <Skeleton variant="rectangular" width={230} height={210} />
                  <Skeleton
                    variant="rectangular"
                    style={{ marginTop: "30px" }}
                    width={230}
                    height={18}
                  />
                  <Skeleton
                    variant="rectangular"
                    style={{ marginTop: "20px" }}
                    width={230}
                    height={32}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    className="skeletonButtons"
                  >
                    <Skeleton
                      variant="rectangular"
                      style={{ marginTop: "20px" }}
                      width={50}
                      height={42}
                    />
                    <Skeleton
                      variant="rectangular"
                      style={{ marginTop: "20px" }}
                      width={50}
                      height={42}
                    />
                    <Skeleton
                      variant="rectangular"
                      style={{ marginTop: "20px" }}
                      width={50}
                      height={42}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Liked;
