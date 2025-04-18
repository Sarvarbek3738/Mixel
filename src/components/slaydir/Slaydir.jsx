import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import Skeleton from 'react-loading-skeleton';
import ProductBox from '../productBox/ProductBox';
function Slaydir({ categories, getCategories, products, getData }) {
    return (
        <div>
            <div className="section1Title">
                <h3>Недавно просмотренные</h3>
                <p>Посмотреть все →</p>
            </div>
            <div className="smartfonRightCards">
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}

                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {products ? (
                        products.results?.length > 0 ? (
                            products.results.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <ProductBox item={item} getData={getData} />
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide>
                                <p>Mahsulot topilmadi</p>
                            </SwiperSlide>
                        )
                    ) : (
                        // Hali products kelmagan paytida skeleton ko'rsatish
                        [1, 2, 3, 4, 5].map((_, index) => (
                            <SwiperSlide key={index}>
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
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            </div>
        </div>
    )
}

export default Slaydir