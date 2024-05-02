import React, { useContext, useEffect, useState } from "react";
import bagIcon from "../assets/images/bag.png";
import boxIcon from "../assets/images/box.png";
import applePayIcon from "../assets/images/apple-pay.png";
import { useParams } from "react-router-dom";
import BaseAPI, { endpoints } from "../api/BaseAPI";
import axios from "axios";
import { AppContext } from "../states/AppContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);

  const { handleAddToCart, handleBuying, cartItem } = useContext(AppContext);

  const handleIncreaseQuantity = () => setQuantity(quantity + 1);
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    BaseAPI.get(`${endpoints["product"]}${id}/`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container product-detail">
      {product && (
        <div className="row">
          <div className="col-6">
            <div className="product-img">
              <img src={product.thumbnail} alt="" />
            </div>
          </div>
          <div className="col-6">
            <h4 className="product-title">{product.name.toUpperCase()}</h4>
            <div className="product-rating">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#0d6efd"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#0d6efd"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#0d6efd"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#0d6efd"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#0d6efd"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <span style={{ marginTop: "2px" }}>(24)</span>
            </div>
            <p className="product-desc">
              Description :
              <ul>
                <li>Commitment that all products sold are 100% Genuine</li>
                <li>
                  Warranty from 2 to 5 years according to company standards
                </li>
                <li>Free 2-year Spa package worth 120,000 USD</li>
                <li>Nationwide delivery, 24/7 support on product quality</li>
              </ul>
            </p>
            <div className="product-price">
              <h3 className="product-price-old">$320.999</h3>
              <h3 className="product-price-new">${product.price}</h3>
            </div>
            <div className="product-quantity">
              <button type="button" onClick={() => handleDecreaseQuantity()}>
                -
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={() => handleIncreaseQuantity()}>
                +
              </button>
            </div>
            <div className="product-buying">
              <button
                onClick={() =>
                  handleBuying({
                    id: product.id,
                    name: product.name,
                    unit: 1,
                    price: product.price,
                    discount: product.discount,
                    amount: quantity,
                    category_id: product.category_id,
                    thumbnail: product.thumbnail,
                  })
                }
              >
                Buy now
              </button>
              <button
                onClick={() =>
                  handleAddToCart({
                    id: product.id,
                    name: product.name,
                    unit: 1,
                    price: product.price,
                    discount: product.discount,
                    amount: quantity,
                    category_id: product.category_id,
                    thumbnail: product.thumbnail,
                  })
                }
              >
                <img
                  src={bagIcon}
                  style={{ marginTop: "-3px" }}
                  width={15}
                  height={15}
                />{" "}
                Add to bag
              </button>
            </div>
            <div className="product-options">
              <div className="product-option">
                <img
                  src={boxIcon}
                  style={{ marginTop: "-2px", marginRight: "3px" }}
                  width={12}
                  height={12}
                />
                <span>Free delivery</span>
              </div>
              <div className="product-option">
                <img
                  src={applePayIcon}
                  style={{ marginTop: "-2px", marginRight: "3px" }}
                  width={25}
                  height={25}
                />
                <span>20% off via Apple Pay</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="row">Related Product</div>
    </div>
  );
};

export default ProductDetailPage;
