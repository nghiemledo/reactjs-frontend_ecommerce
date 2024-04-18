import React from "react";
import "../assets/css/style.css";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import SliderSection from "../components/SliderSection";

const PublicLayout = () => {
  return (
    <>
      <header className="hero_area">
        <Header />
        {/* <SliderSection /> */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PublicLayout;
