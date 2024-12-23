import { createSignal } from "solid-js";

import { Person3 } from "../../../../../assets/images";
import User from "../../../../icons/User";

const Message = () => {
  const [isClick, setIsClick] = createSignal(true);
  const [isOpen, setIsOpen] = createSignal(true);

  return (
    <div class="relative cursor-pointer" >
      <div  class={`flex items-center justify-center h-10 w-10 rounded-full hover:text-[#0b5555] hover:border-2 hover:bg-white ${isClick() ? 'border-[2.5px] bg-white border-white text-[#0b5555]' : ''}`}
        onclick={() => {
          setIsClick((prev) => !prev);
          setIsOpen((prev) => !prev);
        }}>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-message"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" /></svg>
      </div>
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
export default Message;
