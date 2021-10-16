import Head from "next/head";
import Footer from "../components/Footer/footer";
import Link from "next/link";
import { Fragment } from "react";
import React, { useState } from "react";
import Navbar from "../components/Navbar/navbar";
import Contact from "../components/Contact/Contact";

const line = "/background/line.svg";

export default function Home() {
  // const [status, setStatus] = useState(true);

  return (
    <Fragment>
      <Head>
        <title>dzikir pagi dan petang</title>
        <link rel="icon" href="/logo/logo.svg" />
      </Head>

      <main className="text-current pb-32 lg:pb-0">
        <Navbar />
        <div className="flex flex-col w-full justify-center items-center mx-auto pt-16 md:pt-20">
          <div className="bg-line w-full flex flex-col relative h-96 text-center pt-16 text-gray-100 ">
            <h1 className="md:w-7/12 w-10/12 mx-auto font-bold text-xl md:text-2xl lg:text-4xl font-JosefinSans">
              memanfaatkan waktu sebaik baiknya untuk berdzikir kepada ﷲ
            </h1>
            <p className="lg:text-sm text-xs md:text-sm mx-5 lg:mx-0 font-Montserrat">
              Zikr web menghadirkan bacaan dzikir yang mudah dan cepat untuk
              dibaca setiap hari
            </p>
          </div>
          <div className="absolute grid grid-cols-2 shadow rounded-2xl top-1/2 md:top-1/3 lg:top-1/2 bg-white lg:w-6/12 w-10/12 md:w-7/12 text-gray-7">
            <Link href="/pagi">
              <a className="flex flex-col justify-center items-center md:py-6 lg:mx-20 lg:m-5 md:m-10 p-3 m-5 shadow-md rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200">
                <img src="/icon/sun.svg" className="w-auto h-5 md:h-10" />
                <p className="text-center text-xs md:text-sm text-blue-900 pt-2 md:pt-3">
                  dzikir pagi
                </p>
              </a>
            </Link>
            <div>
              <Link href="/petang">
                <a className="flex flex-col justify-center items-center md:py-6 lg:mx-20 lg:m-5 md:m-10 p-3 m-5 shadow-md rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200">
                  <img src="/icon/sunrise.svg" className="w-auto h-4 md:h-8" />
                  <p className="text-center text-xs md:text-sm text-blue-900 pt-2 md:pt-3">
                    dzikir petang
                  </p>
                </a>
              </Link>
            </div>

            <Link href="/sholat">
              <a className="flex flex-col justify-center items-center md:py-6 lg:mx-20 lg:m-5 md:m-10 p-2 m-5 shadow-md rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200">
                <img src="/icon/cloud.svg" className="w-auto h-5 md:h-10" />
                <p className="text-center text-xs md:text-sm text-blue-900 pt-2 md:pt-3">
                  dzikir setelah sholat
                </p>
              </a>
            </Link>
            <Link href="/tidur">
              <a className="flex flex-col justify-center items-center md:py-6 lg:mx-20  lg:m-5 md:m-10 p-2 m-5 shadow-md rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200">
                <img src="/icon/sleep.svg" className="w-auto h-4 md:h-8" />
                <p className="text-center text-xs md:text-sm  text-blue-900 pt-2 md:pt-3">
                  dzikir sebelum tidur
                </p>
              </a>
            </Link>
          </div>
        </div>
        {/* <div className="flex text-center flex-col lg:w-5/12 w-full lg:px-20 lg:py-20 md:w-8/12 p-5 m-5 text-left">
          <p className="my-2 text-2xl font-amiri md:text-3xl">
            يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا.
            وَسَبِّحُوهُ بُكْرَةً وَأَصِيلا
          </p>
          <p className="text-xs  text-justify md:text-base py-5 font-RobotoMono italic">
            "Wahai orang-orang yang beriman! Ingatlah kepada Allâh, dengan
            mengingat (nama-Nya) sebanyak-banyaknya, dan bertasbihlah kepada-Nya
            pada waktu pagi dan petang.”
          </p>
          <p className="text-xs  md:text-sm text-gray-900 text-center font-lato">
            [al-Ahzâb:41-42]
          </p>
        </div> */}
        <style jsx>{`
          .bg-line {
            background-image: url(${line});
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}</style>
      </main>

      <footer className="pt-24 md:pt-72 lg:pt-80">
        <Contact />
        <Footer />
      </footer>
    </Fragment>
  );
}
