import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import Skeleton from "react-loading-skeleton";
function Navbar({ getCategories, categories }) {
  const [isOpen, setOpen] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    getCategories();
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
                <input type="text" placeholder="Телефоны и бытовая" />
              </div>

              <div>
                <button>
                  <div>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div>
                    <p>Поиск</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="NavIcon">
              <Link to={"/signup"}>
                <div>
                  <i class="fa-solid fa-right-to-bracket"></i>
                  <br />
                  <p>Войти</p>
                </div>
              </Link>
              <Link to={"/comparison"}>
                <div>
                  <i class="fa-solid fa-scale-balanced"></i>
                  <br />
                  <p>Сравнение</p>
                </div>
              </Link>
              <Link to={"/liked"}>
                <div>
                  <i class="fa-regular fa-heart"></i>
                  <br />
                  <p>Избранное</p>
                </div>
              </Link>
              <div>
                <i class="fa-solid fa-cart-shopping"></i>
                <br />
                <p>Корзина</p>
              </div>
              <Link to={"/dashboard"}>
                <div>
                  <i class="fa-solid fa-user"></i>
                  <br />
                  <p>Профиль</p>
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
                  <p>Категории</p>
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
                        <Link to={"/phoneFiltr/:id"} className="ModalLeft">
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
                        </Link>
                      );
                    })}
                  </div>
                  <div className="categoriyaModal2">
                    <h3>
                      Сетевое <br /> оборудование
                    </h3>
                    <p>Коммутаторы</p>
                    <p>Точки доступа Wi-Fi</p>
                    <p>Медиаконверторы</p>
                    <p>ADSL роутеры</p>
                    <p>Сетевые адаптеры</p>
                    <p>Wi-Fi роутеры и маршрутизаторы</p>
                    <p>Инжекторы</p>
                    <p>Повторители сигнала</p>
                    <p>Прочее сетевое оборудование</p>
                    <p>Сетевой кабель (Ethernet)</p>
                  </div>
                </div>
                <div className="categoriyaRight">
                  <img
                    onClick={() => setOpen(false)}
                    src="/imgs/Group 460.png"
                    alt=""
                  />
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
