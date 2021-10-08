import Head from "next/head";
import Footer from "../components/Footer/footer";
import Link from "next/link";
import { Fragment } from "react";
import React, { useState } from "react";
import Navbar from "../components/Navbar/navbar";

export default function Home() {
  const [status, setStatus] = useState(true);

  return (
    <Fragment>
      <Head>
        <title>dzikir pagi dan petang</title>
        <link rel="icon" href="/logoo.svg" />
      </Head>

      <main className="text-current">
        <Navbar />
        <div className="flex flex-col md:flex-row w-full justify-center items-center mx-auto pt-20 md:pt-32">
          <div className="flex md:flex-wrap mx-auto justify-center md:w-1/2 w-8/12 flex-col md:flex-row text-gray-7">
            <Link href="/pagi">
              <a className="flex flex-col bg-gray-50 items-center md:py-10 md:px-10 md:m-10 p-5 m-6 shadow-md rounded-3xl cursor-pointer hover:bg-gray-200">
                <img src="/sun.svg" className="w-auto h-8 md:h-10" />
                <p className="text-center font-semibold text-blue-900 font- pt-3">
                  dzikir pagi
                </p>
              </a>
            </Link>
            <Link href="/petang">
              <a className="flex flex-col bg-gray-50 items-center md:py-10 md:px-10 md:m-10 p-5 m-6 shadow-md rounded-3xl cursor-pointer hover:bg-gray-200">
                <img src="/sunrise.svg" className="w-auto h-6 md:h-8" />
                <p className="text-center font-semibold text-blue-900 pt-3">
                  dzikir petang
                </p>
              </a>
            </Link>
            <Link href="/sholat">
              <a className="flex flex-col bg-gray-50 items-center md:py-10 md:px-10 md:m-10 p-5 m-6 shadow-md rounded-3xl cursor-pointer hover:bg-gray-200">
                <img src="/cloud.svg" className="w-auto h-8 md:h-10" />
                <p className="text-center font-semibold  text-blue-900 pt-3">
                  dzikir setelah sholat
                </p>
              </a>
            </Link>
            <Link href="/tidur">
              <a className="flex flex-col bg-gray-50 items-center md:py-10 md:px-10 md:m-10 p-5 m-6 shadow-md rounded-3xl cursor-pointer hover:bg-gray-200">
                <img src="/sleep.svg" className="w-auto h-6 md:h-7" />
                <p className="text-center font-semibold  text-blue-900 pt-3">
                  dzikir sebelum tidur
                </p>
              </a>
            </Link>
          </div>
          <div className="flex text-center flex-col md:w-1/2 w-full md:px-20 md:py-10 md:w-5/12 p-5 m-5 text-left">
            <p className="my-2 text-2xl font-amiri md:text-3xl">
              يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا.
              وَسَبِّحُوهُ بُكْرَةً وَأَصِيلا
            </p>
            <p className="text-xs text-justify md:text-base py-5 font-RobotoMono italic">
              "Wahai orang-orang yang beriman! Ingatlah kepada Allâh, dengan
              mengingat (nama-Nya) sebanyak-banyaknya, dan bertasbihlah
              kepada-Nya pada waktu pagi dan petang.”
            </p>
            <p className="text-xs md:text-sm text-gray-900 text-center font-lato">
              [al-Ahzâb:41-42]
            </p>
          </div>
        </div>
      </main>

      <footer className="pt-12">
        <Footer />
      </footer>
    </Fragment>
  );
}

//  <Link href="/petang">
//    <a className="flex flex-col bg-gray-100 items-center md:py-10 md:px-10 md:m-10 p-5 m-6 shadow-md rounded-3xl cursor-pointer hover:bg-gray-200">
//      <img src="/sunrise.svg" className="w-auto h-6 md:h-8" />
//      <p className="text-center pt-3">Dzikir Petang</p>
//    </a>
//  </Link>;
