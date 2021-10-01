import React from "react";
import Link from "next/link";

function NavbarMobile() {
  return (
    <div className="fixed mx-auto md:hidden h-52 shadow top-24 right-0 left-20 inset-x-auto z-50 w-full py-4 bg-white">
      <div className="flex flex-col">
        <ul className="transisi select-none cursor-pointer items-left capitalize text-gray-900 font-normal">
          <li className="pb-3 border-b-2 border-fuchsia-600">
            <Link href="/pagi">
              <a className="flex flex-row mx-5" href="">
                <img src="/sun.svg" className="w-auto h-5" />
                <p className="pl-3">dzikir pagi</p>
              </a>
            </Link>
          </li>
          <li className="py-4 pb-3 border-b-2 border-fuchsia-600">
            <Link href="/petang">
              <a className="flex flex-row mx-5">
                <img src="/sunrise.svg" className="w-auto h-4" />
                <p className="pl-3">dzikir petang</p>
              </a>
            </Link>
          </li>
          <li className="py-4 pb-4 border-b-2 items-center border-fuchsia-600">
            <Link href="/sholat">
              <a className="flex flex-row mx-5" href="">
                <img src="/cloud.svg" className="w-auto h-5" />
                <p className="pl-3">dzikir setelah sholat</p>
              </a>
            </Link>
          </li>
          <li className="py-4 pb-4">
            <Link href="/sholat">
              <a className="flex flex-row mx-5" href="">
                <img src="/sleep.svg" className="w-auto h-4" />
                <p className="pl-3">dzikir sebelum tidur</p>
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
