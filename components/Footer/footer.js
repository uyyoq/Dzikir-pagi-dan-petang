import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900">
      <div className="bottom-0 right-0 inset-x-auto w-full py-6 md:py-3">
        <div className="bg-blue-900 flex flex-col text-gray-900 justify-between md:flex-row text-xs my-auto md:px-10 lg:px-14 py-1 md:py-2 ">
          <p className="flex flex-col items-center text-gray-300 pb-3 md:py-0">
            © Copyright Zikr 2021, All Rights Reserved
          </p>
          <div className="flex mx-auto md:mx-0">
            <a className="mx-3" href="https://www.facebook.com/trysniyuni">
              <img
                src="/facebook.svg"
                className="w-4 h-auto mx-auto cursor-pointer"
                alt="facebook"
              />
            </a>
            <a className="" href="https://www.instagram.com/trysni__/">
              <img
                src="/instagram.svg"
                className="w-4 h-auto mx-auto cursor-pointer"
                alt="instagram"
              />
            </a>
            <a
              className="mx-3"
              href="https://github.com/uyyoq/Dzikir-pagi-dan-petang"
            >
              <img
                src="/github.svg"
                className="w-4 h-auto mx-auto cursor-pointer"
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
