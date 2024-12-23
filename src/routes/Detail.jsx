import { articleBanner, Person1, Person2 } from "../assets/images";
import CopyIcon from "../components/icons/CopyIcon";
import FacebookIcon from "../components/icons/social-media/FacebookIcon";
import TwitterIcon from "../components/icons/social-media/TwitterIcon";

function renderArticle() {
  let limit = 3;

  return Array.from({ length: limit }, (_, index) => (
    <div class="w-full" key={index}>
      <img src={articleBanner} alt="article" />
      <div class="flex flex-col gap-8 px-2 py-3 border">
        {/* Badge */}
        <div class="flex flex-col gap-2 w-full">
          <button class="block w-fit text-xs font-bold bg-green-100 px-2 py-0 rounded-xl">
            Olah Raga
          </button>
          <h1 class="font-bold text-lg">Artikel Kesehatan</h1>
        </div>
        {/* Created At */}
        <p class="text-sm font-medium">16 Juli 2024 10.00 WIB</p>
      </div>
    </div>
  ));
}

function Detail() {
  return (
    <>
      <div class="px-8 py-1 lg:px-20 bg-gray-50">
        <p class="text-sm font-medium">Beranda / Artikel / Olah Raga</p>
      </div>
      <div className="flex flex-col gap-8 px-8 py-5 lg:px-20">
        {/* Badge Category */}
        <div class="flex flex-row gap-2">
          <button class="block w-fit text-xs font-bold bg-green-600 px-2 py-0 text-white rounded-xl">
            Olah Raga
          </button>
          <button class="block w-fit text-xs font-semibold bg-gray-100 px-2 py-0 rounded-xl">
            Olah Raga
          </button>
        </div>
        {/* Container Content Article */}
        <div class="flex flex-col gap-5">
          <h1 class="text-2xl lg:text-3xl font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            ullam voluptatem, doloribus iste animi perspiciatis obcaecati
            cupiditate accusantium dolor porro.
          </h1>

          <img
            src={articleBanner}
            class="object-cover h-[350px] w-full rounded-lg"
            alt=""
          />
          {/* Container 1 */}
          <div class="flex flex-col md:flex-row lg:flex-row justify-between gap-5">
            {/* Description */}
            <div class="flex flex-col md:flex-row lg:flex-row gap-3 lg:gap-5">
              {/* Created By */}
              <div class="">
                <p class="text-base lg:text-sm">Dibuat oleh</p>
                <p class="font-medium text-lg md:text-base lg:text-base">Asep</p>
              </div>
              {/* Verified By */}
              <div class="">
                <p class="text-base lg:text-sm">Ditinjau oleh</p>
                <p class="font-medium text-lg md:text-base lg:text-base">Dr. Asep</p>
              </div>
              {/* Published On */}
              <div class="">
                <p class="text-base lg:text-sm">Waktu Publikasi</p>
                <p class="font-medium text-lg md:text-base lg:text-base">16 Juli 2024 06.00 WIB</p>
              </div>
            </div>
            {/* Share Articles */}
            <div class="flex flex-row gap-5 md:gap-1 lg:gap-5 h-fit justify-center">
              {/* Created By */}
              <button
                class="flex flex-row gap-1 items-center bg-[#0E8181] font-semibold rounded-lg text-white text-base md:text-sm lg:text-base p-2"
                href=""
              >
                <CopyIcon />
                <span>Copy Link</span>
              </button>
              {/* Verified By */}
              <a
                class="flex items-center bg-[#0E8181] font-semibold rounded-lg text-white text-base md:text-sm lg:text-base p-2"
                href=""
              >
                <TwitterIcon />
              </a>
              {/* Published On */}
              <a
                class="flex items-center bg-[#0E8181] font-semibold rounded-lg text-white p-2"
                href=""
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
          {/* Container 2 */}
          <div class="flex flex-col md:flex-row lg:flex-row justify-between gap-5">
            {/* Content Article */}
            <div class="w-full">
              {/* Text */}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat iste soluta sit voluptatibus animi ipsum labore
                reprehenderit laboriosam nobis. Sunt consequuntur velit illum
                mollitia perferendis neque, harum praesentium iste ex inventore
                debitis officia deserunt aspernatur quos eveniet. Eligendi esse
                hic vero vitae reprehenderit pariatur impedit nesciunt quisquam.
                Quaerat dolorem, sit voluptas, necessitatibus totam alias atque,
                excepturi officia fugiat perspiciatis unde illo quos ipsum
                doloremque ipsam nostrum nemo natus veritatis aperiam omnis quis
                beatae voluptates? Molestiae cumque, aut fugit illo ea ex animi
                doloremque! Corrupti porro blanditiis deleniti velit esse, a
                fugit molestiae quod, provident temporibus saepe non quasi, rem
                accusantium.
              </p>
              {/* Tag */}
              <div class="flex flex-wrap justify-center md:justify-normal lg:justify-normal gap-2 mt-10 w-full">
                <button class="block w-fit text-xs font-semibold bg-gray-100 px-2 py-0 rounded-xl">
                  Olah Raga
                </button>
                <button class="block w-fit text-xs font-semibold bg-gray-100 px-2 py-0 rounded-xl">
                  Olah Raga
                </button>
                <button class="block w-fit text-xs font-semibold bg-gray-100 px-2 py-0 rounded-xl">
                  Olah Raga
                </button>
                <button class="block w-fit text-xs font-semibold bg-gray-100 px-2 py-0 rounded-xl">
                  Olah Raga
                </button>
                <button class="block w-fit text-xs font-semibold bg-gray-100 px-2 py-0 rounded-xl">
                  Olah Raga
                </button>
                <button class="block w-fit text-xs font-semibold bg-gray-100 px-2 py-0 rounded-xl">
                  Olah Raga
                </button>
                <button class="block w-fit text-xs font-semibold bg-gray-100 px-2 py-0 rounded-xl">
                  Olah Raga
                </button>
                <button class="block w-fit text-xs font-semibold bg-gray-100 px-2 py-0 rounded-xl">
                  Olah Raga
                </button>
              </div>
            </div>
            {/* Aside Container */}
            <div class="flex flex-col w-full md:w-[40%] lg:w-[40%] text-center lg:text-left gap-4">
              <h3 class="text-2xl md:text-lg lg:text-xl font-semibold pr-5">
                Konsultasikan Kesehatan Sekarang
              </h3>
              {/* Docter 1 */}
              <div class="flex flex-col gap-1">
                <img
                  src={Person1}
                  class="rounded-2xl h-96 md:h-60 lg:h-80"
                  alt="person-1"
                />
                <h4 class="text-lg font-semibold">Dr. Caca Cahaya</h4>
                <h4 class="">Spesialis Mata</h4>
                <h5>Mulai dari Rp. 100.000</h5>
              </div>
              {/* Docter 2 */}
              <div class="flex flex-col gap-1">
                <img
                  src={Person2}
                  class="rounded-2xl h-96 md:h-60 lg:h-80"
                  alt="person-1"
                />
                <h4 class="text-lg font-semibold">Dr. Caca Cahaya</h4>
                <h4 class="">Spesialis Mata</h4>
                <h5>Mulai dari Rp. 100.000</h5>
              </div>
              {/* Download APP */}
              <div class="flex flex-col gap-5">
                <h4 class="text-2xl md:text-lg lg:text-xl text-left font-semibold">
                  Segera konsultasi dengan menggunakan aplikasi GetMedik
                </h4>
                <button
                  class="bg-[#0E8181] font-semibold rounded-lg text-white p-2"
                  href=""
                >
                  Download Apps
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Container: List Artiles Recommended */}
        <div class="flex flex-col gap-5">
          <div class="flex flex-col justify-normal md:justify-between md:flex-row lg:flex-row md:items-center lg:items-center gap-2">
            <h1 class="text-center text-2xl font-bold lg:text-left lg:text-xl lg:font-semibold">Artikel Kesehatan lainnya</h1>
            <a href="/article" class="text-[#0E8181] font-semibold text-right">Lihat semua artikel</a>
          </div>
          <div class="flex flex-col md:flex-row lg:flex-row">
            {renderArticle()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
