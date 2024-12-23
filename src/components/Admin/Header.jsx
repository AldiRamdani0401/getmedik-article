import { useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";

import HamburgerMenu from "../icons/HamburgerMenu.jsx";
import CloseMenu from "../icons/CloseMenu.jsx";
import NavMenu from "../mobile/GeneralUser/NavMenu.jsx";

import { logoGmDark, logoGmLight, Person3 } from "../../assets/images/index.jsx";
import CircleProfile from "./fragments/CircleProfile/index.jsx";

const Header = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);

  const location = useLocation();
  const active = (path) =>
    path === location.pathname
      ? "text-green-500 font-bold"
      : "text-slate-600 font-[500] border-transparent hover:text-green-700";

  return (
    <nav
      class={` bg-[#0b5555] w-full px-5 lg:px-5 py-2 z-50 transition-all select-none ${
        props.state() ? "border-b border-b-slate-100 shadow-sm" : ""
      }`}
    >
      <ul class="flex justify-between items-center text-gray-200">
        {/* Container 1 */}
        <li class="h-full">
        {/* Logo */}
          <a href="/admin" class="flex flex-row gap-2">
            <div class="text-xl font-extrabold ">
              <span class="text-green-300">Get</span>
              <span class="text-white">Medik</span>
            </div>
            <span class="text-xl text-white font-semibold"> | Artikel</span>
          </a>
        </li>
        {/* Container 2 */}
        <li class="flex flex-row gap-3 border">
          {/* Notification */}
          <div>
            <img src={Person3} alt="" class="h-10 w-10 rounded-full" />
          </div>
          {/* Message */}
          <div>
            <img src={Person3} alt="" class="h-10 w-10 rounded-full" />
          </div>
          {/* Circle Profile */}
          <CircleProfile/>
        </li>
        {/* Mobile Menu */}
        {/* <div class="block lg:hidden">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen() ? (
              <CloseMenu
                width={50}
                height={35}
                color="#ffffff"
                strokeWidth={2}
              />
            ) : (
              <HamburgerMenu
                width={50}
                height={35}
                color="#ffffff"
                strokeWidth={2}
              />
            )}
          </button>
        </div> */}
      </ul>
      {/* Mobile Navigation Menu */}
      <NavMenu state={isOpen} />
    </nav>
  );
};

export default Header;
