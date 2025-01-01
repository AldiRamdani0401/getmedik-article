import { createEffect, createSignal, onMount } from "solid-js";

import DetailArticle from "../../../../detail";

// Contexts
import { useRenderInParent } from "../../../../../../../../utils/context/RenderInParent";

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

// Verification Status
function H_Format_Status(value, comparator) {
  return comparator[value];
}

const style = {
  1: "text-green-500",
  2: "text-yellow-500",
  3: "text-red-500",
  4: "text-blue-700",
};

// Styles
const selected =
  "group text-sm bg-red-200 hover:border-y-2 hover:border-red-500 cursor-pointer";

const unselected =
  "group text-sm hover:bg-blue-50 hover:border-y-2 hover:border-blue-300 cursor-pointer";

// Select Box Component
const SelectBox = (props) => {
  // console.log("props.articleId", props.articleId);
  // console.log("scrollX", props.scrollState);
  // console.log("index", props.index);
  // console.log("selected delete mode", props.selectedDeleteModeState);

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

  // Signal
  const [openSelectBox, setOpenSelectBox] = createSignal(false);
  const [openSelectBoxIndex, setOpenSelectBoxIndex] = createSignal(null);
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
          // Function 1
          // if (click() == 1) {
          //   console.log("detail");
          //   setRenderInParent(<DetailArticle setState={setRenderInParent}/>);
          // }
          // Function 2
          // if (click() == 2) {
          //   alert("select delete");
          //   props.setSelectedDeleteMode((prev) => [...prev, props.index]);
          // }
        } else {
          props.setSelected(props.index);
          setOpenSelectBox(false);
          setOpenSelectBoxIndex(null);
        }
      }}
    >
      {/* {console.log('scrollX', props.scrollState())} */}
      {/* Update & Delete Mode */}
      <td class="border flex items-center p-[10.2px]">
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
      {console.log("current page", props.page)}
      <td class="border text-center px-2 py-2 text-nowrap ">
        {props.index + 1 + (props.page - 1) * props.limit}
      </td>
      {/* Article ID */}
      <td class="border text-center px-2 py-2 text-nowrap ">
        {props.data.article_id}
      </td>
      {/* Title Article */}
      <td class="border text-center px-2 py-2 text-nowrap ">
        {props.data.title_article}
      </td>
      {/* Author */}
      <td class="border text-center px-2 py-2 text-nowrap ">
        {props.data.author}
      </td>
      {/* Doctor Verificator */}
      <td class="border text-center px-2 py-2 text-nowrap ">
        {props.data.doctor_verificator.name}
      </td>
      {/* Admin Verificator */}
      <td class="border text-center px-2 py-2 text-nowrap ">
        {props.data.admin_verificator.name}
      </td>
      {/* Verification Status */}
      <td
        class={`${
          style[props.data.verification_status]
        } border font-semibold text-center px-2 text-nowrap `}
      >
        {H_Format_Status(props.data.verification_status, {
          1: "ACCEPTED",
          2: "PENDING",
          3: "REJECTED",
          4: "REVISION",
        })}
      </td>
      {/* Created */}
      <td class="border text-center px-2 text-nowrap ">
        {H_Format_Date(props.data.created)}
      </td>
      {/* Updated */}
      <td class="border text-center px-2 text-nowrap ">
        {H_Format_Date(props.data.updated)}
      </td>
      {/* Published */}
      <td class="border text-center px-2 text-nowrap ">
        {H_Format_Date(props.data.published)}
      </td>
      {/* Viewer */}
      <td class="border text-center px-2 text-nowrap ">{props.data.viewer}</td>
      {/* Shared */}
      <td class="border text-center px-2 text-nowrap ">{props.data.shared}</td>
      {/* Article Status */}
      <td
        class={`${
          style[props.data.article_status]
        } border font-semibold text-center px-2 text-nowrap `}
      >
        {H_Format_Status(props.data.article_status, {
          1: "PUBLISHED",
          2: "UNPUBLISHED",
          3: "BANNED",
          4: "DELETED",
        })}
      </td>
    </tr>
  );
};

export default Rows;
