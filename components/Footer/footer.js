import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900">
      <div className="bg-blue-900 flex flex-col text-gray-900 justify-between md:flex-row text-xs my-auto md:px-10 lg:px-14 py-4">
        <p className="flex flex-col items-center text-gray-300 pb-3 md:py-0">
          © Copyright Zikr 2021, All Rights Reserved
        </p>
        <div className="flex mx-auto md:mx-0">
          <a className="mx-3" href="https://www.facebook.com/trysniyuni">
            <img
              src="/sosmed/facebook.svg"
              className="w-4 h-auto mx-auto cursor-pointer"
              alt="facebook"
            />
          </a>
          <a className="" href="https://www.instagram.com/trysni__/">
            <img
              src="/sosmed/instagram.svg"
              className="w-4 h-auto mx-auto cursor-pointer"
              alt="instagram"
            />
          </a>
          <a
            className="mx-3"
            href="https://github.com/uyyoq/Dzikir-pagi-dan-petang"
          >
            <img
              src="/sosmed/github.svg"
              className="w-4 h-auto mx-auto cursor-pointer"
              alt="github"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
