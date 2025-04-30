import React, { useEffect, useState } from "react";
// import React, { useRef, useState } from 'react';
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Link } from "react-router-dom";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ProductBox from "../../components/productBox/ProductBox";
import OrderModal from "../../components/orderModal/OrderModal";

function Home({
  getUser,
  userData,
  deleteFromLiked,
  addToLiked,
  categories,
  addToCart,
  getOneProductData,
  oneProductData,
  getCategories,
  products,
  getData,
  getBrands,
  brands,
}) {

  const [showOrderModal, setShowOrderModal] = useState(false);
  // getBanner function
  const [banner, setBanner] = useState(null);
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

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div className="home">
      <div>
        <div className="hero">
          <div className={showOrderModal ? "forModal open" : "forModal"}>
            <OrderModal
              addToCart={addToCart}
              oneProductData={oneProductData}
              showOrderModal={showOrderModal}
              setShowOrderModal={setShowOrderModal}
            />
          </div>

          <div className="container">
            {banner && (
              <Swiper
                slidesPerView={1}
                spaceBetween={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {banner?.results.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <Link to={`/poster/${item.id}`} className="heroBanner">
                        <img src={item?.image} alt="" />
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}{" "}
            {!banner && (
              <Skeleton
                variant="rectangular"
                style={{ marginTop: "60px", marginBottom: "10px" }}
                width={1300}
                height={324}
              />
            )}
          </div>
        </div>
        <main>
          <section className="section1">
            <div className="container">
              <div className="section1Title">
                {(products && <h3>Flash Deals</h3>) || (
                  <Skeleton variant="rectangular" width={230} height={20} />
                )}
                {(products && <p>View All →</p>) || (
                  <Skeleton variant="rectangular" width={230} height={20} />
                )}
              </div>
              <div className="Box1">
                {products?.results?.map((item, index) => {
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
                        <Skeleton
                          variant="rectangular"
                          width={230}
                          height={210}
                        />
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
          </section>
          <section className="section2">
            <div className="container">
              {(categories && <h3>Top Categories</h3>) || (
                <Skeleton variant="rectangular" width={230} height={20} />
              )}

              <div className="box2">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {categories?.results?.map((category) => {
                    return (
                      <SwiperSlide key={category.id}>
                        <Link
                          to={`/category/${category.id}`}
                          className="box2-1"
                        >
                          <h4>{category?.name}</h4>
                          <div className="categoryImg">
                            <img src={category?.image} alt="" />
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </section>
          <section className="section3">
            <div className="container">
              <div className="box3">
                <div>
                  <h1>Apple iPhone X 64 ГБ</h1>
                  <h5>
                    An all-new 5.8-inch Super Retina display <br /> that fits
                    comfortably in your hand and looks stunning—that's <br />{" "}
                    iPhone X.
                  </h5>
                </div>
                <div className="Box3Img">
                  <img src="/imgs/892 1.png" alt="" />
                </div>
                <div className="Box3-1">
                  <h2>1 250 900 Сум</h2>
                  <p>2 220 900 Сум</p>
                  <button>Show More</button>
                </div>
              </div>
            </div>
          </section>
          <section className="section4">
            <div className="container">
              <div className="section1Title">
                <h3>Cheaper Products :</h3>
                <p>Show More →</p>
              </div>
              <div className="Box4">
                {products?.results?.length > 0
                  ? products.results
                      .sort((a, b) => a.price - b.price) // Narx bo'yicha tartiblash
                      .map((item) => {
                        if (item.price >= 1000 && item.price <= 1000000) {
                          return (
                            <ProductBox
                              getUser={getUser}
                              userData={userData}
                              deleteFromLiked={deleteFromLiked}
                              addToLiked={addToLiked}
                              getOneProductData={getOneProductData}
                              setShowOrderModal={setShowOrderModal}
                              key={item.id}
                              item={item}
                            />
                          );
                        } else {
                          return null;
                        }
                      })
                  : [1, 2, 3, 4, 5].map((_, index) => (
                      <div key={index} className="loadingSkeletons">
                        <Skeleton
                          variant="rectangular"
                          width={230}
                          height={210}
                        />
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
                          className="skeletonButtons"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
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
                    ))}
              </div>
            </div>
          </section>
          <section className="section5">
            <div className="container">
              <div className="section1Title">
                <h3>Recommended </h3>
                <p>Show More →</p>
              </div>
              <div className="Box5">
                <div className="box5-3">
                  <img src="/imgs/newHotRus 1.png" alt="" />
                </div>
                <div className="box5-2">
                  {products ? (
                    products?.results?.length > 0 ? (
                      products.results.map((item) => {
                        if (item.discount) {
                          return (
                            <ProductBox
                              getUser={getUser}
                              userData={userData}
                              deleteFromLiked={deleteFromLiked}
                              addToLiked={addToLiked}
                              getOneProductData={getOneProductData}
                              setShowOrderModal={setShowOrderModal}
                              key={item.id}
                              item={item}
                            />
                          );
                        } else {
                          return null;
                        }
                      })
                    ) : (
                      <p>Mahsulot topilmadi</p>
                    )
                  ) : (
                    Array.from({ length: 5 }).map((_, index) => (
                      <div key={index} className="loadingSkeletons">
                        <Skeleton
                          variant="rectangular"
                          width={230}
                          height={210}
                        />
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
                    ))
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="section6">
            <div className="container">
              <div>
                <h3>Brands</h3>
              </div>
              
              <div className="brandBlock">
                <Swiper
                  slidesPerView={5}
                  spaceBetween={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {brands?.results?.map((brand) => {
                    return (
                      <SwiperSlide>
                        <Link
                          to={`brand/${brand.id}`}
                          className="brandBox"
                        >
                          <div className="brandImg">
                            <img src={brand?.image} alt="" />
                          </div>
                          <h2>{brand?.name}</h2>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
