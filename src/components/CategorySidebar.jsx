import React from "react";
import downIcon from "../assets/images/down-arrow.png";

const CategorySidebar = () => {
  return (
    <div className=" flex-shrink-0 p-3" style={{ width: 280 }}>
      <a
        href="#"
        className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
      >
        <svg className="bi pe-none me-2" width={30} height={24}>
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-5 fw-semibold">Category</span>
      </a>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="false"
          >
            Man
          </button>
          <div className="collapse" id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-5 ">
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Updates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Reports
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="false"
          >
            Woman
          </button>
          <div className="collapse" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-5">
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Weekly
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Monthly
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Annually
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#orders-collapse"
            aria-expanded="false"
          >
            Kid
          </button>
          <div className="collapse" id="orders-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-5">
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  New
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Processed
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Shipped
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Returned
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#account-collapse"
            aria-expanded="false"
          >
            Others
          </button>
          <div className="collapse" id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-5">
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  New...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </li>
        {/* <li className="border-top my-3" /> */}
       
      
      

        {/* <div className="card shadow">
        <div className="card-body">
          <h3 className="h5 card-title">Price range</h3>
          <div className="input-slider-container">
            <input
              id="input-slider-ecommerce"
              className="form-range"
              type="range"
              min={100}
              max={500}
            />
            <div className="row mt-3 d-none">
              <div className="col-6">
                <span
                  id="input-slider-value"
                  className="range-slider-value"
                  data-range-value-low={200}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6 ">
              <label htmlFor="priceRangeMin1" className="form-label">
                Min
              </label>
              <input
                className="form-control"
                id="priceRangeMin1"
                placeholder="$0"
                type="number"
              />
            </div>
            <div className="col-md-6 text-md-end">
              <label htmlFor="priceRangeMax1" className="form-label">
                Max
              </label>
              <input
                className="form-control"
                id="priceRangeMax1"
                placeholder="$1,000"
                type="number"
              />
            </div>
          </div>
          <div className="d-grid">
            <a href="#" className="btn btn-outline-primary" style={{borderRadius: "15px"}}>
              Apply
            </a>
          </div>
        </div>
      </div> */}



      </ul>
    </div>
  );
};

export default CategorySidebar;
