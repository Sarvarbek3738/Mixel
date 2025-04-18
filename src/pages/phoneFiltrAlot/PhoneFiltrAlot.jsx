import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import { HiOutlineChartBar } from "react-icons/hi";
import { CgMenuGridR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbMenuDeep } from "react-icons/tb";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ProductBox from "../../components/productBox/ProductBox";
// import ProductCard from '../../components/productCard/ProductCard'
import ProductPanel from "../../components/productPanel/ProductPanel";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import "./PhoneFiltrAlot.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';


// import required modules
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import Slaydir from "../../components/slaydir/Slaydir";
function valuetext(value) {
  return `${value}°C`;
}

function PhoneFiltrAlot() {
  const [value, setValue] = useState([20, 70]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="phoneFilter">
      <Swiper
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
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
                <p>Телефоны, планшеты</p>
                <div>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div>
                <p>Телефоны и гаджеты</p>
              </div>
            </div>
            <div className="basicTitleRight">
              <p>Товаров 24 / 249</p>
            </div>
          </div>

          <div className="smartfon">
            <div className="smatfonTitle">
              <div className="smatfonTitle1">
                <div>
                  <h3>Смартфоны в Ташкенте</h3>
                </div>
                <div className="sent">
                  <div>
                    <div>
                      <img src="/public/imgs/Bonus.svg" alt="" />
                    </div>
                    <div>
                      <p>По цене</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <TbMenuDeep />
                    </div>
                    <div>
                      <p>По популярности</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="smatfonTitleMenu">
                <Link to={"/phoneFiltr"}>
                  <div>
                    <CgMenuGridR />
                  </div>
                </Link>
                <Link to={"/phoneFiltrAlot"} className="activeAlot">
                  <div>
                    <GiHamburgerMenu />
                  </div>
                </Link>
              </div>
            </div>
            <div className="smartfonBlock">
              <div className="smartfonLeft">
                <div>
                  <div className="smartfonLeftSent">
                    <div>
                      <p>Цена (cум)</p>
                    </div>
                    <div>
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                  <div className="smartfonLeftPrise">
                    <div className="ot">
                      <p>от 300 000</p>
                    </div>
                    <div>
                      <p>до 103 300 000</p>
                    </div>
                  </div>
                  <div>
                    <Box sx={{ width: 255 }}>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                      />
                    </Box>
                  </div>
                </div>
                <div>
                  <div className="smartfonLeftSent">
                    <div>
                      <p>Наличие</p>
                    </div>
                  </div>
                  <div className="zabrat">
                    <div>
                      <input type="checkbox" className="custom-checkbox" />
                    </div>
                    <div>
                      <p>Забрать сегодня</p>
                    </div>
                  </div>
                </div>
                <div className="brend">
                  <div className="smartfonLeftSent">
                    <div>
                      <p>Бренд</p>
                    </div>
                    <div>
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                  <div className="lg">
                    <div>
                      <input type="checkbox" className="custom-checkbox" />
                    </div>
                    <p>LG (30)</p>
                  </div>
                  <div className="samsung">
                    <div>
                      <input type="checkbox" className="custom-checkbox" />
                    </div>
                    <p>Samsung (30)</p>
                  </div>
                  <div className="artel">
                    <div>
                      <input type="checkbox" className="custom-checkbox" />
                    </div>
                    <p>Artel (7)</p>
                  </div>
                  <div className="huawei">
                    <div>
                      <input type="checkbox" className="custom-checkbox" />
                    </div>
                    <p>Huawei (30)</p>
                  </div>
                </div>
                <div className="section1Title">
                  <h3>Товары которые так же могут быть интересны</h3>
                  <p>Посмотреть все →</p>
                </div>
                <div className="smartfonRightCards">
               <Slaydir  products={products} getData={getData} />
                </div>
                <div className="Емкость">
                  <div className="smartfonLeftSent">
                    <div>
                      <p>Емкость аккумулятора</p>
                    </div>
                    <div>
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                  <div className="lg">
                    <div>
                      <input type="checkbox" className="custom-checkbox" />
                    </div>
                    <p>1821 мА⋅ч</p>
                  </div>
                  <div className="samsung">
                    <div>
                      <input type="checkbox" className="custom-checkbox" />
                    </div>
                    <p>3000 мА⋅ч</p>
                  </div>
                  <div className="artel">
                    <div>
                      <input type="checkbox" className="custom-checkbox" />
                    </div>
                    <p>4500 мА⋅ч</p>
                  </div>
                  <div className="huawei">
                    <div>
                      <input type="checkbox" className="custom-checkbox" />
                    </div>
                    <p>5000 мА⋅ч</p>
                  </div>
                </div>
                <div className="Страна">
                  <div className="smartfonLeftSent">
                    <div>
                      <p>Страна производитель</p>
                    </div>
                    <div>
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                  <div className="lg">
                    <div>
                      <input type="checkbox" className="custom-checkbox" />
                    </div>
                    <p>Вьетнам</p>
                  </div>
                  <div className="samsung">
                    <div>
                      <input type="checkbox" className="custom-checkbox" />
                    </div>
                    <p>Китай</p>
                  </div>
                  <div className="artel">
                    <div>
                      <input type="checkbox" className="custom-checkbox" />
                    </div>
                    <p>Artel </p>
                  </div>
                  <div className="huawei">
                    <div>
                      <input type="checkbox" className="custom-checkbox" />
                    </div>
                    <p>Huawei</p>
                  </div>
                </div>
                <div className="Количество">
                  <div className="smartfonLeftSent">
                    <div>
                      <p>Количество ядер</p>
                    </div>
                    <div>
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className="Фронтальная">
                  <div className="smartfonLeftSent">
                    <div>
                      <p>Фронтальная камера</p>
                    </div>
                    <div>
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className="Фотокамера">
                  <div className="smartfonLeftSent">
                    <div>
                      <p>Фотокамера</p>
                    </div>
                    <div>
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className="Версия">
                  <div className="smartfonLeftSent">
                    <div>
                      <p>Версия ОС</p>
                    </div>
                    <div>
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className="Разъем">
                  <div className="smartfonLeftSent">
                    <div>
                      <p>Разъем для наушников</p>
                    </div>
                    <div>
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className="smartfonLeftBtn">
                  <button>Показать</button>
                </div>
              </div>
              <div className="smartfonRight">
                <div className="PhoneFiltrAlotCards">
                 <PhoneFiltrAlot/>
                </div>
                <div className="smartfonRighBtn">
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
                </div>
                <div className="smartfonRighBrend">
                  <h3>Популярные категории и модели</h3>
                  <div className="smartfonRighBrendBox">
                    <div>
                      <p>Realme</p>
                    </div>
                    <div>
                      <p>Игровые</p>
                    </div>
                    <div>
                      <p>Оптимальные</p>
                    </div>
                    <div>
                      <p>Смартфоны Samsung</p>
                    </div>
                    <div>
                      <p>Смартфоны Apple</p>
                    </div>
                    <div>
                      <p>Смартфоны</p>
                    </div>
                    <div>
                      <p>Смартфоны Samsung</p>
                    </div>
                    <div>
                      <p>Смартфоны</p>
                    </div>
                    <div>
                      <p>Игровые</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
        
      </div>
    </>
  );
}

export default PhoneFiltrAlot;