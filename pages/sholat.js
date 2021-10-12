import React, { Fragment } from "react";
import Head from "next/head";
import SwiperSholat from "../components/Swiper/swiperSholat";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

function Sholat() {
  return (
    <Fragment>
      <Head>
        <title>dzikir setelah sholat</title>
        <link rel="icon" href="/logo/logo.svg" />
      </Head>
      <div className="w-full pt-32">
        <Navbar />
        <div className="text-left md:text-center pb-12 px-10">
          <h1 className="font-bold pb-2 text-xl md:text-2xl font-JosefinSans ">
            Dzikir setelah sholat wajib
          </h1>
        </div>

        <div className="text-center">
          <SwiperSholat />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Sholat;
