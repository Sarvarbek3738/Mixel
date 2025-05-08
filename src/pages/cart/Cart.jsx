import React, { useEffect } from "react";
import "./Cart.css";
import ProductBox from "../../components/productBox/ProductBox";
import { toast } from "react-toastify";
import NoProduct from "../../components/noproduct/NoProduct";
import { Link } from "react-router-dom";

function Cart({ cartProducts, getCartProducts }) {
  console.log(cartProducts);
  useEffect(() => {
    
    window.scrollTo({
      top: "0",
    });
  }, []);

  // deleteCartProduct function
  const deleteCartProduct = (id) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("mixelToken")}`
    );

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`https://abzzvx.pythonanywhere.com/cart-items/${id}/`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        toast.success("Product deleted successfully");
        if (localStorage.getItem("mixelToken")) {
          getCartProducts();
        }
      })
      .catch((error) => console.error(error));
  };


  const handleDelete = (e, id) => {
    e.preventDefault(); // forma yuborilishini to‘xtatadi
    deleteCartProduct(id);
  };

  return (
    <div className="cartPage">
      <div className="container">
        <div className="basicTitle">
          <div className="basicTitleLeft">
            <div>
              <p>Home</p>
              <div>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
            <div>
              <p>Cart</p>
            </div>
          </div>
        </div>
        <h2 className="pageTitle">Cart</h2>

        {cartProducts?.results.length > 0 ? (
          <div className="productsBlock">
            <div className="productsTop">
              <h2>Product</h2>
              <h2 className="priceTitle">Price</h2>
              <h2>Quantity</h2>
              <h2>Subtotal</h2>
              <h2>Action</h2>
            </div>
            {cartProducts?.results.map((item) => {
              return (
                <Link to={`/product/${item.product}`} className="cartProductCard" key={item.id}>
                  <div className="productMainData">
                    <div className="productImg">
                      <img src={item.product_image} alt="" />
                    </div>
                    <h2 className="cartProductTitle">
                      {String(item.product_name)}
                    </h2>
                  </div>
                  <h2 className="productPrice">{item.product_price}</h2>
                  <h2>{item.amount}</h2>
                  <h2>{item.total_price}</h2>
                  <button onClick={(e) => handleDelete(e, item.id)}> <i className="fas fa-trash"></i></button>
                </Link>
              );
            })}
          </div>
        ) : (
          <NoProduct />
        )}
      </div>
    </div>
  );
}

export default Cart;
