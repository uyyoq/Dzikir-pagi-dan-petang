import React from "react";
import { Link } from "react-scroll";


function Listmenu({ children }) {
  return (
    <React.Fragment>
      <li className="text-sm font-bold uppercase text-gray-50 hover:text-gray-200 cursor-pointer select-none">
        {children}
      </li>
    </React.Fragment>
  );
}

const Navbar = () => {
  return (
      <div className="flex w-full">
        <nav className="fixed mx-auto  top-0 right-0 inset-x-auto z-20 w-full py-5 bg-blue-400 ">
          <div className="flex justify-between mx-auto my-auto px-14 w-full">
            <div className="flex">
              <div className="text-white rounded-full bg-red-400 w-12 h-12 p-3 flex justify-center items-center font-bold text-xl">
                A
              </div>
            </div>


            <div className="hidden lg:flex my-auto">
              <ul className="flex flex-row w-full space-x-5">
                <Link to="tentang" smooth={true} offset={-70} duration={500}>
                  <Listmenu>Tentang</Listmenu>
                </Link>

                <Link to="todoApp" smooth={true} duration={500} offset={-70}>
                  <Listmenu>Kenapa todo App</Listmenu>
                </Link>

                <Link
                  to="demoSederhana"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <Listmenu>demo sederhana</Listmenu>
                </Link>

                <Link to="testimoni" smooth={true} duration={500} offset={-70}>
                  <Listmenu>testimoni</Listmenu>
                </Link>

                <Link to="kontak" smooth={true} duration={500} offset={-70}>
                  <Listmenu>Kontak</Listmenu>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;
