import { useParams } from "@solidjs/router";

import { articleBanner, Person1, Person2 } from "../assets/images";
import CopyIcon from "../components/icons/CopyIcon";
import FacebookIcon from "../components/icons/social-media/FacebookIcon";
import TwitterIcon from "../components/icons/social-media/TwitterIcon";

// Services
import S_Article from "../services/examples/S_Articles";
import H_Article_Format from "../utils/handlers/format/H_Arrticle_Format";
import { createSignal } from "solid-js";

// Handler: Recommendation Article
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
  const [htmlString, setHtmlString] = createSignal(null);

  // Get URL Params
  const params = useParams();
  const article = S_Article.getArticle(params.articleId);
  if (article?.content) {
    setHtmlString(article.content);
  }

  return (
    <>
      <div class="px-8 py-1 lg:px-20 bg-gray-50">
        <p class="text-sm font-medium">
          Beranda / Artikel / {article.category}
        </p>
      </div>
      <div className="flex flex-col gap-8 px-8 py-5 lg:px-20">
        {/* Badge Category */}
        <div class="flex flex-row gap-2">
          <button class="block w-fit text-xs font-bold bg-green-600 px-2 py-0 text-white rounded-xl">
            {article.category}
          </button>
          <button class="block w-fit text-xs font-semibold bg-gray-100 px-2 py-0 rounded-xl">
            {article.sub_category}
          </button>
        </div>
        {/* Container Content Article */}
        <div class="flex flex-col gap-5">
          <h1 class="text-2xl lg:text-3xl font-bold">
            {article.title_article}
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
                <p class="font-medium text-lg md:text-base lg:text-base">
                  {article.author}
                </p>
              </div>
              {/* Verified By */}
              <div class="">
                <p class="text-base lg:text-sm">Ditinjau oleh</p>
                <p class="font-medium text-lg md:text-base lg:text-base">
                  {article.doctor_verificator.name}
                </p>
              </div>
              {/* Published On */}
              <div class="">
                <p class="text-base lg:text-sm">Waktu Publikasi</p>
                <p class="font-medium text-lg md:text-base lg:text-base">
                  {H_Article_Format.date(article.published)}
                </p>
              </div>
            </div>
            {/* Share Articles */}
            <div class="flex flex-row gap-5 md:gap-1 lg:gap-5 h-fit justify-center">
              {/* Copy */}
              <button
                class="flex flex-row gap-1 items-center bg-[#0E8181] font-semibold rounded-lg text-white text-base md:text-sm lg:text-base p-2"
                href=""
              >
                <CopyIcon />
                <span>Copy Link</span>
              </button>
              {/* Twitter */}
              <a
                class="flex items-center bg-[#0E8181] font-semibold rounded-lg text-white text-base md:text-sm lg:text-base p-2"
                href=""
              >
                <TwitterIcon />
              </a>
              {/* Facebook */}
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
              <div innerHTML={htmlString()}>
                {/* Content Article */}
              </div>
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
            <h1 class="text-center text-2xl font-bold lg:text-left lg:text-xl lg:font-semibold">
              Artikel Kesehatan lainnya
            </h1>
            <a href="/article" class="text-[#0E8181] font-semibold text-right">
              Lihat semua artikel
            </a>
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
