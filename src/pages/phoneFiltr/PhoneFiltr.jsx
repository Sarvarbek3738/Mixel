import React, { useEffect, useState } from "react";
import "./PhoneFiltr.css";
import { HiOutlineChartBar } from "react-icons/hi";
import { CgMenuGridR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbMenuDeep } from "react-icons/tb";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ProductBox from "../../components/productBox/ProductBox";
import ProductPanel from "../../components/productPanel/ProductPanel";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link, useParams } from "react-router-dom";
import ProductAlotCard from "../../components/productAlotCard/ProductAlotCard";
import { Swiper, SwiperSlide } from 'swiper/react';

import Skeleton from "react-loading-skeleton";
import Slaydir from "../../components/slaydir/Slaydir";
function PhoneFiltr({ products, getData, getCategories, categories }) {
  const [value, setValue] = useState([20, 70]);
  const id = useParams();
  const [isGrid, setIsGrid] = useState(true);
  const categoryName = categories?.results.filter((item) => {
    return item.id == id.id;
  });

  const filteredProducts = products?.results?.filter((item) => {
    return item.category == id.id;
  });


  // function for range
  function valuetext(value) {
    return `${value}°C`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getCategories();
    getData();
    window.scrollTo({
      top: "0",
    });
  }, [id.id]);

  return (
    <>
      <div className="phoneFilter">
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
                  <h3>{categoryName && categoryName[0]?.name}</h3>
                </div>
                <div className="sent">
                  <div>
                    <div>
                      <img src="/imgs/Bonus.svg" alt="" />
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
                      <p>По популярности asd</p>
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
                      <input type="checkbox" />
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
                      <input type="checkbox" />
                    </div>
                    <p>LG (30)</p>
                  </div>
                  <div className="samsung">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <p>Samsung (30)</p>
                  </div>
                  <div className="artel">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <p>Artel (7)</p>
                  </div>
                  <div className="huawei">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <p>Huawei (30)</p>
                  </div>
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
                      <input type="checkbox" />
                    </div>
                    <p>1821 мА⋅ч</p>
                  </div>
                  <div className="samsung">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <p>3000 мА⋅ч</p>
                  </div>
                  <div className="artel">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <p>4500 мА⋅ч</p>
                  </div>
                  <div className="huawei">
                    <div>
                      <input type="checkbox" />
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
                      <input type="checkbox" />
                    </div>
                    <p>Вьетнам</p>
                  </div>
                  <div className="samsung">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <p>Китай</p>
                  </div>
                  <div className="artel">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <p>Artel </p>
                  </div>
                  <div className="huawei">
                    <div>
                      <input type="checkbox" />
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
                <div className="smartfonRightCards">
                  {filteredProducts?.map((item) => {
                    if (isGrid) {
                      return <ProductBox item={item} />;
                    } else {
                      return <ProductAlotCard item={item} />;
                    }
                  })}
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
                <div className="section1Title">
                  <h3>Товары которые так же могут быть интересны</h3>
                  <p>Посмотреть все →</p>
                </div>
                <div className="smartfonRightCards">
               <Slaydir/>
                </div>
                <div className="ToliqMalumot">
                  <h3>Где купить надежный смартфон в Ташкенте?</h3>
                  <p>
                    С каждым годом телефоны становятся всё умнее, незаменимей,
                    функциональнее. Фактический на данном этапе у каждого
                    узбекистанца есть как минимум один смартфон. Так что же
                    такое "смартфон"? – это небольшое устройство, способное
                    заменить компьютер, радио, видеокамеру, телевизор. Открывает
                    доступ к интернету и связи в любой ситуации – дома, в
                    транспорте, в спортзале, на улице. Раньше, чтобы купить
                    электронику, мы мучительно ехали на рынки, блуждали по
                    торговым рядам, тратили время, чтобы купить новую аппарат из
                    линейки. Сейчас, всё на много проще. Зашли на сайт, почитали
                    характеристики, отзывы, заказали. Все эти сложные
                    технические характеристики в топовых смартфонах ничуть не
                    уступают ноутбукам и стационарным ПК, но путают обычных
                    потребителей. Возникает вопрос, где и как выбрать правильно
                    качественный товар с адекватным ценником?
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
