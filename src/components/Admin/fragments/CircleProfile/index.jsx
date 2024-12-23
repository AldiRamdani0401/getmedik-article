import { createSignal } from "solid-js";

import { Person3 } from "../../../../assets/images";
import User from "../../../icons/User";

const CircleProfile = () => {
  const [isClick, setIsClick] = createSignal(true);
  const [isOpen, setIsOpen] = createSignal(true);

  return (
    <div class="relative cursor-pointer">
      <img
        src={Person3}
        alt=""
        class={`h-10 w-10 rounded-full hover:border-2 hover:border-yellow-200 ${isClick() ? 'border-[2.5px] border-white' : ''}`}
        onclick={() => {
          setIsClick((prev) => !prev);
          setIsOpen((prev) => !prev);
        }}
      />
      {/* Dropdown */}
      <ul
        class={
          isOpen()
            ? "flex flex-col absolute left-[-150px] top-[50px] gap-1 bg-white w-48 pb-2 rounded-lg mt-1 shadow-md"
            : "hidden"
        }
      >
        <li class="flex flex-row items-center gap-2 px-1 bg-[#0E8181] py-1 rounded-t-lg">
            <img
              src={Person3}
              alt=""
              class="h-10 w-10 rounded-full shadow-md"
              onclick={() => setIsOpen((prev) => !prev)}
            />
          <span class="font-medium text-white text-center w-fit px-2">Aldi  Ramdani</span>
        </li>
        <li class="flex flex-row gap-2 p-1 border-y group hover:bg-[#0E8181] cursor-pointer">
          <User />
          <span class="text-[#0E8181] group-hover:text-white group-hover:font-semibold">My Profile</span>
        </li>
        <li class="flex flex-row gap-2 p-1 border-y group hover:bg-[#0E8181] cursor-pointer">
          <User />
          <span class="text-[#0E8181] group-hover:text-white group-hover:font-semibold">Settings</span>
        </li>
        <li class="flex flex-row gap-2 p-1 border-y group hover:bg-[#0E8181] cursor-pointer">
          <User />
          <span class="text-[#0E8181] group-hover:text-white group-hover:font-semibold">Logout</span>
        </li>
      </ul>
    </div>
  );
};
export default CircleProfile;
