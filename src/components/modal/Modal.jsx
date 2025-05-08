import React from 'react'
import "./Modal.css"

function Modal({
    showModal,
    openModal,
    closeModal,
}) {
    return (
        <div className='Modal'>
            <div className="container">
                <div className="ModalClose">
                    <h3>Orders</h3>
                    <div >
                        <img onClick={closeModal} src="/public/imgs/Component 2.svg" alt="" />
                    </div>
                </div>
                <div className="Modal_Panel">
                    <div className="Modal_Panel_Img">
                        <img src="/public/imgs/Rectangle 216.png" alt="" />
                    </div>
                    <div className="Modal_Panel_Title">
                        <p>MacBook Pro 13 MXK32ZP/A Space Gray</p>
                        <h3>16 559 000 cум</h3>
                    </div>
                    <div className="Modal_Panel_Btn">
                        <div className='Modal_Panel_Btn_namber'>
                            <button
                                className="Modal_Panel_Btn_minusBtn"
                            >
                                –
                            </button>
                            <p>0</p>
                            <button
                                className="Modal_Panel_Btn_plusBtn"
                            >
                                +
                            </button>
                        </div>
                        <div className='Modal_Panel_Btn_Icon'>
                            <div>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-trash-can"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Modal_Panel">
                    <div className="Modal_Panel_Img">
                        <img src="/public/imgs/Rectangle 216.png" alt="" />
                    </div>
                    <div className="Modal_Panel_Title">
                        <p>MacBook Pro 13 MXK32ZP/A Space Gray</p>
                        <h3>16 559 000 cум</h3>
                    </div>
                    <div className="Modal_Panel_Btn">
                        <div className='Modal_Panel_Btn_namber'>
                            <button
                                className="Modal_Panel_Btn_minusBtn"
                            >
                                –
                            </button>
                            <p>0</p>
                            <button
                                className="Modal_Panel_Btn_plusBtn"
                            >
                                +
                            </button>
                        </div>
                        <div className='Modal_Panel_Btn_Icon'>
                            <div>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-trash-can"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Modal_Panel">
                    <div className="Modal_Panel_Img">
                        <img src="/public/imgs/Rectangle 216.png" alt="" />
                    </div>
                    <div className="Modal_Panel_Title">
                        <p>MacBook Pro 13 MXK32ZP/A Space Gray</p>
                        <h3>16 559 000 cум</h3>
                    </div>
                    <div className="Modal_Panel_Btn">
                        <div className='Modal_Panel_Btn_namber'>
                            <button
                                className="Modal_Panel_Btn_minusBtn"
                            >
                                –
                            </button>
                            <p>0</p>
                            <button
                                className="Modal_Panel_Btn_plusBtn"
                            >
                                +
                            </button>
                        </div>
                        <div className='Modal_Panel_Btn_Icon'>
                            <div>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-trash-can"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Modal_money">
                    <div>
                        <p>
                            Total 3 products
                        </p>
                    </div>
                    <div>
                        <h3>12000000 UZS</h3>
                    </div>
                </div>
                <div className="Modal_Shop">
                    <div className='Modal_Continue'>
                        <button>
                            Continue Shopping
                        </button>
                    </div>
                    <div  className='Modal_Make'>
                        <button>
                            Make a purchase
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal