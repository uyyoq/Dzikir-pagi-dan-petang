import ResponsiveMenu from "react-responsive-navbar";
import NavbarMobile from "./navbarMobile";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed mx-auto bg-white top-0 right-0 inset-x-auto z-10 w-full py-4">
      <div className="flex justify-between mx-auto my-auto px-8 lg:px-14 w-full ">
        <div className="flex lg:mx-0">
          <Link href="/">
            <a>
              <img
                src="/zikrr.svg"
                className="w-16 md:w-20 h-auto mx-auto cursor-pointer"
              />
            </a>
          </Link>
        </div>
        <div className="flex my-auto">
          <div className="flex relative">
            <div className="my-auto cursor-pointer">
              <ResponsiveMenu
                menuOpenButton={<img src="/menu.svg" className="w-auto h-6" />}
                menuCloseButton={
                  <img src="/cancel.svg" className="w-auto h-4" />
                }
                changeMenuOn="700px"
                largeMenuClassName="large-menu"
                smallMenuClassName="small-menu"
                menu={
                  <div className="text-sm font-semibold uppercase select-none cursor-pointer">
                    <ul className="hidden md:flex pt-5">
                      <li className="">
                        <Link href="/pagi">
                          <a className="" href="">
                            <img src="/sun.svg" className="w-auto h-8" />
                          </a>
                        </Link>
                      </li>
                      <li className="px-4">
                        <Link href="/petang">
                          <a className="" href="">
                            <img src="/sunrise.svg" className="w-auto h-7" />
                          </a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/sholat">
                          <a className="" href="">
                            <img src="/cloud.svg" className="w-auto h-6" />
                          </a>
                        </Link>
                      </li>

                      <li className="px-4">
                        <Link href="/tidur">
                          <a classname="" href="">
                            <img src="/sleep.svg" className="w-auto h-7" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                    <NavbarMobile />
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
