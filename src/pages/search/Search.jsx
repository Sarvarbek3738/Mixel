import React, { useEffect } from "react";
import "./Search.css";
import ProductBox from "../../components/productBox/ProductBox";
import Skeleton from "react-loading-skeleton";
function Search({ products, inputValue, getData }) {
  const filteredProducts = products?.results?.filter((product) => {
    if (inputValue) {
      return product.name
        ?.toLowerCase()
        .trim()
        .replaceAll(" ", "")
        .includes(inputValue?.toLowerCase().trim().replaceAll(" ", ""));
    } else {
      return product;
    }
  });
  console.log(filteredProducts);
  useEffect(() => {
    getData();
    window.scrollTo({
      top: "0",
    });
  }, []);

  return (
    <div className="searchPage">
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
              <p>Результаты поиска</p>
            </div>
          </div>
        </div>
        <div className="productsBlock">
          {filteredProducts?.map((item) => {
            return <ProductBox key={item.id} item={item} />;
          }) ||
            [1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item) => {
              return (
                <div className="loadingSkeletons">
                  <Skeleton variant="rectangular" width={230} height={210} />
                  <Skeleton
                    variant="rectangular"
                    style={{ marginTop: "30px" }}
                    width={230}
                    height={18}
                  />
                  <Skeleton
                    variant="rectangular"
                    style={{ marginTop: "20px" }}
                    width={230}
                    height={32}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    className="skeletonButtons"
                  >
                    <Skeleton
                      variant="rectangular"
                      style={{ marginTop: "20px" }}
                      width={50}
                      height={42}
                    />
                    <Skeleton
                      variant="rectangular"
                      style={{ marginTop: "20px" }}
                      width={50}
                      height={42}
                    />
                    <Skeleton
                      variant="rectangular"
                      style={{ marginTop: "20px" }}
                      width={50}
                      height={42}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Search;
