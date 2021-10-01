import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-300 to-white bottom-0 right-0 inset-x-auto w-full py-6 md:py-3">
      <div className="flex flex-col text-gray-900 justify-between md:flex-row text-xs my-auto lg:px-14 pt-5">
        <p className="hidden md:flex md:py-0">
          © Copyright 2021, All Rights Reserved | Made with By Trysni Yuni
          Lestari
        </p>
        <div className="flex flex-col md:hidden text-center py-3 md:py-0">
          <p className=""> © Copyright 2021, All Rights Reserved</p>
          <p>Made with By Trysni Yuni Lestari</p>
        </div>
        <div className="flex mx-auto md:mx-0">
          <a className="mx-3" href="https://www.facebook.com/trysniyuni">
            <img
              src="/facebook.svg"
              className="w-5 h-auto mx-auto cursor-pointer"
              alt="facebook"
            />
          </a>
          <a className="" href="https://www.instagram.com/trysni__/">
            <img
              src="/instagram.svg"
              className="w-5 h-auto mx-auto cursor-pointer"
              alt="instagram"
            />
          </a>
          <a className="mx-3" href="https://github.com/uyyoq">
            <img
              src="/github.svg"
              className="w-5 h-auto mx-auto cursor-pointer"
              alt="github"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
