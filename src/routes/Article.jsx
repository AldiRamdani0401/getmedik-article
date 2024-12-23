import { articleBanner, logoGmDark } from "../assets/images";
import Search from "../components/icons/Search";
import MainLayout from "../layouts/MainLayout";

function renderArticle() {
  let limit = 14;

  return Array.from({ length: limit }, (_, index) => (
    <div class="w-full md:w-1/2 lg:w-1/4 border" key={index}>
      <img src={articleBanner} alt="article" />
      <div class="flex flex-col gap-8 px-2 py-3">
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

function Article() {
  return (
      <div className="flex flex-col gap-8 px-8 py-1 lg:px-20">
        {/* Carousel */}
        <div class="w-full relative">
          <img
            src={articleBanner}
            class="object-cover h-[500px] w-full rounded-3xl"
            alt=""
          />
          <div class="absolute inset-0 bg-[#000000] opacity-50 rounded-3xl"></div>
          <div class="flex flex-col justify-between p-5 w-full lg:w-1/2 inset-0 z-20 absolute">
            <img src={logoGmDark} class="w-40" alt="logo-gm" />
            <div class="flex flex-col justify-around text-white py-2 gap-3">
              <p class="text-lg font-semibold">Artikel Unggulan</p>
              <p class="text-2xl line-clamp-2 font-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam dignissimos nobis, eum dolore ipsam iste a. Inventore
                fugiat ipsa et. et consectetur adipisicing elit. Officiis
                excepturi odit veniam quod veritatis expedita
              </p>
              <p class="text-lg line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis excepturi odit veniam quod veritatis expedita laborum
                dignissimos voluptate ad, dolorem assumenda laboriosam
                reprehenderit doloribus aspernatur voluptatem! Dolor corrupti
                praesentium molestias officiis necessitatibus iste neque eaque
                adipisci dolorem consectetur, fugit, aperiam cumque eius. Velit
                ducimus, aperiam eos sint alias vitae laboriosam.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-5 border">
          <h1 class="text-2xl font-bold">Artikel Kesehatan</h1>
          <p>
            Panduan Dan Informasi Kesehatan Untuk Hidup Lebih Sehat Dengan
            Artikel GetMedik
          </p>
        </div>
        {/* List Content Articles */}
        {/* Container 1 */}
        <div class="flex flex-col gap-5">
          {/* Badge */}
          <div class="flex flex-row gap-5">
            <button class="border">Lihat semua kategori</button>
            <button class="border">category</button>
            <button class="border">category</button>
          </div>
          {/* Search Input */}
          <div class="flex flex-row items-center rounded-2xl border">
            <div class="px-2">
              <Search />
            </div>
            <input
              type="text"
              class="w-full rounded-r-xl border-none focus:ring-green-200 focus:border-green-700 outline-none"
              placeholder="Cari artikel"
            />
          </div>
        </div>
        {/* Articles */}
        <div class="flex flex-wrap">{renderArticle()}</div>
      </div>
  );
}

export default Article;
