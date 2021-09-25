import React from "react";
import Swipagi from "../components/Swiper/swiperPagi";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

function Pagi() {
  return (
    <div className="w-full pt-32">
      <Navbar />
      <div className="text-left md:text-center pb-12 px-10">
        <h1 className="font-bold pb-2 text-xl md:text-2xl uppercase font-CodaCaption">
          Dzikir Pagi
        </h1>
        <p className="w-10/12 text-gray-800  md:mx-auto text-sm md:text-base">
          Dibaca antara Shubuh hingga siang hari ketika matahari akan bergeser
          ke barat
        </p>
      </div>

      <div className="text-center">
        <Swipagi />
      </div>
      <Footer />
    </div>
  );
}

export default Pagi;
