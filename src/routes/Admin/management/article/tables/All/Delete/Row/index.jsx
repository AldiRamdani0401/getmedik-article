import { createSignal } from "solid-js";

import DetailArticle from "../../../../detail";

// Contexts
import { useRenderInParent } from "../../../../../../../../utils/context/RenderInParent";

// Handlers
import H_Article_Format from "../../../../../../../../utils/handlers/format/H_Arrticle_Format";

// Date Format
function H_Format_Date(dateString) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Parse input date
  const date = new Date(dateString);

  // Extract day, month, and other parts
  const dayOfWeek = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Format time
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} WIB`;

  // Construct final string
  return `${daysOfWeek[dayOfWeek]}, ${day} ${monthNames[month]} ${year} ${formattedTime}`;
}

// Styles
const selected =
  "group text-sm bg-red-200 hover:border-y-2 hover:border-red-500 cursor-pointer";

const unselected =
  "group text-sm hover:bg-blue-50 hover:border-y-2 hover:border-blue-300 cursor-pointer";

// Select Box Component
const SelectBox = (props) => {
  return (
    <div class="absolute z-20 top-0 left-1 w-full">
      <div
        class={`${
          props.state && !props.selectedDeleteModeState
            ? props.scrollState
              ? `sticky left-0`
              : "absolute"
            : "hidden"
        } flex flex-row gap-2 bg-gray-300 shadow-lg rounded-l-md rounded-r-lg w-fit border`}
      >
        <div class="flex flex-row px-2 py-1 gap-2">
          <button
            class="px-2 py-[0.8px] bg-blue-800 rounded-md text-white"
            onClick={() =>
              props.setRenderInParent(
                <DetailArticle
                  setState={props.setRenderInParent}
                  articleId={props.articleId}
                />
              )
            }
          >
            Go detail
          </button>
          <button
            class="px-2 py-[0.8px] bg-yellow-600 rounded-md text-white border"
            onClick={() => {
              props.setSelectedDeleteMode((prev) => [...prev, props.index]);
              props.setSelectedForDelete((prev) => [...prev, props.articleId]);
            }}
          >
            Select
          </button>
        </div>
        <button
          class="flex items-center justify-center px-2 bg-red-600 rounded-r-lg text-white border"
          onclick={() => {
            props.setOpenSelectBox(false);
            props.setOpenSelectBoxIndex(null);
            props.setSelected(null);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Rows = (props) => {
  // Context
  const [_, setRenderInParent] = useRenderInParent();

  // Signals
  const [openSelectBox, setOpenSelectBox] = createSignal(false);
  const [openSelectBoxIndex, setOpenSelectBoxIndex] = createSignal(null);

  const [articleId, setArticleId] = createSignal(null);
  const [titleArticle, setTitleArticle] = createSignal(null);
  const [author, setAuthor] = createSignal(null);
  const [category, setCategory] = createSignal(null);
  const [subCategory, setSubCategory] = createSignal(null);
  const [doctorVerificator, setDoctorVerificator] = createSignal(null);
  const [adminVerificator, setAdminVerificator] = createSignal(null);
  const [statusVerification, setStatusVerification] = createSignal(null);
  const [created, setCreated] = createSignal(null);
  const [updated, setUpdated] = createSignal(null);
  const [published, setPublished] = createSignal(null);
  const [viewer, setViewer] = createSignal(null);
  const [shared, setShared] = createSignal(null);
  const [articleStatus, setArticleStatus] = createSignal(null);

  // == SET
  setArticleId(props.data?.article_id);
  setTitleArticle(props.data?.title_article);
  setAuthor(props.data?.author);
  setDoctorVerificator(props.data?.doctor_verificator?.name);
  setCategory(props.data?.category);
  setSubCategory(props.data?.sub_category);
  setAdminVerificator(props.data?.admin_verificator?.name);
  setStatusVerification(
    H_Article_Format.status_verification(props.data?.verification_status)
  );
  setCreated(H_Format_Date(props.data?.created));
  setUpdated(H_Format_Date(props.data?.updated));
  setPublished(H_Format_Date(props.data?.published));
  setViewer(props.data?.viewer);
  setShared(props.data?.shared);
  setArticleStatus(H_Article_Format.status_article(props.data?.article_status));

  // const [getScrollX, setScrollX] = createSignal(null);

  // createEffect(() => {
  //   setScrollX(props.scrollState());
  //   // console.log(getScrollX());
  // });

  return (
    <tr
      key={props.index}
      class={`${
        props.selectedDeleteMode().includes(props.index) ? selected : unselected
      } relative z-10`}
      // onScroll={() => handleScroll()}
      onclick={() => {
        if (props.index == props.selected()) {
          setOpenSelectBoxIndex(props.index);
          setOpenSelectBox(true);
        } else {
          props.setSelected(props.index);
          setOpenSelectBox(false);
          setOpenSelectBoxIndex(null);
        }
      }}
    >
      {/* Update & Delete Mode */}
      <td class="border flex items-center p-[10.2px]">
        {/* Checkbox */}
        <input
          type="checkbox"
          id=""
          checked={props.selectedDeleteMode().includes(props.index)}
          onChange={() => {
            if (props.selectedDeleteMode().includes(props.index)) {
              alert("unselected");
              props.setSelectedDeleteMode((prev) =>
                prev.filter((index) => index !== props.index)
              );
              props.setSelectedForDelete((prev) =>
                prev.filter((id) => id !== props.data.article_id)
              );
              setOpenSelectBox(false);
            } else {
              alert("selected");
              props.setSelectedDeleteMode((prev) => [...prev, props.index]);
              props.setSelectedForDelete((prev) => [
                ...prev,
                props.data.article_id,
              ]);
            }
          }}
        />
      </td>
      {openSelectBox() &&
        props.index === openSelectBoxIndex() &&
        props.index === props.selected() && (
          <SelectBox
            state={openSelectBox()}
            scrollState={props.scrollState()}
            articleId={props.data.article_id}
            index={props.index}
            selectedDeleteModeState={props
              .selectedDeleteMode()
              .includes(props.index)}
            openSelectBoxIndex={openSelectBoxIndex}
            // Select
            setSelectedDeleteMode={props.setSelectedDeleteMode}
            setSelectedForDelete={props.setSelectedForDelete}
            // cancel
            setSelected={props.setSelected}
            setOpenSelectBox={setOpenSelectBox}
            setOpenSelectBoxIndex={setOpenSelectBoxIndex}
            // Action to Parent
            setRenderInParent={setRenderInParent}
          />
        )}
      {/* No */}
      {/* {console.log("current page", props.page)} */}
      <td class="border text-center px-2 py-2 text-nowrap ">
        {props.index + 1 + (props.page - 1) * props.limit}
      </td>
      {/* Article ID */}
      <td class="border text-center px-2 py-2 text-nowrap ">{articleId()}</td>
      {/* Title Article */}
      <td class="border text-center px-2 py-2 text-nowrap ">
        {titleArticle()}
      </td>
      {/* Author */}
      <td class="border text-center px-2 py-2 text-nowrap ">{author()}</td>
      {/* Doctor Verificator */}
      <td class="border text-center px-2 py-2 text-nowrap ">
        {doctorVerificator()}
      </td>
      {/* Admin Verificator */}
      <td class="border text-center px-2 py-2 text-nowrap ">
        {adminVerificator()}
      </td>
      {/* Category */}
      <td class="border text-center px-2 py-2 text-nowrap ">{category()}</td>
      {/* Sub Category */}
      <td class="border text-center px-2 py-2 text-nowrap ">{subCategory()}</td>
      {/* Verification Status */}
      <td
        class={
          statusVerification().color +
          ` border font-semibold text-center px-2 text-nowrap`
        }
      >
        {statusVerification().status}
      </td>
      {/* Created */}
      <td class="border text-center px-2 text-nowrap ">{created()}</td>
      {/* Updated */}
      <td class="border text-center px-2 text-nowrap ">{updated()}</td>
      {/* Published */}
      <td class="border text-center px-2 text-nowrap ">{published()}</td>
      {/* Viewer */}
      <td class="border text-center px-2 text-nowrap ">{viewer()}</td>
      {/* Shared */}
      <td class="border text-center px-2 text-nowrap ">{shared()}</td>
      {/* Article Status */}
      <td
        class={
          articleStatus().color +
          ` border font-semibold text-center px-2 text-nowrap`
        }
      >
        {articleStatus().status}
      </td>
    </tr>
  );
};

export default Rows;
