import React from "react";
import { Link } from "react-router-dom";

const InforSection = () => {
  return (
    <section className="info_section layout_padding">
      <div className="container">
        <div className="info_items">
          <Link to="#">
            <div className="item ">
              <div className="img-box box-1">
                <img src="" alt="" />
              </div>
              <div className="detail-box">
                <p>Da nang, Viet Nam</p>
              </div>
            </div>
          </Link>
          <Link to="#">
            <div className="item ">
              <div className="img-box box-2">
                <img src="" alt="" />
              </div>
              <div className="detail-box">
                <p>+84 815819975</p>
              </div>
            </div>
          </Link>
          <Link to="#">
            <div className="item ">
              <div className="img-box box-3">
                <img src="" alt="" />
              </div>
              <div className="detail-box">
                <p>luxchronos@gmail.com</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InforSection;
