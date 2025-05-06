import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import PhoneFiltr from "./pages/phoneFiltr/PhoneFiltr";
import ProductBox from "./components/productBox/ProductBox";
import Product from "./pages/product/Product";
import Liked from "./pages/liked/Liked";
import Comparison from "./pages/comparison/Comparison";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { SkeletonTheme } from "react-loading-skeleton";
// import Slaydir from "./components/slaydir/Slaydir";
import Search from "./pages/search/Search";
import Cart from "./pages/cart/Cart";
import BrandFiltr from "./pages/brandfiltr/BrandFiltr";
import PosterPage from "./pages/posterpage/PosterPage";
function App() {
  const [userData, setUserData] = useState(null);
  const [products, setProducts] = useState(null);
  const [inputValue, setInputValue] = useState(false);
  const [likedProducts, setLikedProducts] = useState(false);
  const [oneProductData, setOneProductData] = useState(null);
  const [cartProducts, setCartProducts] = useState(null);

  // deleteFromLiked function
  const deleteFromLiked = (id) => {
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

    fetch(
      `https://abzzvx.pythonanywhere.com/liked-items/${id}/`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        toast.error("Product removed from Featured");
        getLikedProducts();
        getData();
      })
      .catch((error) => console.error(error));
  };

  // addToLiked function
  const addToLiked = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("mixelToken")}`
    );

    const raw = JSON.stringify({
      product: id,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/liked-items/add/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        toast.success("Product added to featured successfully");
        getLikedProducts();
        getData();
      })
      .catch((error) => console.error(error));
  };

  // getCartProducts function
  const getCartProducts = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("mixelToken")}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/cart-items/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setCartProducts(result);
      })
      .catch((error) => console.error(error));
  };
  // addToCart function
  const addToCart = (product, amount) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("mixelToken")}`
    );

    const raw = JSON.stringify({
      product,
      amount,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/cart-items/create", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log("result", result);
        toast.success("Product added successufully");
        getCartProducts();
        getData();
      })
      .catch((error) => console.error(error));
  };
  // getOneproductdata fucntion
  const getOneProductData = (id) => {
    const myHeaders = new Headers();
    if (localStorage.getItem("mixelToken")) {
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("mixelToken")}`
      );
    }

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`https://abzzvx.pythonanywhere.com/products/${id}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOneProductData(result);
      })
      .catch((error) => console.error(error));
  };

  // Get liked products function
  const getLikedProducts = () => {
    const myHeaders = new Headers();
    if (localStorage.getItem("mixelToken")) {
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("mixelToken")}`
      );
    }

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/liked-items/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setLikedProducts(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (localStorage.getItem("mixelToken")) {
      getLikedProducts();
      getCartProducts();
    }
  }, []);

  // getData Function
  const getData = () => {
    const myHeaders = new Headers();
    if (localStorage.getItem("mixelToken")) {
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("mixelToken")}`
      );
    }

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/products/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.error(error));
  };
  // getUser Function
  const getUser = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("mixelToken")}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/users/me", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserData(result);
      })
      .catch((error) => console.error(error));
  };
  if (localStorage.getItem("mixelToken")) {
    useEffect(() => {
      getData();
      // getOneProductData();
    }, []);
  }

  // getcategories function

  const [categories, setCategories] = useState(null);
  const getCategories = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/categories/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCategories(result);
      })
      .catch((error) => console.error(error));
  };

  const [brands, setBrands] = useState(null);

  // getBrands function
  const getBrands = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/brands/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setBrands(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBrands();
    getCategories();
    getData();
    if (localStorage.getItem("mixelToken")) {
      getUser();
    }
  }, []);
  // console.log(likedProducts);

  return (
    <SkeletonTheme baseColor="#fafafa" highlightColor="#ccc">
      <BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <Navbar
          getUser={getUser}
          userData={userData}
          likedProducts={likedProducts}
          getLikedProducts={getLikedProducts}
          cartProducts={cartProducts}
          products={products}
          getData={getData}
          setInputValue={setInputValue}
          categories={categories}
          getCategories={getCategories}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                getBrands={getBrands}
                brands={brands}
                getUser={getUser}
                userData={userData}
                deleteFromLiked={deleteFromLiked}
                addToLiked={addToLiked}
                addToCart={addToCart}
                getOneProductData={getOneProductData}
                oneProductData={oneProductData}
                getCategories={getCategories}
                categories={categories}
                products={products}
                getData={getData}
              />
            }
          />
          {/* <Route
            path="/slaydir"
            element={
              <Slaydir
                getCategories={getCategories}
                categories={categories}
                products={products}
                getData={getData}
              />
            }
          /> */}
          <Route
            path="/category/:id"
            element={
              <PhoneFiltr
                getUser={getUser}
                userData={userData}
                deleteFromLiked={deleteFromLiked}
                addToLiked={addToLiked}
                addToCart={addToCart}
                getOneProductData={getOneProductData}
                oneProductData={oneProductData}
                getLikedProducts={getLikedProducts}
                getBrands={getBrands}
                brands={brands}
                products={products}
                getData={getData}
                categories={categories}
                getCategories={getCategories}
              />
            }
          />
          <Route
            path="/brand/:id"
            element={
              <BrandFiltr
                getUser={getUser}
                userData={userData}
                deleteFromLiked={deleteFromLiked}
                addToLiked={addToLiked}
                addToCart={addToCart}
                getOneProductData={getOneProductData}
                oneProductData={oneProductData}
                getLikedProducts={getLikedProducts}
                getBrands={getBrands}
                brands={brands}
                products={products}
                getData={getData}
                categories={categories}
                getCategories={getCategories}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <Product
                getOneProductData={getOneProductData}
                oneProductData={oneProductData}
                getCategories={getCategories}
                categories={categories}
                products={products}
                getData={getData}
                deleteFromLiked={deleteFromLiked}
                addToLiked={addToLiked}
                addToCart={addToCart}
                getUser={getUser}
                userData={userData}
                getLikedProducts={getLikedProducts}
                getBrands={getBrands}
                brands={brands}
              />
            }
          />
          <Route
            path="/liked"
            element={
              <Liked
                addToCart={addToCart}
                getOneProductData={getOneProductData}
                oneProductData={oneProductData}
                addToLiked={addToLiked}
                likedProducts={likedProducts}
                getLikedProducts={getLikedProducts}
                getData={getData}
                deleteFromLiked={deleteFromLiked}
                userData={userData}
                getUser={getUser}
              />
            }
          />
          <Route path="/comparison" element={<Comparison />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartProducts={cartProducts}
                getCartProducts={getCartProducts}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                inputValue={inputValue}
                products={products}
                getData={getData}
              />
            }
          />
          <Route
            path="/dashboard"
            element={<Dashboard getUser={getUser} userData={userData} />}
          />
          <Route path="/poster/:id" element={<PosterPage />} />
          <Route path="/login" element={<Login getUser={getUser} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer categories={categories} />
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatem doloremque, deserunt aut fugit quia perferendis. Neque fuga commodi enim saepe porro necessitatibus laborum, nam deserunt possimus labore dicta vel amet atque, nisi in eveniet repellendus, quos eligendi cumque consequuntur sint! Facere doloribus voluptates in sed aut molestiae, ut fugiat nisi doloremque illum quos corrupti, necessitatibus, explicabo quis? Repellat pariatur quis temporibus fuga ullam reiciendis est eaque cumque, enim natus autem, ratione voluptates provident accusantium sunt cupiditate necessitatibus. Autem animi aliquam ullam delectus a! Odio officiis a adipisci eligendi maxime at accusantium assumenda, quasi nesciunt iste autem explicabo, cumque quibusdam.