import React, { useEffect } from "react";
import "./PosterPage.css";
import ProductBox from "../../components/productBox/ProductBox";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
function PosterPage({
  getUser,
  userData,
  key,
  deleteFromLiked,
  addToLiked,
  getOneProductData,
  setShowOrderModal,
  item,
  getData,
}) {
  const id = useParams();
  const [banner, setBanner] = React.useState([]);
  const [posterProducts, setPosterProducts] = React.useState([]);
  const getBanner = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/galary/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setBanner(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {}, []);
  const getPosterProducts = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://abzzvx.pythonanywhere.com/products/?galary=${id.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setPosterProducts(result);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getPosterProducts();
  }, [id.id]); // id o'zgarganda mahsulotlar qayta yuklanadi

  useEffect(() => {
    getBanner();
  }, []); // bannerlar faqat bir marta yuklanadi

  return (
    <div className="posterPage">
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
              <p>PosterPage</p>
            </div>
          </div>
        </div>
        {!banner?.results?.length ? (
          <Skeleton
            variant="rectangular"
            style={{ marginBottom: "10px" }}
            width={1300}
            height={324}
          />
        ) : (
          banner.results
            .filter((item) => item.id == id.id)
            .map((item) => (
              <div className="posterBanner" key={item.id}>
                {item.image && <img src={item.image} alt="Banner" />}
              </div>
            ))
        )}
        <div className="posterProducts">
          {/* {posterProducts?.results?.map((item) => {
            return <ProductBox item={item} />;
          })} */}
          {posterProducts?.results?.map((item, index) => {
            if (index < 10) {
              return (
                <ProductBox
                  getUser={getUser}
                  userData={userData}
                  key={item.id}
                  deleteFromLiked={deleteFromLiked}
                  addToLiked={addToLiked}
                  getOneProductData={getOneProductData}
                  setShowOrderModal={setShowOrderModal}
                  item={item}
                  getData={getData}
                />
              );
            } else {
              return;
            }
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

export default PosterPage;
