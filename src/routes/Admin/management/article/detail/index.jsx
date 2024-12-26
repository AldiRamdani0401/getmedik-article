const DetailArticle = (props) => {
  return (
    <section className="absolute z-30 justify-center bg-black bg-opacity-95 border h-full w-full">
      {/* Container 1 */}
      <div class="flex justify-end border h-fit">
        <button
          class="text-white px-2 border"
          onClick={() => props.setState(<></>)}
        >
          Cancel
        </button>
      </div>
      {/* Container 2 */}
      <div class="flex flex-row h-full px-5 pb-10 gap-10">
        {/* === Data Article === */}
        <div className="flex flex-col bg-slate-200 rounded-md py-4 w-1/2">
          {/* Header */}
          <h1 class="bg-teal-700 text-white text-center py-2 text-xl font-medium">
            Detail Artikel
          </h1>
          {/* Body */}
          <div class="flex flex-col gap-2 px-2 max-h-full overflow-auto">
            {/* Table 1 : Article */}
            <table class="border-red-600 border mt-5">
              <tbody>
                {/* === Article ID === */}
                <tr>
                  <td class="border-red-600 border px-2">Article ID</td>
                  <td class="border-red-600 border px-2">Article ID</td>
                </tr>
                {/* === Title Article === */}
                <tr>
                  <td class="border-red-600 border px-2">Judul Artikel</td>
                  <td class="border-red-600 border px-2">Article ID</td>
                </tr>
                {/* === Created At === */}
                <tr>
                  <td class="border-red-600 border px-2">Dibuat</td>
                  <td class="border-red-600 border px-2">Article ID</td>
                </tr>
                {/* === Updated At === */}
                <tr>
                  <td class="border-red-600 border px-2">Diperbarui </td>
                  <td class="border-red-600 border px-2">Article ID</td>
                </tr>
                {/* === Published At === */}
                <tr>
                  <td class="border-red-600 border px-2">Dipublikasi</td>
                  <td class="border-red-600 border px-2">Article ID</td>
                </tr>
                {/* === Verification Status === */}
                <tr>
                  <td class="border-red-600 border px-2">Status Verifikasi</td>
                  <td class="border-red-600 border px-2">Article ID</td>
                </tr>
                {/* === Article Status === */}
                <tr>
                  <td class="border-red-600 border px-2">Status Artikel</td>
                  <td class="border-red-600 border px-2">Article ID</td>
                </tr>
                {/* === Viewer === */}
                <tr>
                  <td class="border-red-600 border px-2">Pembaca</td>
                  <td class="border-red-600 border px-2">Article ID</td>
                </tr>
                {/* === Shared === */}
                <tr>
                  <td class="border-red-600 border px-2">Dibagikan</td>
                  <td class="border-red-600 border px-2">Article ID</td>
                </tr>
              </tbody>
            </table>
            {/* Table 2 : Author */}
            <table class="border-red-600 border mt-5">
              <tbody>
                {/* === Author === */}
                <tr>
                  <td colSpan={2} class="border-red-600 border text-center">
                    Author
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} class="border-red-600 border text-center">
                    Author Foto
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} class="border-red-600 border text-center">
                    Author name
                  </td>
                </tr>
                {/* === Author === */}
                <tr>
                  <td class="border-red-600 border py-1 text-center">
                    <button class="bg-blue-800 text-white px-2 rounded-md">
                      Detail Penulis
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Table 3 : Doctor Verificator */}
            <table class="border-red-600 border mt-5">
              <tbody>
                {/* === Doctor === */}
                <tr>
                  <td colSpan={2} class="border-red-600 border text-center">
                    Verifikasi Dokter
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} class="border-red-600 border text-center">
                    Dokter Foto
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} class="border-red-600 border text-center">
                    Dokter name
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} class="border-red-600 border text-center">
                    Spesialisasi Dokter
                  </td>
                </tr>
                {/* === Doctor === */}
                <tr>
                  <td class="border-red-600 border py-1 text-center">
                    <button class="bg-blue-800 text-white px-2 rounded-md">
                      Detail Dokter
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Table 4 : Admin Verificator */}
            <table class="border-red-600 border mt-5">
              <tbody>
                {/* === Admin === */}
                <tr>
                  <td colSpan={2} class="border-red-600 border text-center">
                    Verifikasi Admin
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} class="border-red-600 border text-center">
                    Admin Foto
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} class="border-red-600 border text-center">
                    Admin name
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} class="border-red-600 border text-center">
                    Spesialisasi Admin
                  </td>
                </tr>
                {/* === Doctor === */}
                <tr>
                  <td class="border-red-600 border py-1 text-center">
                    <button class="bg-blue-800 text-white px-2 rounded-md">
                      Detail Admin
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* === Preview Article === */}
        <div className="text-white bg-slate-200 rounded-md pt-4 w-full">
          {/* Header */}
          <h1 class="bg-teal-700 text-white text-center py-2 text-xl font-medium">
            Preview Artikel
          </h1>
          {/* Body */}
          <div class="border w-full h-[580px] md:h-[580px] lg:h-[720px] xl:h-[580px] overflow-hidden bg-white">
            {/* clone tampilan website */}
            <iframe
              src="http://localhost:3000/article/detail"
              className="w-full h-full border-none"
              title="Article Preview"
              style={window.innerWidth > 900 ? "zoom: 0.60" : "zoom: 0.40"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailArticle;
