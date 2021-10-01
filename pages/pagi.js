import React, { Fragment } from "react";
import Head from "next/head";
import Swipagi from "../components/Swiper/swiperPagi";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

function Pagi() {
  return (
    <Fragment>
      <Head>
        <title>dzikir pagi</title>
        <link rel="icon" href="/logoo.svg" />
      </Head>
      <div className="w-full pt-32">
        <Navbar />
        <div className="text-left md:text-center pb-12 px-10">
          <h1 className="font-bold pb-2 font-JosefinSans text-2xl md:text-2xl">
            Dzikir Pagi
          </h1>
          <p className="w-10/12 text-gray-700 md:mx-auto font-Montserrat text-xs md:text-base">
            Dibaca antara Shubuh hingga siang hari ketika matahari akan bergeser
            ke barat
          </p>
        </div>

        <div className="text-center">
          <Swipagi />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Pagi;
