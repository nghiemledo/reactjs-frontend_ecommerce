import React from "react";
import AboutIMG from "../assets/images/about.png";

const AboutSection = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 offset-md-2">
            <div className="about_detail-box">
              <h3 className="custom_heading ">About our watch</h3>
              <p className="">
                Welcome to LuxChronos, where time meets elegance. At LuxChronos,
                we pride ourselves on curating a collection of exquisite
                timepieces that blend craftsmanship with style seamlessly. From
                classic designs to modern innovations, each watch in our
                collection tells a story of precision engineering and timeless
                beauty.
              </p>
              <div>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about_img-box">
              <img src={AboutIMG} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
