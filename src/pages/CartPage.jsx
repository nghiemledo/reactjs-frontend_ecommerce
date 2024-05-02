import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ProductCard from "../components/Cart/ProductCard";
import CheckoutSummary from "../components/Cart/CheckoutSummary";
import { AppContext } from "../states/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import cookes from "react-cookies";
import warningIcon from "../assets/images/warning.png";
import emptyCartIcon from "../assets/images/shopping.png";
import removeIcon from "../assets/images/delete.png";

const CartPage = () => {
  const {
    cartItem,
    setCartItem,
    handleIncrease,
    handleDecrease,
    handleRemoveFromCart,
  } = useContext(AppContext);

  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const newTotal = cartItem.reduce((acc, item) => {
      return acc + parseFloat(item.price) * item.amount - item.discount;
    }, 0);
    setTotal(newTotal.toFixed(3));

    const newDiscount = cartItem.reduce((acc, item) => {
      return acc + item.discount;
    }, 0);
    setDiscount(newDiscount);
  }, [cartItem]);

  const handleClearBag = () => {
    setCartItem([]);
    setShowModal(false);
  };

  return (
    <div className="container mt-5 mb-5">
      <Helmet>
        <title>Shopping bag | LuxChronos</title>
      </Helmet>
      {cartItem.length == 0 ? (
        <div style={{ alignItems: "center", textAlign: "center" }}>
          <img src={emptyCartIcon} alt="empty cart" width={240} height={241} />
          <h2
            style={{
              color: "red",
              fontSize: "26px",
              fontWeight: "bold",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            Oops! Your bag is empty!
          </h2>
          <p style={{ width: "250px", margin: "0 auto" }}>
            Looks like you haven't added anything to your bag yet
          </p>
          <Link
            to="/category"
            type="button"
            className="btn btn-primary"
            style={{ width: "230px", marginTop: "20px", borderRadius: "8px" }}
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="row">
          <div style={{ display: "flex" }}>
            <h4 className="fw-bold mb-3">
              Shopping Bag{" "}
              <span style={{ opacity: "0.5" }}>({cartItem.length} items )</span>
            </h4>

            <div
              style={{ cursor: "pointer", color: "red", marginLeft: "340px" }}
              // data-bs-toggle="modal"
              // data-bs-target="#exampleModal2"
              onClick={() => setShowModal(true)}
            >
              <img src={removeIcon} width={15} height={15} /> Clear bag
            </div>
            <Modal
              show={showModal}
              onHide={() => setShowModal(false)}
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Modal.Body>
                <img src={warningIcon} width={50} height={50} alt="" />
                <br />
                <h4 style={{ fontSize: "26px", marginTop: "30px" }}>
                  Are you sure?
                </h4>
                <br />
                <p>
                  Do you really want to delete all records? This process cannot
                  be undone.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  style={{
                    marginRight: "10px",
                    minWidth: "120px",
                    marginBottom: "25px",
                    opacity: "0.5",
                  }}
                  variant="secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  variant="danger"
                  type="button"
                  className="btn"
                  style={{
                    minWidth: "120px",
                    backgroundColor: "#f15e5e",
                    color: "#fff",
                    marginBottom: "25px",
                  }}
                  onClick={handleClearBag}
                >
                  Delete
                </button>
              </Modal.Body>
            </Modal>
          </div>

          <div className="col-xl-8 mt-3">
            {cartItem.map((item) => {
              return (
                <div className="card border shadow mb-3" key={item.id}>
                  <div className="card-body">
                    <div className="d-flex align-items-start border-bottom pb-3">
                      <div className="me-4">
                        <img
                          src={item.thumbnail}
                          width={100}
                          height={100}
                          alt=""
                          className="avatar-sm rounded"
                        />
                      </div>
                      <div className="flex-grow-1 align-self-center overflow-hidden">
                        <div>
                          <h5 className="text-truncate font-size-18">
                            <Link
                              to={`/product/${item.id}/`}
                              className="text-dark fw-bold fs-5z"
                            >
                              {item.name}
                            </Link>
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
                            <h5 className="mb-0 mt-2">${item.price}</h5>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mt-3">
                            <p className="text-muted mb-2">Quantity</p>
                            <div className="d-flex">
                              <button
                                className="btn btn-sm me-1"
                                onClick={() => handleDecrease(item.name)}
                              >
                                -
                              </button>
                              <div className="ms-1 mt-1">{item.amount}</div>
                              <button
                                className="btn btn-sm ms-2"
                                onClick={() => handleIncrease(item.name)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mt-3">
                            <p className="text-muted mb-2">Total</p>
                            <h5>${(item.price * item.amount).toFixed(3)}</h5>
                          </div>
                        </div>
                        <div className="col-md-2" style={{ marginTop: "35px" }}>
                          <div>
                            <div
                              className="ms-3"
                              style={{ cursor: "pointer" }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <img src={removeIcon} width={15} height={15} />
                              <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                                style={{ marginTop: "40px" }}
                              >
                                <div className="modal-dialog">
                                  <div
                                    className="modal-content"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div className="modal-body">
                                      <img
                                        src={warningIcon}
                                        width={50}
                                        height={50}
                                        alt=""
                                      />
                                      <br />
                                      <h4
                                        style={{
                                          fontSize: "26px",
                                          marginTop: "30px",
                                        }}
                                      >
                                        Are you sure ?
                                      </h4>
                                      <br />
                                      <p>
                                        Do you really want to delete this
                                        record? This process cannot be undone.
                                      </p>
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        style={{
                                          marginRight: "10px",
                                          minWidth: "120px",
                                          marginBottom: "25px",
                                          opacity: "0.5",
                                        }}
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        type="button"
                                        className="btn"
                                        style={{
                                          minWidth: "120px",
                                          backgroundColor: "#f15e5e",
                                          color: "#fff",
                                          marginBottom: "25px",
                                        }}
                                        onClick={() =>
                                          handleRemoveFromCart(item)
                                        }
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="row my-4">
              <div className="col-sm-6">
                <Link to="/category" className="btn text-muted">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <CheckoutSummary discount={discount} total={total} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
