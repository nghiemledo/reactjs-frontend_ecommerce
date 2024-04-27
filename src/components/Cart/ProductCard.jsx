import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../states/AppContext";

const ProductCard = ({
  id,
  name,
  unit,
  price,
  discount,
  amount,
  thumbnail,
}) => {
  const {
    cartItem,
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = useContext(AppContext);

  return (
    <div className="card border shadow-none">
      <div className="card-body">
        <div className="d-flex align-items-start border-bottom pb-3">
          <div className="me-4">
            <img
              src={thumbnail}
              width={100}
              height={100}
              alt=""
              className="avatar-sm rounded"
            />
          </div>
          <div className="flex-grow-1 align-self-center overflow-hidden">
            <div>
              <h5 className="text-truncate font-size-18">
                <a href="#" className="text-dark">
                  {name}
                </a>
              </h5>
            </div>
          </div>
          <div className="flex-shrink-0 ms-2">
            <ul className="list-inline mb-0 font-size-16">
              <li className="list-inline-item">
                <a href="#" className="text-muted px-1">
                  <i className="mdi mdi-trash-can-outline"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-muted px-1">
                  <i className="mdi mdi-heart-outline"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-md-4">
              <div className="mt-3">
                <p className="text-muted mb-2">Price</p>
                <h5 className="mb-0 mt-2">${price}</h5>
              </div>
            </div>
            <div className="col-md-5">
              <div className="mt-3">
                <p className="text-muted mb-2">Quantity</p>
                <div className="d-flex">
                  <button
                    className="btn btn-sm me-1"
                    onClick={handleIncreaseQuantity}
                  >
                    -
                  </button>
                  <div className="ms-1 mt-1">{amount}</div>
                  <button className="btn btn-sm ms-2">+</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mt-3">
                <p className="text-muted mb-2">Total</p>
                <h5>${price}</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mt-3">
                <p className="text-muted mb-2">Total</p>
                <h5>${price}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
