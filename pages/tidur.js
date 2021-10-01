import React, { Fragment } from "react";
import Head from "next/head";
import SwiperTidur from "../components/Swiper/swiperTidur";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

function Tidur() {
  return (
    <Fragment>
      <Head>
        <title>dzikir sebelum tidur</title>
        <link rel="icon" href="/logoo.svg" />
      </Head>
      <div className="w-full pt-32">
        <Navbar />
        <div className="text-left md:text-center pb-12 px-10">
          <h1 className="font-bold pb-2 text-xl text-center md:text-2xl font-JosefinSans">
            Dzikir Sebelum Tidur
          </h1>
        </div>

        <div className="text-center">
          <SwiperTidur />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Tidur;
