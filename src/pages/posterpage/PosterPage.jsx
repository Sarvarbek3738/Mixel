import React, { useEffect } from "react";
import "./PosterPage.css";
import ProductBox from "../../components/productBox/ProductBox";
import { useParams } from "react-router-dom";
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

  useEffect(() => {}, []);
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
    getBanner();
  }, []);
  return (
    <div className="posterPage">
      <div className="container">
        {banner?.results?.map((item) => {
          return (
            <div className="posterBanner" key={item.id}>
              <img src={item.image} alt="" />
            </div>
          );
        })}
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
