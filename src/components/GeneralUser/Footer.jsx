// Icons
import MapPin from "../icons/MapPin.jsx";
import Phone from "../icons/Phone.jsx";
import FacebookIcon from "../icons/social-media/FacebookIcon.jsx";
import InstagramIcon from "../icons/social-media/InstagramIcon.jsx";
import YoutubeIcon from "../icons/social-media/YoutubeIcon.jsx";

// Assets
import { logoAppStore, logoGmDark, logoPlayStore } from "../../assets/images/index.jsx";

const Footer = () => {
  return (
    <footer id="footer-general" class="flex flex-col gap-3 bg-[#464646] w-full">
      {/* Container 1 */}
      <div class="flex flex-col lg:flex-row gap-4 px-5 lg:px-16 xl:px-20 pt-8">
        <div class="flex justify-normal lg:justify-center mt-0 lg:mt-3 w-full lg:w-[650px]">
          <img
            src={logoGmDark}
            class="w-28 h-10"
            alt=""
          />
        </div>
        {/* Another Menu */}
        <div class="flex text-[16px] flex-col gap-2 lg:gap-0 px-5 text-white w-fit lg:w-[650px]">
          <p>Tentang Kami</p>
          <p>Layanan Kami</p>
          <p>Syarat & Ketentuan GetMedik</p>
          <p>Syarat & Ketentuan Dokter</p>
          <p>Kebijakan Privasi GetMedik</p>
          <p>Artikel</p>
          <p>FAQ</p>
        </div>
        {/* Contact */}
        <div class="flex flex-col gap-2 px-2 text-white">
          <h1 class="text-lg font-semibold">Hubungi Kami</h1>
          <div class="flex flex-row gap-2">
            <div className="flex flex-col items-center h-10">
              <MapPin />
            </div>
            <div class="text-sm text-nowrap">
              <p>Jl. Kuningan Barat Raya No.8, RT.1/RW.3,</p>
              <p>Kec. Mampang Prapatan, Kota Jakarta Selatan,</p>
              <p>Daerah Khusus Ibukota Jakarta 12710</p>
            </div>
          </div>
          <div class="flex flex-row gap-2">
            <div className="flex flex-col items-center h-5">
              <Phone />
            </div>
            <p class="text-sm">+6221 2904 4245</p>
          </div>
          <div class="flex flex-row gap-2">
            <div className="flex flex-col items-center h-5">
              <Phone />
            </div>
            <p class="text-sm">+62 852-8229-7686</p>
          </div>
          <div class="flex flex-row gap-2">
            <div className="flex flex-col items-center h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
              </svg>
            </div>
            <p class="text-sm">info@getmedik.co.id</p>
          </div>
          <div class="flex flex-row gap-2">
            <div className="flex flex-col items-center h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </div>
            <p class="text-sm">+62 852-8229-7686</p>
          </div>
        </div>
        <div class="flex flex-col gap-3 w-full">
          {/* Download App : User */}
          <div class="flex flex-col gap-2 px-2 text-white">
            <h1 class="text-lg font-semibold">Unduh Aplikasi</h1>
            <div class="flex flex-col lg:flex-row gap-2">
              <img
                src={logoPlayStore}
                class="w-28"
                alt=""
              />
              <img
                src={logoAppStore}
                class="w-28"
                alt=""
              />
            </div>
          </div>
          {/* Download App : Docter */}
          <div class="flex flex-col gap-2 px-2 text-white">
            <h1 class="text-lg font-semibold">Apakah Anda Dokter?</h1>
            <div class="flex flex-col lg:flex-row gap-2">
              <img
                src={logoPlayStore}
                class="w-28"
                alt=""
              />
              <img
                src={logoAppStore}
                class="w-28"
                alt=""
              />
            </div>
          </div>
          {/* Channel */}
          <div class="flex flex-col gap-2 px-2 text-white">
            <h1 class="text-lg font-semibold">Apakah Anda Channel?</h1>
            <div class="flex flex-col lg:flex-row gap-2">
              <img
                src={logoPlayStore}
                class="w-28"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Container 2 : Social Media & Copyright*/}
      <div class="flex flex-col lg:flex-row bg-[#3E3E3E] py-5 px-5 lg:px-28 gap-3 w-full">
        {/*  Copyright*/}
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 w-full">
          <p class="text-white text-nowrap">&copy2024 PT Layanan Medik Indonesia</p>
          {/* Social Media*/}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 px-0 lg:px-40">
            <p class="text-white text-nowrap">Follow kami di</p>
            <div className="flex flex-row">
              <FacebookIcon />
              <InstagramIcon />
              <YoutubeIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
