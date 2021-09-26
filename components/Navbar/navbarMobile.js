import React from "react";
import Link from "next/link";

function NavbarMobile() {
  return (
    <div className="fixed mx-auto md:hidden h-48 shadow top-20 right-0 inset-x-auto z-50 w-full py-4 bg-gradient-to-t from-blue-100 to-white">
      <div className="flex flex-col items-center">
        <ul className="transisi select-none cursor-pointer">
          <li className="">
            <Link href="/pagi">
              <a className="" href="">
                <img src="/sun.svg" className="w-auto h-6 " />
              </a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/petang">
              <a className="">
                <img src="/sunrise.svg" className="w-auto h-5 " />
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/sholat">
              <a className="" href="">
                <img src="/cloud.svg" className="w-auto h-4 " />
              </a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/tidur">
              <a classname="" href="">
                <img src="/sleep.svg" className="w-auto h-5 " />
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>
        {`
          .transisi:active .transisi {
            transition: all 0.5s ease;
          }
        `}
      </style>
    </div>
  );
}

export default NavbarMobile;
