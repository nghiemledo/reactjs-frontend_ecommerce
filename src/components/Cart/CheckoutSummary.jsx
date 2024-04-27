import React, { useState } from "react";
import cookies from "react-cookies";
import { Link } from "react-router-dom";

const CheckoutSummary = (props) => {
  let checkout = (
    <>
      <div className="error-message mb-3" style={{ fontSize: "14px" }}>
        <i className="zmdi zmdi-alert-circle" /> You must login to continue
        check out !
      </div>
      <button
        className="btn disabled"
        style={{
          width: "310px",
          border: "1px solid grey",
          lineHeight: "2",
          borderRadius: "10px",
          marginLeft: "0",
          backgroundColor: "grey",
          color: "#fff",
          cursor: "default",
        }}
      >
        Continue to check out
      </button>
    </>
  );
  var user = cookies.load("user");
  if (user != null) {
    checkout = (
      <>
        <Link
          to="/checkout"
          className="btn"
          style={{
            width: "310px",
            border: "1px solid grey",
            lineHeight: "2",
            borderRadius: "10px",
            marginLeft: "0",
            backgroundColor: "black",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Continue to check out
        </Link>
      </>
    );
  }
  return (
    <div
      className="card border shadow-none mt-3"
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <div className="card-header bg-transparent border-bottom py-3 px-4">
        <h4
          style={{ fontWeight: "bold" }}
          className="font-size-16 mb-0 text-center"
        >
          Order Summary
        </h4>
      </div>
      <div className="card-body p-4 pt-2">
        <div className="table-responsive">
          <table className="table mb-0">
            <tbody style={{ backgroundColor: "None" }}>
              <tr style={{ opacity: "0.5", backgroundColor: "None" }}>
                <td>Discount :</td>
                <td className="text-end">$ {props.discount}</td>
              </tr>
              <tr style={{ opacity: "0.5" }}>
                <td>Shipping Charge :</td>
                <td className="text-end">$ 25</td>
              </tr>
              <tr style={{ opacity: "0.5" }}>
                <td>Estimated Tax : </td>
                <td className="text-end">$ 18</td>
              </tr>
              <tr className="bg-light">
                <th>Total :</th>
                <td className="text-end">
                  <h6 className="fw-bold">$ {props.total}</h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3">{checkout}</div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
