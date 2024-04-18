import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="contact_section layout_padding" style={{paddingTop: "100px"}}>
      <h2 className="custom_heading text-center">NOW CONTACT US</h2>
      <div className="container mt-5 pt-5">
        <form action="">
          <div>
            <input type="text" placeholder="NAME" />
          </div>
          <div>
            <input type="email" placeholder="EMAIL" />
          </div>
          <div>
            <input type="text" placeholder="PHONE NUMBER" />
          </div>
          <div>
            <input type="text" className="message-box" placeholder="MESSAGE" />
          </div>
          <div className="d-flex justify-content-center mt-5 pt-5">
            <button>SEND</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
