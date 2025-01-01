import { createSignal } from "solid-js";
import S_Article from "../../../../../services/examples/S_Articles";
import H_Article_Format from "../../../../../utils/handlers/format/H_Arrticle_Format";
import { Person1, Person2, Person3 } from "../../../../../assets/images";

// Menangkap kiriman data dari post
const DetailArticle = (props) => {
  // console.log("props.articleId from detail", props.articleId);

  // Get Article Data
  const article = S_Article.getArticle(props.articleId);

  // Initial Detail Article Value
  // ## Article
  const [articleId, setArticleId] = createSignal(null);
  const [title, setTitle] = createSignal(null);
  const [createdAt, setCreatedAt] = createSignal(null);
  const [updateAt, setUpdateAt] = createSignal(null);
  const [publishedAt, setPublishedAt] = createSignal(null);
  const [statusVerfication, setStatusVerification] = createSignal(null);
  const [statusArticle, setStatusArticle] = createSignal(null);
  const [viewer, setViewer] = createSignal(null);
  const [shared, setShared] = createSignal(null);

  // == Set Article Value
  setArticleId(article.article_id);
  setTitle(article.title_article);
  setCreatedAt(H_Article_Format.date(article.created));
  setUpdateAt(H_Article_Format.date(article.updated));
  setPublishedAt(H_Article_Format.date(article.published));
  setStatusVerification(
    H_Article_Format.status_verification(article.verification_status)
  );
  setStatusArticle(article.article_status);
  setViewer(article.viewer);
  setShared(article.shared);

  // ## Author
  const [author, setAuthor] = createSignal(null);
  const [authorImage, setAuthorImage] = createSignal(null);

  // == Set Author Value ==
  setAuthor(article.author);
  setAuthorImage(Person1);

  // ## Doctor
  const [doctor, setDoctor] = createSignal(null);
  const [doctorImage, setDoctorImage] = createSignal(null);
  const [specializationDoctor, setSpecializationDoctor] = createSignal(null);

  // == Set Doctor Value ==
  setDoctor(article.doctor_verificator.name);
  setDoctorImage(Person3);
  setSpecializationDoctor(article.doctor_verificator.specialization);

  // ## Admin
  const [admin, setAdmin] = createSignal(null);
  const [adminImage, setAdminImage] = createSignal(null);
  const [specializationAdmin, setSpecializationAdmin] = createSignal(null);

  // == Set Admin Value ==
  setAdmin(article.admin_verificator.name);
  setAdminImage(Person2);
  setSpecializationAdmin(article.admin_verificator.specialization);

  return (
    <section className="absolute z-30 justify-center bg-black bg-opacity-95 border h-full w-full">
      {/* Container 1 */}
      <div class="flex justify-end py-1 px-5 h-fit">
        <button
          class="text-white px-2 bg-red-600 rounded-lg"
          onClick={() => props.setState(<></>)}
        >
          Cancel
        </button>
      </div>
      {/* Container 2 */}
      <div class="flex flex-row h-full px-5 pb-10 gap-10 ">
        {/* === Data Article === */}
        <div className="flex flex-col bg-slate-200 rounded-md py-4 text-nowrap w-1/2">
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
                  <td class="border-slate-400 border px-2 font-semibold bg-teal-600 text-white">
                    Article ID
                  </td>
                  <td class="border-slate-400 bg-white border px-2">
                    {articleId()}
                  </td>
                </tr>
                {/* === Title Article === */}
                <tr>
                  <td class="border-slate-400 border px-2 font-semibold bg-teal-600 text-white">
                    Judul Artikel
                  </td>
                  <td class="border-slate-400 bg-white border px-2">
                    {title()}
                  </td>
                </tr>
                {/* === Created At === */}
                <tr>
                  <td class="border-slate-400 border px-2 font-semibold bg-teal-600 text-white">
                    Dibuat
                  </td>
                  <td class="border-slate-400 bg-white border px-2">
                    {createdAt()}
                  </td>
                </tr>
                {/* === Updated At === */}
                <tr>
                  <td class="border-slate-400 border px-2 font-semibold bg-teal-600 text-white">
                    Diperbarui{" "}
                  </td>
                  <td class="border-slate-400 bg-white border px-2">
                    {updateAt()}
                  </td>
                </tr>
                {/* === Published At === */}
                <tr>
                  <td class="border-slate-400 border px-2 font-semibold bg-teal-600 text-white">
                    Dipublikasi
                  </td>
                  <td class="border-slate-400 bg-white border px-2">
                    {publishedAt()}
                  </td>
                </tr>
                {/* === Verification Status === */}
                <tr>
                  <td class="border-slate-400 border px-2 font-semibold bg-teal-600 text-white">
                    Status Verifikasi
                  </td>
                  <td class="border-slate-400 bg-white border px-2">
                    {statusVerfication()}
                  </td>
                </tr>
                {/* === Article Status === */}
                <tr>
                  <td class="border-slate-400 border px-2 font-semibold bg-teal-600 text-white">
                    Status Artikel
                  </td>
                  <td class="border-slate-400 bg-white border px-2">
                    {H_Article_Format.status_article(statusArticle())}
                  </td>
                </tr>
                {/* === Viewer === */}
                <tr>
                  <td class="border-slate-400 border px-2 font-semibold bg-teal-600 text-white">
                    Pembaca
                  </td>
                  <td class="border-slate-400 bg-white border px-2">
                    {viewer()}
                  </td>
                </tr>
                {/* === Shared === */}
                <tr>
                  <td class="border-slate-400 border px-2 font-semibold bg-teal-600 text-white">
                    Dibagikan
                  </td>
                  <td class="border-slate-400 bg-white border px-2">
                    {shared()}
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Table 2 : Author */}
            <table class="mt-5">
              <tbody>
                {/* === Author === */}
                <tr>
                  <td
                    colSpan={2}
                    class="border-slate-400 border px-2 font-semibold bg-teal-600 text-white text-center"
                  >
                    Author
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    class="border-slate-400 bg-white border text-center"
                  >
                    <img src={authorImage()} class="w-28 h-40 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    class="border-slate-400 bg-white border text-center font-semibold"
                  >
                    {author()}
                  </td>
                </tr>
                {/* === Author === */}
                <tr>
                  <td class="py-2 text-center">
                    <button class="bg-blue-800 text-white px-2 rounded-md">
                      Detail Penulis
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Table 3 : Doctor Verificator */}
            <table class="mt-5">
              <tbody>
                {/* === Doctor === */}
                <tr>
                  <td
                    colSpan={2}
                    class="border-slate-400 border px-2 font-semibold bg-teal-600 text-white text-center"
                  >
                    Verifikasi Dokter
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    class="border-slate-400 bg-white border px-2 text-center font-semibold"
                  >
                    <img src={doctorImage()} alt="" class="w-28 h-40 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    class="border-slate-400 bg-white border text-center font-semibold"
                  >
                    {doctor()}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    class="border-slate-400 bg-white border text-center"
                  >
                    {specializationDoctor()}
                  </td>
                </tr>
                {/* === Doctor === */}
                <tr>
                  <td class="py-2 text-center">
                    <button class="bg-blue-800 text-white px-2 rounded-md">
                      Detail Dokter
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Table 4 : Admin Verificator */}
            <table class="mt-5">
              <tbody>
                {/* === Admin === */}
                <tr>
                  <td
                    colSpan={2}
                    class="border-slate-400 border px-2 font-semibold bg-teal-600 text-white text-center"
                  >
                    Verifikasi Admin
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} class="border-slate-400 bg-white border px-2">
                    <img src={adminImage()} alt="" class="w-28 h-40 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    class="border-slate-400 bg-white border text-center font-semibold"
                  >
                    {admin()}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    class="border-slate-400 bg-white border text-center"
                  >
                    {specializationAdmin()}
                  </td>
                </tr>
                {/* === Doctor === */}
                <tr>
                  <td class="py-2 text-center">
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
              src={`http://localhost:3000/article/${props.articleId}`}
              className="w-full h-full border-none"
              title="Article Preview"
              style={{ zoom: window.innerWidth > 900 ? "0.60" : "0.40" }}
              onLoad={(e) => {
                const iframeDocument =
                  e.target.contentDocument || e.target.contentWindow.document;
                const navElement = iframeDocument.getElementById("nav-general");
                const footerElement =
                  iframeDocument.getElementById("footer-general");
                if (navElement && footerElement) {
                  navElement.style.display = "none";
                  footerElement.style.display = "none";
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailArticle;
