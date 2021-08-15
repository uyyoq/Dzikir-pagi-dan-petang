import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex w-full mb-32">
      <nav className="fixed mx-auto shadow top-0 right-0 inset-x-auto z-20 w-full py-4 bg-white ">

        <div className="flex justify-between mx-auto my-auto px-14">
          <div className="flex">
            <a>
              <img src="/profile.svg" className="w-12 h-auto mx-auto cursor-pointer" />
            </a>
          </div>

          <div className="flex my-auto">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <a className="p-3 font-semibold hover:text-blue-900 cursor-pointer">
                TENTANG
              </a>
            </Link>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <a className="p-3 font-semibold hover:text-blue-900 cursor-pointer">
                KENAPA TODO APP
              </a>
            </Link>

            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <a className="p-3 font-semibold hover:text-blue-900 cursor-pointer">
                DEMO SEDERHANA
              </a>
            </Link>

            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <a className="p-3 font-semibold hover:text-blue-900 cursor-pointer">
                TESTIMONI
              </a>
            </Link>

            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <a className="p-3 font-semibold hover:text-blue-900 cursor-pointer">
                KONTAK
              </a>
            </Link>

          </div>
        </div>

      </nav>
    </div>

  )
}

export default Navbar;