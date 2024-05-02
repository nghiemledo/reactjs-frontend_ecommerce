import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BaseAPI, { endpoints } from "../api/BaseAPI";
import { AppContext } from "../states/AppContext";

const BrandSection = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const { handleAddToCart, cartItem } = useContext(AppContext);

  useEffect(() => {
    BaseAPI.get(endpoints["product"])
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => console.log(err));

    BaseAPI.get(endpoints["category"]).then((res) => {
      const data = res.data.data;
      setCategory(data);
    });
  }, []);

  const renderProducts = (products) => {
    const limitedProducts = products.slice(5, 13);
    return limitedProducts.map((item) => {
      const isInCart = cartItem.find((cartItem) => cartItem.name === item.name);
      return (
        <div className="col-3 brand_item-box" key={item.id}>
          <div
            className="brand_img-box"
            style={{
              backgroundImage: `url(${item.thumbnail})`,
              backgroundColor: "#fff",
            }}
          >
            {isInCart ? (
              <a
                type="button"
                style={{ color: "#fff", backgroundColor: "grey" }}
                disabled
              >
                In bag
              </a>
            ) : (
              <Link
                to={`/product/${item.id}/`}
                type="button"
                style={{ color: "#fff" }}
              >
                View more
              </Link>
            )}
          </div>
          <div className="brand_detail-box">
            <h5>
              $<span> {item.price} </span>
            </h5>
            <h6 className=""> {item.name} </h6>
          </div>
        </div>
      );
    });
  };

  return (
    <section
      id="watches"
      className="brand_section layout_padding2"
      style={{ paddingTop: "100px" }}
    >
      <div className="container">
        <div className="brand_heading">
          <h3 className="custom_heading">Our watch brands</h3>
          <p className="font-weight-bold">
            Explore a curated selection of renowned watch brands at LuxChronos.
          </p>
        </div>
      </div>
      <div className="container-fluid brand_item-container row">
        {renderProducts(product)}
      </div>
      <a type="button" href="/category" className="brandsection-a">
        See more...
      </a>
    </section>
  );
};

export default BrandSection;
