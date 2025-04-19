import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import Skeleton from "react-loading-skeleton";
function Navbar({
  getCategories,
  products,
  getData,
  setInputValue,
  categories,
}) {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
  const [categoryId, setCategoryId] = useState(3);
  const [productId, setProductId] = useState(null);
  const [categoryName, setCategoryName] = useState("Phones and Tablets");
  useEffect(() => {
    getCategories();
    getData();
  }, []);

  return (
    <>
      <div className="OneNav">
        <nav className={`navbar`}>
          <div className="container">
            <Link to={"/"}>
              <div className="logo">
                <div>
                  <img src="/imgs/logo.svg" alt="" />
                </div>
                <div>
                  <h2>MIXEL.UZ</h2>
                </div>
              </div>
            </Link>
            <div className="NavSearch">
              <div>
                <input
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  onFocus={() => {
                    navigate("/search");
                  }}
                  type="text"
                  placeholder="Telephones and household appliances"
                />
              </div>

              <div>
                <button>
                  <div>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div>
                    <p>Search</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="NavIcon">
              <Link to={"/signup"}>
                <div>
                  <i class="fa-solid fa-right-to-bracket"></i>
                  <br />
                  <p>Login</p>
                </div>
              </Link>
              <Link to={"/comparison"}>
                <div>
                  <i class="fa-solid fa-scale-balanced"></i>
                  <br />
                  <p>Comparison</p>
                </div>
              </Link>
              <Link to={"/liked"}>
                <div>
                  <i class="fa-regular fa-heart"></i>
                  <br />
                  <p>Featured</p>
                </div>
              </Link>
              <div>
                <i class="fa-solid fa-cart-shopping"></i>
                <br />
                <p>Cart</p>
              </div>
              <Link to={"/dashboard"}>
                <div>
                  <i class="fa-solid fa-user"></i>
                  <br />
                  <p>Profile</p>
                </div>
              </Link>
            </div>
          </div>
        </nav>
        <div className={`navCategori`}>
          <div className="container">
            <div className="MenuCategori">
              <button
                onClick={() => {
                  setOpenModal(!isOpenModal);
                  setOpen(!isOpen);
                }}
              >
                <div>
                  <Hamburger size={15} toggled={isOpen} toggle={setOpen} />
                </div>
                <div>
                  <p>Category</p>
                </div>
              </button>
            </div>
            <div className="CategoryTovar">
              {categories?.results?.map((category) => {
                return (
                  <Link to={`/phoneFiltr/${category.id}`}>
                    {" "}
                    <p>{category?.name}</p>
                  </Link>
                );
              })}
              {!categories &&
                [1, 1, 1, 1, 1].map((item) => {
                  return (
                    <Skeleton
                      variant="rectangular"
                      style={{ marginTop: "10px" }}
                      width={165}
                      height={18}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        {isOpenModal && (
          <div className="categoriyaModal">
            <div className="ModalContainer">
              <div className="container">
                <div className="categoriyaLeft">
                  <div className="categoryNames">
                    {categories?.results?.map((category) => {
                      return (
                        <div
                          onClick={() => {
                            setCategoryId(category?.id);
                            setCategoryName(category?.name);
                          }}
                          className={
                            category?.id == categoryId
                              ? "ModalLeft active"
                              : "ModalLeft"
                          }
                        >
                          <div className="ModalLeftBlock">
                            <div className="categoryIcon">
                              <img src={category?.icon} alt="" />
                            </div>
                            <div>
                              <p>{category?.name}</p>
                            </div>
                          </div>
                          <div>
                            <i class="fa-solid fa-chevron-right"></i>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="categoriyaModal2">
                    <h3>{categoryName}</h3>
                    {products?.results?.map((product) => {
                      if (product?.category == categoryId) {
                        return (
                          <p
                            onMouseEnter={() => {
                              setProductId(product.id);
                            }}
                          >
                            {product.name}
                          </p>
                        );
                      } else {
                        return;
                      }
                    })}
                  </div>
                </div>
                <div className="categoriyaRight">
                  {products?.results?.map((item) => {
                    if (item.id == productId) {
                      return <img src={item.images[0]?.image} alt="" />;
                    } else {
                      return;
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
