import React, { useEffect, useState } from "react";
import "./PhoneFiltr.css";
import { HiOutlineChartBar } from "react-icons/hi";
import { CgMenuGridR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbMenuDeep } from "react-icons/tb";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ProductBox from "../../components/productBox/ProductBox";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link, useParams } from "react-router-dom";
import ProductAlotCard from "../../components/productAlotCard/ProductAlotCard";
import { Swiper, SwiperSlide } from "swiper/react";

import Skeleton from "react-loading-skeleton";
// import Slaydir from "../../components/slaydir/Slaydir";
import { Autoplay, Navigation } from "swiper/modules";
import NoProduct from "../../components/noproduct/NoProduct";
import Loader from "../../components/loader/Loader";
import OrderModal from "../../components/orderModal/OrderModal";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

function PhoneFiltr({
  getBrandsByCategory,
  products, //+
  brandsByCategory,
  getData, //+
  getLikedProducts,
  getCategories, //+
  categories, //+
  brands, //+
  getUser,
  userData,
  deleteFromLiked,
  addToLiked,
  addToCart,
  getOneProductData,
  oneProductData,
}) {
    const [value, setValue] = useState([100000, 20000000]);
    const [filteredProducts, setFilteredProducts] = useState(null);
    const [spinning, setSpinning] = useState(true);
    const [loading, setLoading] = useState(true);
    const id = useParams();
    const [isGrid, setIsGrid] = useState(true);
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [brandList, setBrandList] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);
  // const [categoryId, setCategoryId] = useState(null);
  const categoryName = categories?.results.filter((item) => {
    return item.id == id.id;
  });
  useEffect(() => {
    setSpinning(true);
  }, [id.id]);
  const getFilter = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      category: [id.id],
      minPrice: minPrice,
      maxPrice: maxPrice,
      brand: brandList,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/products/filter/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // console.log(result);
        setLoading(false);
        setSpinning(false);
        setFilteredProducts(result);
      })
      .catch((error) => console.error(error));
  };

  // function for range
  function valuetext(value) {
    return `${value}°C`;
  }
  const [priceRange, setPriceRange] = useState([100000, 20000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(filteredProducts);
  useEffect(() => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
    // setBrandList([]);
    // getFilter();
  }, [value]);
  useEffect(() => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
    // setBrandList([]);
    // getFilter();
  }, [value]);
  useEffect(() => {
    getBrandsByCategory(id.id);
    getCategories();
    getData();
    setMinPrice(priceRange[0]);
    setMaxPrice(priceRange[1]);
    // getCategoryProducts();
    getFilter();
    window.scrollTo({
      top: "0",
    });
  }, [id.id]);

  return (
    <>
      <div className="phoneFilter">
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
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div>
                <p>Phones, tablets</p>
                <div>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div>
                <p>Phones and gadgets</p>
              </div>
            </div>
            <div className="basicTitleRight">
              <p>Товаров 24 / 249</p>
            </div>
          </div>

          <div className="smartfon">
            <div className="smatfonTitle">
              <div className="smatfonTitle1">
                <div className="smatfonTitle1Panel">
                  <h3>{categoryName && categoryName[0]?.name}</h3>
                </div>
                <div className="sent">
                  <div>
                    <div>
                      <img src="/imgs/Bonus.svg" alt="" />
                    </div>
                    <div >
                      <p>By price</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <TbMenuDeep />
                    </div>
                    <div>
                      <p>By popularity asd</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="smatfonTitleMenu">
                <div className={isGrid ? "activeFiltr" : ""}>
                  <div
                    onClick={() => {
                      setIsGrid(true);
                    }}
                  >
                    <CgMenuGridR />
                  </div>
                </div>
                <div className={!isGrid ? "activeFiltr" : ""}>
                  <div
                    onClick={() => {
                      setIsGrid(false);
                    }}
                  >
                    <GiHamburgerMenu />
                  </div>
                </div>
              </div>
            </div>
            <div className="smartfonBlock">
              <div className="smartfonLeft">
                <div>
                  <div className="smartfonLeftSent">
                    <div>
                      <p>Price (uzs)</p>
                    </div>
                    <div>
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                  <div className="smartfonLeftPrise">
                    <div className="ot">
                      <p>from 100 000</p>
                    </div>
                    <div>
                      <p>until 20 000 000</p>
                    </div>
                  </div>
                  <div>
                    <Box sx={{ width: 255 }}>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        min={300000}
                        max={20000000}
                        step={100000}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        valueLabelFormat={(value) =>
                          new Intl.NumberFormat("uz-UZ", {
                            style: "currency",
                            currency: "UZS",
                            minimumFractionDigits: 0,
                          }).format(value)
                        }
                      />
                    </Box>
                  </div>
                </div>

                <div className="brend">
                  <div className="smartfonLeftSent">
                    <div>
                      <p>Brend</p>
                    </div>
                    <div>
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                  <div className="brandBlock">
                    {brandsByCategory?.results?.map((brand) => {
                      return (
                        <div className="samsung" key={brand.id}>
                          <div>
                            <Checkbox
                              onClick={(e) => {
                                setBrandList([...brandList, brand.id]);
                                console.log(brandList);
                              }}
                              {...label}
                              sx={{
                                color: pink[800],
                                "&.Mui-checked": {
                                  color: pink[600],
                                },
                              }}
                            />
                          </div>
                          <p>{brand.name}</p>
                        </div>
                      );
                    })}
                    {!brandsByCategory &&
                      [1, 2, 3, 4, 5].map((item) => {
                        return (
                          <Skeleton
                            style={{ marginBottom: "40px" }}
                            variant="rectangular"
                            width={230}
                            height={21}
                          />
                        );
                      })}
                  </div>
                </div>

                <div className="smartfonLeftBtn">
                  <button
                    onClick={() => {
                      getFilter();
                      console.log(brandList);
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className="smartfonRight">
                <div className="smartfonRightCards">
                  {filteredProducts?.products?.map((item) => {
                    if (isGrid) {
                      return (
                        <ProductBox
                          getLikedProducts={getLikedProducts}
                          userData={userData}
                          getUser={getUser}
                          getData={getData}
                          deleteFromLiked={deleteFromLiked}
                          item={item}
                          key={item.id}
                          addToLiked={addToLiked}
                          getOneProductData={getOneProductData}
                          setShowOrderModal={setShowOrderModal}
                        />
                      );
                    } else {
                      return (
                        <ProductAlotCard
                          getLikedProducts={getLikedProducts}
                          userData={userData}
                          getUser={getUser}
                          getData={getData}
                          deleteFromLiked={deleteFromLiked}
                          item={item}
                          key={item.id}
                          addToLiked={addToLiked}
                          getOneProductData={getOneProductData}
                          setShowOrderModal={setShowOrderModal}
                        />
                      );
                    }
                  })}
                  {spinning && <Loader />}
                  {loading &&
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
                  {!filteredProducts?.results?.length > 1 && <NoProduct />}
                </div>
                <div className="smartfonRighBtn">
                  <button className="smartfonRighButton">Показать еще</button>
                  <div className="Paginetion">
                    <Stack spacing={2}>
                      <Pagination
                        count={2}
                        variant="outlined"
                        shape="rounded"
                      />
                    </Stack>
                  </div>
                </div>
                <div className="smartfonRighBrend">
                  <h3>Popular categories and models</h3>
                  <div className="smartfonRighBrendBox">
                    {brands?.results?.map((brand) => {
                      return (
                        <Link to={`/brand/${brand.id}`} key={brand.id}>
                          <p>{brand?.name}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* <div className="sliderCards">
                  <Slaydir products={products} getData={getData} />
                </div> */}
                <div className="ToliqMalumot">
                  <h3>Where to buy a reliable smartphone in Tashkent?</h3>
                  <p>
                    Every year, phones are becoming smarter, more indispensable,
                    more functional. In fact, at this stage, every Uzbek has at
                    least one smartphone. So what is a "smartphone"? - It is a
                    small device that can replace a computer, radio, video
                    camera, TV. It opens access to the Internet and
                    communication in any situation - at home, in transport, in
                    the gym, on the street. Previously, in order to buy
                    electronics, we painfully went to the markets, wandered
                    along the shopping arcades, wasted time to buy a new device
                    from the line. Now, everything is much simpler. We went to
                    the site, read the characteristics, reviews, ordered. All
                    these complex technical characteristics in top smartphones
                    are in no way inferior to laptops and desktop PCs, but they
                    confuse ordinary consumers. The question arises, where and
                    how to choose the right quality product with an adequate
                    price tag?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneFiltr;
