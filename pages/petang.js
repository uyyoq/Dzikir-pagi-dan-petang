import React, { Fragment } from "react";
import Head from "next/head";
import SwiPetang from "../components/Swiper/swiPetang";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

function Petang() {
  return (
    <Fragment>
      <Head>
        <title>dzikir petang</title>
        <link rel="icon" href="/logo/logo.svg" />
      </Head>
      <div className="w-full pt-32">
        <Navbar />
        <div className="text-left md:text-center pb-12 px-10">
          <h1 className="font-bold pb-2 text-2xl md:text-2xl font-JosefinSans">
            Dzikir Petang
          </h1>
          <p className="w-10/12 text-gray-700 font-Montserrat text-xs md:mx-auto text-xs md:text-base">
            Dibaca Dari tenggelam matahari atau waktu Maghrib hingga pertengahan
            malam
          </p>
        </div>

        <div className="text-center">
          <SwiPetang />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Petang;
