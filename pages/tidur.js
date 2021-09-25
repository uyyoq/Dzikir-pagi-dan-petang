import React from "react";
import SwiperTidur from "../components/Swiper/swiperTidur";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

function Tidur() {
  return (
    <div className="w-full pt-32">
      <Navbar />
      <div className="text-left md:text-center pb-12 px-10">
        <h1 className="font-bold pb-2 text-xl md:text-2xl uppercase font-CodaCaption">
          Dzikir Sebelum Tidur
        </h1>
      </div>

      <div className="text-center">
        <SwiperTidur />
      </div>
      <Footer />
    </div>
  );
}

export default Tidur;
