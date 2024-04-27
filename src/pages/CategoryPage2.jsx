import React, { useEffect, useState } from "react";
import BaseAPI, { endpoints } from "../api/BaseAPI";
import { useContext } from "react";
import { AppContext } from "../states/AppContext";

const CategoryPage2 = () => {
  const [product, setProduct] = useState([]);
  const [sortedProduct, setSortedProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    BaseAPI.get(endpoints["product"])
      .then((res) => {
        console.log("Product data", res.data);
        setProduct(res.data.data);
      })
      .catch((err) => console.log(err));

    BaseAPI.get(endpoints["category"])
      .then((res) => {
        console.log("Category data", res.data);
        let response = res.data;
        response.forEach((category) => {
          console.log("Category name:", category.name);
        });
        setCategories(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { handleAddToCart, cartItem } = useContext(AppContext);

  const handleSorting = (cate_id) => {
    setSelectedCategory(cate_id);
    let sortedProducts = product.slice();

    if (cate_id !== null) {
      sortedProducts = sortedProducts.filter(
        (product) => product.category_id === cate_id
      );
    }

    sortedProducts.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    setSortedProduct(sortedProducts);
  };

  const renderProducts = (products) => {
    return products.map((item) => {
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
                In cart
              </a>
            ) : (
              <a
                type="button"
                style={{ color: "#fff" }}
                onClick={() =>
                  handleAddToCart({
                    id: item.id,
                    name: item.name,
                    unit: 1,
                    price: item.price,
                    discount: item.discount,
                    amount: 1,
                    thumbnail: item.thumbnail,
                  })
                }
              >
                Buy now
              </a>
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
          <div className="float-end ml-3 sort">
            Sort by
            <div className="sort-icon">
              <svg viewBox="0 0 24 24" style={{ width: 24, height: 24 }}>
                <path
                  fill="currentColor"
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </div>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleSorting(null)}
                >
                  All
                </a>
              </li>
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleSorting(category.id)}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid brand_item-container row">
        {renderProducts(selectedCategory !== null ? sortedProduct : product)}
      </div>
      {/* <a type="button" href="/category" className="btn btn-light">
        See more...
      </a> */}
    </section>
  );
};

export default CategoryPage2;
