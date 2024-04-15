import React from "react";
import feature1IMG from "../assets/images/feature-1.png";
import feature2IMG from "../assets/images/feature-2.png";
import feature3IMG from "../assets/images/feature-3.png";
import feature4IMG from "../assets/images/feature-4.png";

const WhySection = () => {
  return (
    <section className="why_section layout_padding">
      <div className="container">
        <h3 className="custom_heading">Why choose Us</h3>
        <p className="font-weight-bold">
          Exceptional Quality, Impeccable Style: Discover the LuxChronos
          Difference
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img_box">
              <img src={feature1IMG} alt="" />
            </div>
            <div className="detail_box">
              <h5>Fast Delivery</h5>
              <p>
                Enjoy expedited shipping for your timepiece needs, ensuring your
                watch reaches you expediently and safely.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img_box">
              <img src={feature2IMG} alt="" />
            </div>
            <div className="detail_box">
              <h5>Free Shiping</h5>
              <p>
                Experience the convenience of complimentary shipping on every
                order, because your satisfaction is our priority.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img_box">
              <img src={feature3IMG} alt="" />
            </div>
            <div className="detail_box">
              <h5>Best Quality</h5>
              <p>
                Elevate your timekeeping experience, where every watch reflects
                unparalleled excellence and lasting quality.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img_box">
              <img src={feature4IMG} alt="" />
            </div>
            <div className="detail_box">
              <h5>24x7 Customer support</h5>
              <p>
                Experience seamless service, where support is always available,
                anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
