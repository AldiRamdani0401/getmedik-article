import { createSignal } from "solid-js";

import DetailArticle from "../../../detail";

// Handlers
import H_Article_Format from "../../../../../../../utils/handlers/format/H_Arrticle_Format";
import { useRenderInParent } from "../../../../../../../utils/context/RenderInParent";

// Select Box Component
const SelectBox = (props) => {
  return (
    <div class="absolute z-20 top-0 left-1 w-full">
      <div
        class={`${
          props.state
            ? props.scrollState
              ? `sticky left-0`
              : "absolute"
            : "hidden"
        } flex flex-row gap-2 bg-gray-300 shadow-lg rounded-l-md rounded-r-lg w-fit border`}
      >
        <div class="flex flex-row pl-2 py-1 justify-center">
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

// Styles
const styles = {
  selected:
    "group text-sm bg-green-100 hover:border-y-2 hover:border-green-500  cursor-pointer",
  unselected:
    "group text-sm hover:border-y-2 hover:bg-blue-50 hover:border-blue-300 cursor-pointer",
};

const MainRows = (props) => {
  // Context
  const [_, setRenderInParent] = useRenderInParent();

  // Signals
  const [openSelectBox, setOpenSelectBox] = createSignal(false);
  const [openSelectBoxIndex, setOpenSelectBoxIndex] = createSignal(null);

  const [offEvent, setOffEvent] = createSignal(false);

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
  setCreated(H_Article_Format.date(props.data?.created));
  setUpdated(H_Article_Format.date(props.data?.updated));
  setPublished(H_Article_Format.date(props.data?.published));
  setViewer(props.data?.viewer);
  setShared(props.data?.shared);
  setArticleStatus(H_Article_Format.status_article(props.data?.article_status));

  return (
    <tr
      key={props.index}
      id={props.index}
      class={`${
        articleId() === props.selected() ? styles.selected : styles.unselected
      } relative z-10 ${props.index % 2 == 0 ? "" : "bg-slate-50"}`}
      // onScroll={() => handleScroll()}
      onclick={() => {
        if (!offEvent()) {
          if (props.data.article_id == props.selected()) {
            setOpenSelectBoxIndex(props.selected());
            setOpenSelectBox(true);
          } else {
            props.setSelected(articleId());
            console.log(articleId());
            console.log("props.selected", props.selected());
            setOpenSelectBox(false);
            setOpenSelectBoxIndex(null);
          }
        }
      }}
    >
      {/* Update & Delete Mode */}
      {/* <td class="border flex items-center p-[10.2px]"> */}
      {/* Checkbox */}
      {/* <input
          type="checkbox"
          id=""
          // checked={props.selectedDeleteMode().includes(props.index)}
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
        /> */}
      {/* </td> */}
      {/* No */}
      <td class="border text-center px-2 py-2 text-nowrap ">
        {openSelectBox() &&
          props.data.article_id === openSelectBoxIndex() &&
          props.data.article_id === props.selected() && (
            <SelectBox
              state={openSelectBox()}
              scrollState={props.scrollState()}
              articleId={props.data.article_id}
              index={props.index}
              // selectedDeleteModeState={props
              //   .selectedDeleteMode()
              //   .includes(props.index)}
              openSelectBoxIndex={openSelectBoxIndex}
              // Select
              // setSelectedDeleteMode={props.setSelectedDeleteMode}
              // setSelectedForDelete={props.setSelectedForDelete}
              // cancel
              setSelected={props.setSelected}
              setOpenSelectBox={setOpenSelectBox}
              setOpenSelectBoxIndex={setOpenSelectBoxIndex}
              // Action to Parent
              setRenderInParent={setRenderInParent}
            />
          )}
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
      {/* Action */}
      <td class="flex flex-row border gap-2 p-2 text-nowrap">
        <button
          class="bg-yellow-400 rounded-lg text-white px-2"
          onClick={() => {
            setOpenSelectBox(false);
            setOffEvent(true);
            props.setSelected(props.index);
            console.log("jalan");
          }}
        >
          Edit
        </button>
        <button class="bg-red-400 rounded-lg text-white px-2">Delete</button>
      </td>
    </tr>
  );
};

export default MainRows;
