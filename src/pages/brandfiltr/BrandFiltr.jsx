import React, { useEffect, useState } from "react";
import "./BrandFiltr.css";
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
import { Checkbox } from "@mui/material";
import { PiNumpadLight } from "react-icons/pi";
import Paginations from "../../components/pagination/Paginations";

function BrandFiltr({
  products, //+
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
  const id = useParams();
  const [spinning, setSpinning] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(true);
  const [brandProducts, setBrandProducts] = useState(null);
  const [value, setValue] = useState([100000, 20000000]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrnetPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrnetPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const [filteredProducts, setFilteredProducts] = useState(PiNumpadLight
  const [brandList, setBrandList] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  // function for range
  function valuetext(value) {
    return `${value}°C`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // getBrandProducts function
  const getBrandProducts = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://abzzvx.pythonanywhere.com/products/?page=${currentPage}&brand=${id.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setSpinning(false);
        setBrandProducts(result?.results);
        setTotalPages(result?.total_pages);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCategories();
    getBrandProducts();
    getData();
    window.scrollTo({
      top: "0",
    });
  }, [id.id,currentPage]);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const sortProducts = () => {
    if (!brandProducts) return;

    const sorted = [...brandProducts]?.sort((a, b) => {
      if (sortOrder == "asc") {
        return a?.price - b?.price; // arzondan qimmatga
      } else {
        return b?.price - a?.price; // qimmatdan arzonga
      }
    });

    setBrandProducts(sorted);

    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const sortProductsByName = () => {
    if (!brandProducts) return;

    const sorted = [...brandProducts]?.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name); // A → Z
      } else {
        return b.name.localeCompare(a.name); // Z → A
      }
    });

    setBrandProducts(sorted);

    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };
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
                <Link to={"/"}>Home</Link>
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
                <div className="sent">
                  <div
                    onClick={() => {
                      sortProducts();
                    }}
                  >
                    <div>
                      <img src="/imgs/Bonus.svg" alt="" />
                    </div>
                    <div>
                      <p>By price</p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      sortProductsByName();
                    }}
                  >
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
              {/* <div className="smartfonLeft">
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
              </div> */}
              <div className="smartfonRight">
                <div className="smartfonRightCards">
                  {brandProducts?.map((item) => {
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
                  {!brandProducts?.length && <NoProduct />}
                </div>

                <>
                  <Paginations
                    handlePageChange={handlePageChange}
                    totalPages={totalPages}
                    currentPage={currentPage}
                  />
                </>
                {/* <div className="smartfonRighBtn">
                  <button className="smartfonRighButton">Показать еще</button>
                  <div className="Paginetion">
                    <Stack spacing={2}>
                      <Pagination
                        count={10}
                        variant="outlined"
                        shape="rounded"
                      />
                    </Stack>
                  </div>
                </div> */}
                <div className="smartfonRighBrend">
                  <h3>Popular categories and models</h3>
                  <div className="smartfonRighBrendBox">
                    {brands?.results?.map((brand) => {
                      return (
                        <Link to={`/brand/${brand.id}`}>
                          <p>{brand?.name}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
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

export default BrandFiltr;
