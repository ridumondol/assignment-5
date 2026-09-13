import { useState, useEffect, useRef } from "react";
import logoText from "../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar fixed top-0 w-full z-50 bg-base-100 shadow-sm px-3 sm:px-6 h-20 grid grid-cols-2 lg:grid-cols-3 items-center">
      <div className="flex items-center justify-start w-full">
        <div className="dropdown lg:hidden mr-2" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost text-[#263247] p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {isOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl bg-base-100 rounded-2xl w-56 border border-gray-100 absolute left-0">
              <li>
                <a
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="text-[#df187c] font-semibold py-2.5 text-base rounded-lg"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  onClick={() => setIsOpen(false)}
                  className="text-[#263247] hover:text-[#df187c] py-2.5 text-base rounded-lg"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className="text-[#263247] hover:text-[#df187c] py-2.5 text-base rounded-lg"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="text-[#263247] hover:text-[#df187c] py-2.5 text-base rounded-lg"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-[#263247] hover:text-[#df187c] py-2.5 text-base rounded-lg"
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>

        <div className="flex items-center">
          <a
            href="#home"
            className="w-28 sm:w-36 h-12 sm:h-14 flex items-center justify-center"
          >
            <img
              src={logoText}
              alt="DevStack Logo"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center w-full">
        <ul className="menu menu-horizontal gap-6">
          <li>
            <a
              href="#home"
              className="text-[#df187c] font-semibold hover:text-[#c9146e] bg-transparent text-[16px] p-0"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="text-[#263247] hover:text-[#df187c] bg-transparent text-[16px] p-0"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-[#263247] hover:text-[#df187c] bg-transparent text-[16px] p-0"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-[#263247] hover:text-[#df187c] bg-transparent text-[16px] p-0"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[#263247] hover:text-[#df187c] bg-transparent text-[16px] p-0"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-end w-full gap-2 sm:gap-3">
        <button
          className="
            bg-transparent
            border-none
            text-[#172033]
            hover:text-[#df187c]
            font-medium
            text-[14px] sm:text-[16px]
            px-2 sm:px-3
            py-2
            transition-colors
            cursor-pointer
          "
        >
          Sign In
        </button>

        <button
          className="
            bg-[#df187c]
            hover:bg-[#c9146e]
            text-white
            border-none
            rounded-full
            px-4 sm:px-6
            py-2 sm:py-2.5
            font-semibold
            text-[14px] sm:text-[16px]
            transition-colors
            whitespace-nowrap
            shadow-sm
            cursor-pointer
          "
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;