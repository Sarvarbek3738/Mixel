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
import Orders from "./pages/orders/Orders";
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

    fetch(
      "https://abzzvx.pythonanywhere.com/products/?page_size=100",
      requestOptions
    )
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
          <Route path="/checkout" element={<Orders />} />
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
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facilis quo ipsum cumque possimus explicabo ipsa perferendis quod non officia vero distinctio expedita unde cum minima, officiis libero. Fuga est quisquam animi quam nihil esse officia provident deleniti pariatur, ipsam repellendus ex iure ad molestias fugiat quia assumenda quaerat illo architecto quo sint eos. Et ipsum in quibusdam incidunt, alias amet cumque deserunt culpa aliquam nobis qui esse quam nihil voluptate, iure delectus architecto. Illum ad in corrupti facere rem unde similique tempora odio illo labore placeat, expedita numquam obcaecati nulla voluptatibus velit ipsum. Facere, adipisci. Quae, alias molestias quibusdam placeat doloremque quasi earum unde odio commodi ea similique praesentium! Dolorem, iste ad. Blanditiis fugiat dicta repellat iure reiciendis? Minus sit, reiciendis sunt saepe suscipit illum necessitatibus ut amet, consectetur dolorum excepturi provident eveniet quis fugit quibusdam incidunt soluta. Distinctio, minus. Voluptas consequatur, cum veniam quis ratione, omnis enim unde consequuntur impedit quasi placeat incidunt maxime quos et quaerat nemo eum. Aspernatur nulla cum molestiae incidunt error possimus rerum quisquam maiores? Cum, nobis aliquid! Excepturi cumque laboriosam deserunt molestiae sunt repellat eveniet sed, culpa ut repudiandae quae ab quam ipsam quo ipsum architecto vero iure voluptatem officia earum repellendus nisi. Dignissimos voluptatibus eaque iusto amet. Praesentium ex ea, et harum nihil accusamus expedita, asperiores explicabo nobis error enim quo quidem architecto hic beatae doloremque debitis ut velit tenetur, non fugiat? Impedit quam, explicabo sequi quos ex in animi amet debitis dolorum veritatis aliquam nam quidem ratione totam libero? Aliquid accusamus quo veniam, eligendi beatae incidunt illum at eum illo iusto ea id molestiae obcaecati dolorum reiciendis ex dolorem placeat atque sed numquam? Tenetur itaque culpa dicta at accusamus commodi nisi est expedita earum harum, amet magni praesentium, in voluptatibus repellat porro laboriosam enim labore nesciunt perferendis. Exercitationem cum laudantium adipisci illo quam repellat aperiam labore obcaecati, mollitia itaque sequi voluptas magni sit nobis. Vel, explicabo reprehenderit. Illum a excepturi exercitationem quos porro fuga ab temporibus nostrum, autem incidunt quasi explicabo repudiandae est, corrupti molestias vitae molestiae. Suscipit quas officiis dolores autem vel laboriosam modi reprehenderit animi dolorum sint hic corporis labore velit quos, cum ducimus, excepturi quod molestias adipisci est, iure perspiciatis. Voluptatem eum porro suscipit at. Nulla ea eveniet, qui quia quasi eaque ducimus. Iure aliquid, quisquam distinctio sequi laudantium non earum qui quibusdam et reprehenderit. Error iusto quisquam est debitis eligendi recusandae perspiciatis culpa ducimus qui. Vero recusandae maxime voluptates temporibus numquam natus eum earum cum. Quis aut molestias quo, saepe a debitis, nobis quaerat assumenda, in maiores natus ab cumque enim eius officia quasi minus hic? Aliquid provident veritatis tempora laudantium autem, eius dolor? Architecto, ut. Dolorum sint odit reiciendis, voluptate dicta assumenda tempora ea quas fugiat, id, architecto minima aliquam. Quaerat laboriosam est officia aliquid debitis sequi animi pariatur, nulla deleniti minima ex quisquam magnam maxime odio rerum. Necessitatibus tempora quibusdam vel commodi maxime officia, recusandae error molestias possimus ad laboriosam iste vero consequuntur quis aut aperiam voluptate perspiciatis nemo rerum deleniti nesciunt, rem iure cumque dolore. Sequi iste magnam, in, quod sed a incidunt quae deleniti ex voluptatem rerum nemo ducimus sint ipsum reprehenderit hic deserunt aspernatur ipsam consequuntur. Veritatis sunt ipsum officiis quis fugit repudiandae magnam eum, cum nulla impedit, animi facilis perspiciatis qui deserunt odio recusandae. Aut doloremque culpa aliquid error? Est, ipsa quos veniam porro consectetur optio ad consequatur tempore sint vel a nobis maxime obcaecati nemo eius voluptatum ipsum sapiente soluta ut. Deserunt aspernatur maxime eum fugiat cum rem illum distinctio, fuga nulla architecto. Itaque eveniet velit, eaque exercitationem quod aliquam porro assumenda! Sed quidem fugiat est iure, non architecto eligendi ut nam maxime eveniet fuga blanditiis doloremque nulla assumenda quasi vel aliquam accusamus at debitis rerum, labore dolorum delectus dolore? Rerum quas dolores exercitationem odio maxime deserunt, eligendi quae error aliquid asperiores officiis quos beatae. Suscipit obcaecati corrupti, ducimus atque, non reprehenderit veritatis ipsum culpa sed ut, nostrum similique. Quia quis quaerat consectetur, facere suscipit autem ex praesentium ducimus repellendus. Rerum distinctio alias debitis dolore laborum quaerat esse dolorum minus consequatur, a, unde quibusdam? Quod sit deleniti blanditiis debitis vitae unde quisquam expedita animi accusamus odit facere eaque enim ea impedit fugiat suscipit iste dolore, eum minima veritatis tempora, optio cumque omnis quos. Reiciendis optio obcaecati enim sunt expedita nesciunt eligendi maxime eos excepturi suscipit dolorem distinctio totam delectus laudantium autem neque rerum quo quae, saepe a? Laboriosam quidem, explicabo nobis eum fugit, minima quas cum nihil iste blanditiis similique voluptas corporis. Temporibus tenetur ratione labore placeat fugit libero nemo nisi non earum eius voluptatum asperiores illum autem, dolorem, sit inventore in harum ducimus ea? Suscipit autem culpa repellat id voluptatum amet earum ea, quod magnam at enim, temporibus eos beatae minima sapiente odit delectus sequi deserunt laborum rerum in quia esse ipsam fugiat. Facilis modi necessitatibus ipsa dolores, veniam fuga nam in inventore quis molestiae odit. Optio accusantium perspiciatis, quos eveniet eum similique nostrum, atque nam vel in temporibus doloremque sunt eaque commodi assumenda! Quia ratione minima ex voluptatum atque, nobis, reiciendis laborum ullam, dolorem porro itaque sed explicabo tenetur quasi nam architecto recusandae libero veritatis delectus? Soluta incidunt iusto dolorem asperiores enim deleniti voluptates! Dicta eaque incidunt quam quod dolore sit aliquid ea? Dicta quia quasi culpa ea, obcaecati tempore dolores, quibusdam quae iure eos, pariatur corrupti porro ab sapiente necessitatibus aliquid sequi exercitationem! Aut ratione quaerat ullam ea amet voluptatem fugit, cupiditate vel, harum vero repellat qui tempora! Reprehenderit velit quaerat dolore quisquam quia est consequatur dicta obcaecati ex atque, sapiente quis? Consequuntur architecto, distinctio culpa ab quia reprehenderit, rerum nihil ratione dolorum tempora iste reiciendis voluptatibus unde necessitatibus earum recusandae praesentium modi a. Accusantium sunt, reprehenderit nostrum deserunt voluptate fugiat est aspernatur non pariatur, beatae ullam, iure aliquid. Vero, perferendis distinctio quibusdam optio quisquam, aut consequuntur dolor quo perspiciatis nihil quam, eos odio nemo deleniti odit impedit illo minima ad corporis quia ea harum quaerat? Expedita reiciendis ipsum, amet voluptas ab neque nobis ducimus, adipisci nisi, magnam corporis consequuntur sapiente hic tempore. Veritatis nesciunt voluptatibus quam?
