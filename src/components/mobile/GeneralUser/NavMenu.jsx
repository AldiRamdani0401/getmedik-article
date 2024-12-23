import { useLocation } from "@solidjs/router";

export default function NavMenu(props) {
  const location = useLocation();

  // Fungsi untuk memeriksa apakah path aktif
  const active = (path) =>
    path == location.pathname
      ? "text-green-500 font-bold"
      : "text-slate-600 font-[500] border-transparent hover:text-green-700";

  return (
    <header
      class={`${
        props.state() ? "max-h-screen" : "max-h-0"
      } lg:hidden w-full px-2 bg-white overflow-hidden transition-max-height duration-500 ease-in-out`}
    >
      <ul className="flex flex-col p-2 gap-5">
        <li class={`${active("")} mx-1.5 sm:mx-6 md:mx-0`}>
          <a href="#">Tentang Kami</a>
        </li>
        <li class={`${active("")} mx-1.5 sm:mx-6 md:mx-0`}>
          <a href="#">Layanan Kami</a>
        </li>
        <li class={`${active("/article")} mx-1.5 sm:mx-6 md:mx-0`}>
          <a href="/article">Artikel</a>
        </li>
        <li class={`${active("")} mx-1.5 sm:mx-6 md:mx-0`}>
          <a href="#">FAQ</a>
        </li>
        <li class={`flex`}>
          <a
            class="bg-[#0E8181] font-semibold rounded-lg text-white p-2"
            href=""
          >
            Download Apps
          </a>
        </li>
      </ul>
    </header>
  );
}
