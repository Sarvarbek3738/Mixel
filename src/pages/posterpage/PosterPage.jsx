import React, { useEffect } from "react";
import "./PosterPage.css";
import ProductBox from "../../components/productBox/ProductBox";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
function PosterPage() {
  const id = useParams();
  const [banner, setBanner] = React.useState([]);
  const [posterProducts, setPosterProducts] = React.useState([]);
  const getBanner = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/galary/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setBanner(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => { }, []);
  const getPosterProducts = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://abzzvx.pythonanywhere.com/products/?galary=${id.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setPosterProducts(result);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getPosterProducts();
  }, [id.id]); // id o'zgarganda mahsulotlar qayta yuklanadi

  useEffect(() => {
    getBanner();
  }, []); // bannerlar faqat bir marta yuklanadi

  return (
    <div className="posterPage">
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
                <p>PosterPage</p>
              </div>
            </div>
           
          </div>
        {banner?.results
          ?.filter((item) => item.id == id.id)
          .map((item) => (
            <div className="posterBanner" key={item.id}>
              <img src={item.image} alt="" />
            </div>
          ))}{" "}
          {!banner && (
            <Skeleton
              variant="rectangular"
              style={{ marginTop: "60px", marginBottom: "10px" }}
              width={1300}
              height={324}
            />
          )}
        <div className="posterProducts">
          {posterProducts?.results?.map((item) => {
            return <ProductBox item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PosterPage;
