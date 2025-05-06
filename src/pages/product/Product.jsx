import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link, useParams } from "react-router-dom";
// import ProductPanel from "../../components/productPanel/ProductPanel";
import Skeleton from "react-loading-skeleton";
import ProductBox from "../../components/productBox/ProductBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
// import Slaydir from "../../components/slaydir/Slaydir";
import OrderModal from "../../components/orderModal/OrderModal";
function Product({
  categories,
  getOneProductData,
  oneProductData,
  getCategories,
  products,
  getData,
  deleteFromLiked,
  addToLiked,
  addToCart,
  getUser,
  userData,
  getLikedProducts,
  getBrands,
  brands,
}) {
  const id = useParams();
  const [mainImgIndex, setMainImgIndex] = useState(0);
  const [detailValue, setDetailValue] = useState(80);

  const [showOrderModal, setShowOrderModal] = useState(false);
  const [localLiked, setLocalLiked] = useState(false);

  useEffect(() => {
    getOneProductData(id.id);
    console.log(oneProductData);

    window.scrollTo({
      top: "0",
    });
  }, [id.id]);

  return (
    <>
      <div className="product">
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
                <Link to={"/"}>
                  <p>Home <h1>salom</h1></p>
                </Link>
                <div>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <Link to={`/category/${oneProductData?.category}`}>
                <div>
                  <p>{oneProductData?.category_name}</p>
                  <div>
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </Link>
              <div>
                <p>{oneProductData?.name?.slice(0, 7)}</p>
              </div>
            </div>
          </div>
          <div className="productCards">
            <div className="productCardImgs">
              <div className="productCardImg">
                {oneProductData && (
                  <img
                    src={oneProductData?.images[mainImgIndex]?.image}
                    alt=""
                  />
                )}
                {!oneProductData && (
                  <Skeleton
                    variant="rectangular"
                    style={{ marginTop: "30px" }}
                    width={300}
                    height={260}
                  />
                )}
              </div>
              <div className="productCardImgssss">
                <div
                  className="itemImg"
                  onClick={() => {
                    setMainImgIndex(0);
                  }}
                >
                  {oneProductData && (
                    <img src={oneProductData?.images[0]?.image} alt="" />
                  )}
                  {!oneProductData && (
                    <Skeleton
                      variant="rectangular"
                      style={{ marginTop: "30px" }}
                      width={64}
                      height={64}
                    />
                  )}
                </div>
                <div
                  className="itemImg"
                  onClick={() => {
                    setMainImgIndex(1);
                  }}
                >
                  {oneProductData && (
                    <img src={oneProductData?.images[1]?.image} alt="" />
                  )}
                  {!oneProductData && (
                    <Skeleton
                      variant="rectangular"
                      style={{ marginTop: "30px" }}
                      width={64}
                      height={64}
                    />
                  )}
                </div>
                <div
                  className="itemImg"
                  onClick={() => {
                    setMainImgIndex(2);
                  }}
                >
                  {oneProductData && (
                    <img src={oneProductData?.images[2]?.image} alt="" />
                  )}
                  {!oneProductData && (
                    <Skeleton
                      variant="rectangular"
                      style={{ marginTop: "30px" }}
                      width={64}
                      height={64}
                    />
                  )}
                </div>
                <div
                  className="itemImg"
                  onClick={() => {
                    setMainImgIndex(3);
                  }}
                >
                  {oneProductData && (
                    <img src={oneProductData?.images[3]?.image} alt="" />
                  )}
                  {!oneProductData && (
                    <Skeleton
                      variant="rectangular"
                      style={{ marginTop: "30px" }}
                      width={64}
                      height={64}
                    />
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="ProductTitles">
                <div className="ProductTitle">
                  {oneProductData && <h1>{oneProductData?.name}</h1>}
                  {!oneProductData && (
                    <Skeleton
                      variant="rectangular"
                      // style={{ marginTop: "30px" }}
                      width={400}
                      height={32}
                    />
                  )}
                  <div className="productPrise">
                    <div>
                      {oneProductData && <p>{oneProductData?.price} cум</p>}
                      {!oneProductData && (
                        <Skeleton
                          variant="rectangular"
                          // style={{ marginTop: "30px" }}
                          width={200}
                          height={24}
                        />
                      )}
                    </div>
                    <div className="Box5Tovar">
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          if (userData) {
                            getOneProductData(oneProductData?.id);
                            setShowOrderModal(true);
                          } else {
                            navigate("/signup");
                          }
                        }}
                      >
                        <i
                          class={
                            oneProductData?.is_cart
                              ? "fa-solid fa-cart-shopping solid"
                              : "fa-solid fa-cart-shopping"
                          }
                        ></i>
                      </div>
                      <div
                        className="hear"
                        onClick={(e) => {
                          e.preventDefault();
                          if (userData) {
                            if (oneProductData?.like) {
                              setLocalLiked(false);
                              deleteFromLiked(oneProductData?.like_id);
                              getLikedProducts();
                            } else {
                              addToLiked(oneProductData.id);
                              setLocalLiked(true);
                            }
                            getOneProductData(oneProductData?.id);
                          } else {
                            navigate("/signup");
                          }
                          getData();
                        }}
                      >
                        <i
                          class={
                            oneProductData?.like || localLiked
                              ? "fa-solid fa-heart solid"
                              : "fa-regular fa-heart"
                          }
                        ></i>
                      </div>
                      <div>
                        <i class="fa-solid fa-scale-balanced"></i>
                      </div>
                    </div>
                  </div>
                  <p className="vip">
                    {" "}
                    <i class="fa-regular fa-comments"></i>
                    VIP скидки для VIP клиентов
                  </p>
                  <div className="productBtn">
                    <div>
                      <button>
                        Купить <br />
                        сейчас
                      </button>
                    </div>
                    <div>
                      <button>
                        Купить в рассрочку <br />
                        сейчас
                      </button>
                    </div>
                  </div>
                  <div className="ProductMinText">
                    <div>
                      <p className="productMinSiz">Название для договора</p>
                      {oneProductData && (
                        <p>
                          {oneProductData?.name}{" "}
                          {String(oneProductData?.details).slice(
                            0,
                            detailValue
                          )}
                          {detailValue < 100 ? (
                            <button
                              className="readBtn"
                              onClick={() => {
                                setDetailValue(10000);
                              }}
                            >
                              &nbsp;Read more
                            </button>
                          ) : (
                            <button
                              className="readBtn"
                              onClick={() => {
                                setDetailValue(80);
                              }}
                            >
                              {" "}
                              &nbsp;Read less
                            </button>
                          )}
                        </p>
                      )}
                      {!oneProductData && (
                        <Skeleton
                          variant="rectangular"
                          width={400}
                          height={32}
                        />
                      )}
                    </div>
                  </div>
                  <div className="productProperty">
                    {oneProductData?.properties?.map((item) => {
                      return (
                        <div key={item.id}>
                          <h3>{item.title}</h3>
                          <div className="values">
                            {item?.value?.map((value) => {
                              return (
                                <div>
                                  <p className="propertyType" >{value?.type} :</p>
                                  <p className="propertyValue">{value?.value}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="Productservices">
                  <div className="ProductservicesCard">
                    <div>
                      <i class="fa-solid fa-arrows-rotate fa-spin"></i>
                    </div>
                    <div>
                      <h4>30 days for exchange and return.</h4>
                      <p>
                        You can return or exchange the product within one month
                      </p>
                      <Link>Details about the program.</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div>
                  <div className="section1Title">
                    <h3>Recently Viewed</h3>
                    <p>View All →</p>
                  </div>
                  <div className="sliderCards">
                    <Swiper
                      slidesPerView={4}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      spaceBetween={30}
                      grabCursor={true}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                    >
                      {!products ? (
                        // Ma'lumot hali yuklanmayapti - Skeleton ko'rsatamiz
                        [1, 2, 3, 4, 5].map((_, index) => (
                          <SwiperSlide key={index}>
                            <div className="loadingSkeletons">
                              <Skeleton width={230} height={210} />
                              <Skeleton
                                style={{ marginTop: "30px" }}
                                width={230}
                                height={18}
                              />
                              <Skeleton
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
                                  style={{ marginTop: "20px" }}
                                  width={50}
                                  height={42}
                                />
                                <Skeleton
                                  style={{ marginTop: "20px" }}
                                  width={50}
                                  height={42}
                                />
                                <Skeleton
                                  style={{ marginTop: "20px" }}
                                  width={50}
                                  height={42}
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        ))
                      ) : products.results?.length > 0 ? (
                        // Ma'lumotlar bor - mahsulotlar chiqadi
                        products.results.map((item) => (
                          <SwiperSlide key={item.id}>
                            <ProductBox
                              getUser={getUser}
                              userData={userData}
                              deleteFromLiked={deleteFromLiked}
                              addToLiked={addToLiked}
                              getOneProductData={getOneProductData}
                              setShowOrderModal={setShowOrderModal}
                              key={item.id}
                              item={item}
                              getData={getData}
                            />
                          </SwiperSlide>
                        ))
                      ) : (
                        // Ma'lumotlar bo'sh - "Mahsulot topilmadi"
                        <SwiperSlide>
                          <p>Mahsulot topilmadi</p>
                        </SwiperSlide>
                      )}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
