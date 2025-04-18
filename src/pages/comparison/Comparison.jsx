import React from 'react'
import "./Comparison.css"
// import ProductCard from '../../components/productCard/ProductCard'
import ProductPanel from '../../components/productPanel/ProductPanel'
import ProductBox from '../../components/productBox/ProductBox'
import { Switch } from '@mui/material'

const label = {
    inputProps: { "aria-label": "Switch demo", "aria-label": "Checkbox demo" },
};

function Comparison() {
    return (
        <>
            <div className="comparison">
                <div className="container">
                    <div className="basicTitle">
                        <div className='basicTitleLeft'>
                            <div>
                                <p>
                                    Главная
                                </p>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Сравнить
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3>
                        Сравнение товаров
                    </h3>
                    <div className="comparisonCategory">
                        <div className="comparisonBtn">
                            <div className='camBtn'><div><p>Смартфоны 5 </p></div> <div><i class="fa-solid fa-xmark"></i></div> </div>
                            <div className='camBtn'><div><p>Смартфоны 5 </p></div> <div><i class="fa-solid fa-xmark"></i></div> </div>
                            <div className='camBtn'><div><p>Внешние аккумуляторы 2 </p> </div> <div><i class="fa-solid fa-xmark"></i></div></div>

                        </div>
                        <div className='comparisonTovar'>
                            <div>
                                <i class="fa-regular fa-circle-xmark"></i>
                            </div>
                            <div>
                                <p>
                                    Добавить товары
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" comparisSwitch">
                        <Switch
                            sx={{
                                "& .MuiSwitch-thumb": {
                                    backgroundColor: "#ED3729", // Thumb rangini o'zgartirish
                                    color: "#ED3729",
                                },
                                "& .MuiSwitch-track": {
                                    backgroundColor: "#ED3729B2", // Track rangini o'zgartirish (orqa fon)
                                },
                                "&.Mui-checked .MuiSwitch-track": {
                                    backgroundColor: "#ED3729B2", // Tanlangan holatda track rangini saqlash
                                },
                                "&.Mui-checked .MuiSwitch-thumb": {
                                    backgroundColor: "#ED3729B2", // Tanlangan holatda thumb rangini o'zgartirish
                                },
                            }}
                            {...label}
                            defaultChecked
                        />
                        <p>Только отличия</p>
                    </div>
                    <div className="comparisonCards">
                        <div className="productsBlock">
                            <ProductBox />
                            <ProductBox />
                            <ProductBox />



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comparison