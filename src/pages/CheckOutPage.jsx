import React, { useState, useContext, useEffect } from "react";
import BaseAPI, { endpoints } from "../api/BaseAPI";
import { Helmet } from "react-helmet";
import "../assets/css/checkout.css";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../states/AppContext";
import cookies from "react-cookies";

const CheckOutPage = () => {
  const { cartItem } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerDesc, setCustomerDesc] = useState("");
  const [error, setError] = useState("");

  const handleChange = () => {
    setError("");
  };

  useEffect(() => {
    const itemsTotal = cartItem.reduce((acc, item) => {
      return acc + parseFloat(item.price) * item.amount - item.discount;
    }, 0);
    setTotalPrice(itemsTotal);
    const quantity = cartItem.reduce((acc, item) => acc + item.amount, 0);
    setTotalQuantity(quantity);
  }, [cartItem]);
  const user = cookies.load("user");
  const navigate = useNavigate();

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (
      !customerName.trim() ||
      !customerAddress.trim() ||
      !customerPhone.trim()
    ) {
      setError("Please enter full fields !");
      return;
    }
    const phoneRegex = /^\d{10,11}$/;
    if (!phoneRegex.test(customerPhone)) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (!customerAddress.trim()) {
      setError("Please enter your address.");
      return;
    }
    const paymentMethod = document.getElementById("selected").value;
    if (!paymentMethod) {
      setError("Please choose a payment method.");
      return;
    }
    let response;
    try {
      response = await BaseAPI.post(endpoints["order"], {
        receiver_name: customerName,
        receiver_phone: customerPhone,
        receiver_address: customerAddress,
        total: parseFloat(totalPrice),
        description: customerDesc,
        user_id: user.data.id,
      });
      alert("Order successfully");
      const orderId = response.data.id;
      navigate(`user/order/${orderId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5 mb-5 checkout-page">
      <Helmet>
        <title>LuxChronos | Checkout</title>
      </Helmet>
      <div className="container">
        <div className="checkoutLayout">
          <div className="returnCart">
            <Link to="/category">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-box-arrow-in-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                />
              </svg>
              Continue Shopping
            </Link>
            <h1>Shopping Bag</h1>
            <div className="list">
              {cartItem.map((item) => {
                return (
                  <div className="item" key={item.id}>
                    <img src={item.thumbnail} />
                    <div className="info">
                      <div className="name">{item.name}</div>
                    </div>
                    <div className="quantity">{item.amount}</div>
                    <div className="returnPrice">${item.price}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right">
            <h1>Checkout</h1>
            <div className="form">
              <div className="group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    handleChange();
                  }}
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={(e) => {
                    setCustomerPhone(e.target.value);
                    handleChange();
                  }}
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  onChange={(e) => {
                    setCustomerAddress(e.target.value);
                    handleChange();
                  }}
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="text">Description</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  onChange={(e) => {
                    setCustomerDesc(e.target.value);
                    handleChange();
                  }}
                />
              </div>
              <div className="group">
                <label htmlFor="text">Payment</label>
                <select name="selected" id="selected">
                  <option value="">Choose..</option>
                  <option value="cash">Cash on delivery</option>
                  <option value="atmbanking" disabled>
                    ATM Banking
                  </option>
                  <option value="paypal" disabled>
                    Paypal
                  </option>
                </select>
              </div>
              <div className="group">
                {error && (
                  <div className="error-message">
                    <i className="zmdi zmdi-alert-circle" /> {error}
                  </div>
                )}
              </div>
              {/*<div className="group">
                <label htmlFor="city">City</label>
                <select name="city" id="city">
                  <option value="">Choose..</option>
                  <option value="">London</option>
                </select>
              </div> */}
            </div>
            <div className="return">
              <div className="row">
                <div>Total Quantity</div>
                <div className="totalQuantity">{totalQuantity}</div>
              </div>
              <div className="row">
                <div>Total Price</div>
                <div className="totalPrice">${totalPrice}</div>
              </div>
            </div>
            <button
              className="buttonCheckout"
              onClick={(e) => handlePlaceOrder(e)}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
