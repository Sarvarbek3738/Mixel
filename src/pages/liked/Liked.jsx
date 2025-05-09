import React, { useEffect, useState } from "react";
import "./Liked.css";
// import ProductCard from "../../components/productCard/ProductCard";
import ProductBox from "../../components/productBox/ProductBox";
import Skeleton from "react-loading-skeleton";
import NoProduct from "../../components/noproduct/NoProduct";
import OrderModal from "../../components/orderModal/OrderModal";
import Paginations from "../../components/pagination/Paginations";

function Liked({
  deleteFromLiked,
  getData,
  getUser,
  userData,
  getOneProductData,
  addToCart,
  addToLiked,
  oneProductData,
  totalPages,
  currentPage,
  handlePageChange,
  getLikedProducts,
  likedProducts,
}) {
  const [loading, setLoading] = useState(true);

  const [showOrderModal, setShowOrderModal] = useState(false);

  // likedProducts && setLoading(false);

  // const getLikedProducts = () => {
  //   const myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     `Bearer ${localStorage.getItem("mixelToken")}`
  //   );

  //   const requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     `https://abzzvx.pythonanywhere.com/liked-items/?page=${currentPage}`,
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setLikedProducts(result);
  //       setTotalPages(result?.total_pages);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.error(error));
  // };

  console.log(likedProducts);
  

  useEffect(() => {
    if (localStorage.getItem("mixelToken")) {
      getLikedProducts();
      getData();
    } else {
      setLoading(false);
    }
    setLoading(false);
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);



  return (
    <div className="likedPage">
      <div className="container">
        <div className={showOrderModal ? "forModal open" : "forModal"}>
          <OrderModal
            addToCart={addToCart}
            oneProductData={oneProductData}
            showOrderModal={showOrderModal}
            setShowOrderModal={setShowOrderModal}
          />
        </div>
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
          {likedProducts?.results?.map((item) => (
            <ProductBox
              getLikedProducts={getLikedProducts}
              // deleteFromLiked={deleteFromLiked}
              userData={userData}
              getUser={getUser}
              getData={getData}
              deleteFromLiked={deleteFromLiked}
              item={item.product}
              key={item.id}
              addToLiked={addToLiked}
              getOneProductData={getOneProductData}
              setShowOrderModal={setShowOrderModal}
            />
          ))}
          {loading &&
            [1, 2, 3, 4, 5].map((item) => {
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
          {!loading && likedProducts?.results?.length === 0 && <NoProduct />}
        </div>
        {!loading && (
          <>
            <Paginations
              handlePageChange={handlePageChange}
              totalPages={totalPages}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Liked;
