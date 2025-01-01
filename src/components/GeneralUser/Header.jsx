import { useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";

import HamburgerMenu from "../icons/HamburgerMenu.jsx";
import CloseMenu from "../icons/CloseMenu.jsx";
import NavMenu from "../mobile/GeneralUser/NavMenu.jsx";

import { logoGmLight } from "../../assets/images/index.jsx";

const Header = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);

  const location = useLocation();
  const active = (path) =>
    path === location.pathname
      ? "text-green-500 font-bold"
      : "text-slate-600 font-[500] border-transparent hover:text-green-700";

  return (
    <nav
    id="nav-general"
      class={`bg-white w-full px-5 lg:px-16 py-5 fixed top-0 z-50 transition-all ${
        props.state() ? "border-b border-b-slate-100 shadow-sm" : ""
      }`}
    >
      <ul class="flex justify-between items-center text-gray-200">
        <li class="h-full flex items-center">
          <a href="/">
            <img src={logoGmLight} class="w-28" alt="Logo" />
          </a>
        </li>
        {/* Desktop Menu */}
        <div class="hidden lg:flex justify-between w-full">
          <div class="flex items-center mx-auto">
            <li class={`${active("")} mx-1.5 sm:mx-6`}>
              <a href="#">Tentang Kami</a>
            </li>
            <li class={`${active("")} mx-1.5 sm:mx-6`}>
              <a href="#">Layanan Kami</a>
            </li>
            <li class={`${active("/article")} mx-1.5 sm:mx-6`}>
              <a href="/article">Artikel</a>
            </li>
            <li class={`${active("")} mx-1.5 sm:mx-6`}>
              <a href="#">FAQ</a>
            </li>
          </div>
          <li class="hidden lg:flex mr-4 xl:mr-10">
            <a
              class="bg-[#0E8181] font-semibold rounded-lg text-white p-2"
              href="#"
            >
              Download Apps
            </a>
          </li>
        </div>
        {/* Mobile Menu */}
        <div class="block lg:hidden">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen() ? (
              <CloseMenu
                width={50}
                height={35}
                color="#0E8181"
                strokeWidth={2}
              />
            ) : (
              <HamburgerMenu
                width={50}
                height={35}
                color="#0E8181"
                strokeWidth={2}
              />
            )}
          </button>
        </div>
      </ul>
      {/* Mobile Navigation Menu */}
      <NavMenu state={isOpen} />
    </nav>
  );
};

export default Header;
