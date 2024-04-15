import React from "react";

const BrandSection = () => {
  return (
    <section className="brand_section layout_padding2">
      <div className="container">
        <div className="brand_heading">
          <h3 className="custom_heading">Our watch brands</h3>
          <p className="font-weight-bold">
            Explore a curated selection of renowned watch brands at LuxChronos.
          </p>
        </div>
      </div>
      <div className="container-fluid brand_item-container">
        <div className="brand_item-box">
          <div className="brand_img-box  item-1">
            <a href="">View More</a>
          </div>
          <div className="brand_detail-box">
            <h5>
              $<span> 6.791.300 </span>
            </h5>
            <h6 className=""> Omega Railmaster 1957 Trilogy Master </h6>
          </div>
        </div>
        <div className="brand_item-box">
          <div className="brand_img-box  item-2">
            <a href="">View More</a>
          </div>
          <div className="brand_detail-box">
            <h5>
              $<span> 7.190.800 </span>
            </h5>
            <h6 className="">Omega Seamaster 300 Master Co-Axial Titanium</h6>
          </div>
        </div>
        <div className="brand_item-box">
          <div className="brand_img-box  item-3">
            <a href="">View More</a>
          </div>
          <div className="brand_detail-box">
            <h5>
              $<span> 60 </span>
            </h5>
            <h6 className="">best watch</h6>
          </div>
        </div>
        <div className="brand_item-box">
          <div className="brand_img-box  item-4">
            <a href="">View More</a>
          </div>
          <div className="brand_detail-box">
            <h5>
              $<span> 70 </span>
            </h5>
            <h6 className="">best watch</h6>
          </div>
        </div>
        <div className="brand_item-box">
          <div className="brand_img-box  item-5">
            <a href="">View More</a>
          </div>
          <div className="brand_detail-box">
            <h5>
              $<span> 6.791.300 </span>
            </h5>
            <h6 className="">
              {" "}
              Omega Railmaster 1957 Trilogy Master Chronometer Limited{" "}
            </h6>
          </div>
        </div>
        <div className="brand_item-box">
          <div className="brand_img-box  item-6">
            <a href="">View More</a>
          </div>
          <div className="brand_detail-box">
            <h5>
              $<span> 40 </span>
            </h5>
            <h6 className="">best watch</h6>
          </div>
        </div>
        <div className="brand_item-box">
          <div className="brand_img-box  item-7">
            <a href="">View More</a>
          </div>
          <div className="brand_detail-box">
            <h5>
              $<span> 40 </span>
            </h5>
            <h6 className="">best watch</h6>
          </div>
        </div>
        <div className="brand_item-box">
          <div className="brand_img-box  item-8">
            <a href="">View More</a>
          </div>
          <div className="brand_detail-box">
            <h5>
              $<span> 4000 </span>
            </h5>
            <h6 className="">best watch</h6>
          </div>
        </div>
      </div>
      <a type="button" href="#" className="btn btn-light">
        See more...
      </a>
    </section>
  );
};

export default BrandSection;
