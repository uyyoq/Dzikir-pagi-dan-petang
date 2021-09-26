import React from "react";
import SwiPetang from "../components/Swiper/swiPetang";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

function Petang() {
  return (
    <div className="w-full pt-32">
      <Navbar />
      <div className="text-left md:text-center pb-12 px-10">
        <h1 className="font-bold pb-2 text-xl md:text-2xl uppercase font-CodaCaption">
          Dzikir Petang
        </h1>
        <p className="w-10/12 text-gray-800  md:mx-auto text-sm md:text-base">
          Dibaca Dari tenggelam matahari atau waktu Maghrib hingga pertengahan
          malam
        </p>
      </div>

      <div className="text-center">
        <SwiPetang />
      </div>
      <Footer />
    </div>
  );
}

export default Petang;