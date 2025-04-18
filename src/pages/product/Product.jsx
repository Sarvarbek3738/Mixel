import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link, useParams } from "react-router-dom";
import ProductPanel from "../../components/productPanel/ProductPanel";
import Skeleton from "react-loading-skeleton";
import ProductBox from "../../components/productBox/ProductBox";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import Slaydir from "../../components/slaydir/Slaydir";
function Product({ categories, getCategories, products, getData }) {
  const id = useParams();
  const [mainImgIndex, setMainImgIndex] = useState(0);
  const [oneProductData, setOneProductData] = useState(null);
  const getOneProductData = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://abzzvx.pythonanywhere.com/products/${id.id}/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setOneProductData(result);
        console.log(result);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getOneProductData();
    window.scrollTo({
      top: "0",
    });
  }, []);
  return (
    <>
      <div className="product">
        <div className="container">
          <div className="basicTitle">
            <div className="basicTitleLeft">
              <div>
                <p>Главная</p>
                <div>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div>
                <p>Ноутбуки</p>
                <div>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div>
                <p>Apple</p>
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
                <div className="itemImg" onClick={() => {
                  setMainImgIndex(0)
                }}>
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
                  className="itemImg" onClick={() => {
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
                  className="itemImg" onClick={() => {
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
                <div className="itemImg" onClick={() => {
                  setMainImgIndex(3)
                }}>
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
                  <div>
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="hear">
                    <i class="fa-regular fa-heart"></i>
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
                      {oneProductData?.name} {oneProductData?.details}
                    </p>
                  )}
                  {!oneProductData && (
                    <Skeleton
                      variant="rectangular"
                      // style={{ marginTop: "30px" }}
                      width={400}
                      height={32}
                    />
                  )}
                </div>
              </div>
              <div className="ProductMinText">
                <h3>Технические параметры</h3>
                <div>
                  <p className="productMinSiz">Название</p>
                  <p>MacBook Pro 13 MXK32ZP/A Space Gray</p>
                </div>
                <div>
                  <p className="productMinSiz">Состояние</p>
                  <p>Новый</p>
                </div>
                <div>
                  <p className="productMinSiz">Технические параметры</p>
                  <p>
                    MacBook Pro 13 MXK32ZP/A <br /> Space Gray
                  </p>
                </div>
              </div>
              <div className="ProductMinText">
                <h3>Дисплей</h3>
                <div>
                  <p className="productMinSiz">Поверхность</p>
                  <p>Матовая</p>
                </div>
                <div>
                  <p className="productMinSiz">Сенсорный экран</p>
                  <p>Нет</p>
                </div>
                <div>
                  <p className="productMinSiz">Частота смены кадров</p>
                  <p>60 Гц</p>
                </div>
                <div>
                  <p className="productMinSiz">Тип матрицы</p>
                  <p>IPS</p>
                </div>
              </div>
            </div>
            <div className="Productservices">
              <div className="ProductservicesCard">
                <div>
                  <i class="fa-solid fa-arrows-rotate fa-spin"></i>
                </div>
                <div>
                  <h4>30 дней на обмен и возврат.</h4>
                  <p>
                    Если купите товар сегодня, до 06 мая <br /> можете вернуть
                    или обменять.
                  </p>
                  <Link>Подробнее о программе.</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Slaydir/>
          {/* <div className="smartfonRightCards">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            {products?.results?.map((item) => {
              return (
                <ProductBox key={item.id} item={item} getData={getData} />
              );
            }) ||
              [1, 2, 3, 4, 5].map((item) => {
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Product;
