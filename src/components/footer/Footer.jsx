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
                            Call center working hours <br />
                            Monday - Saturday: 9:00–18:00
                        </p>
                        <p>
                            Call center: <br />
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
                            <h3>Categories</h3>
                            <p>Laptops</p>
                            <p>News</p>
                            <p>Purchase in installments</p>
                            <p>Gaming chairs</p>
                            <p>About us</p>
                        </div>
                        <div>
                            <h3>General</h3>
                            <p>Delivery and payment</p>
                            <p>Phones</p>
                            <p>Our stores</p>
                            <p>Rules for purchases with cashback</p>
                            <p>Monoblocks</p>
                            <p>Contacts</p>
                        </div>
                        <div>
                            <h3> Buyers</h3>
                            <p>Privacy Policy</p>
                            <p>Returns / Exchanges</p>
                            <p>Memory Modules</p>
                            <p> Loyalty Program Rules</p>
                            <p>Coupon Use Rules</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer