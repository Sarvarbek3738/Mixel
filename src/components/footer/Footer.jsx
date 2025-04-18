import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="FooterFeft">
                        <div className="logo">
                            <div>
                                <img src="/imgs/logo.svg" alt="" />
                            </div>
                            <div>
                                <h2>
                                    MIXEL.UZ
                                </h2>
                            </div>
                        </div>
                        <p>
                            График работы колл-центра <br />
                            Понедельник - Суббота: 9:00–18:00
                        </p>
                        <p>
                            Колл-центр: <br />
                            + 998 (71) 205-93-93
                        </p>
                        <div className="footerIcon">
                            <div><i class="fa-regular fa-paper-plane"></i></div>
                            <div><i class="fa-brands fa-instagram"></i></div>
                            <div><i class="fa-brands fa-facebook-f"></i></div>
                            <div><i class="fa-brands fa-youtube"></i></div>
                        </div>
                    </div>
                    <div className="footerRight">
                        <div>
                            <h3>Категории</h3>
                            <p>Ноутбуки</p>
                            <p>Новости</p>
                            <p>Покупка в рассрочку</p>
                            <p>Игровые кресла</p>
                            <p>О нас</p>
                        </div>
                        <div>
                            <h3>Общее</h3>
                            <p>Доставка и оплата</p>
                            <p>Телефоны</p>
                            <p>Наши магазины</p>
                            <p>Правила покупок с cashback</p>
                            <p>Моноблоки</p>
                            <p>Контакты</p>
                        </div>
                        <div>
                            <h3>Покупателям</h3>
                            <p>Политика конфиденциальности</p>
                            <p>Возврат / Обмен</p>
                            <p>Модули памяти</p>
                            <p>Правила программы лояльности</p>
                            <p>Правила пользования купонами</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer