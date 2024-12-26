import { createEffect, createSignal } from "solid-js";
import Search from "../../../../../../components/icons/Search";
import article_management from "../../../../../../samples/admin/article_management";
import DeleteTable from "./Delete";

// datas
const datas = [...article_management];

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

const All = (props) => {
  const [selected, setSelected] = createSignal(null);
  return (
    <div class="overflow-hidden border-teal-700 rounded-tr-lg">
      {(props.delete.state() && (
        <DeleteTable setState={props.delete.setState}/>
      )) || (props.edit() && (
        <h1>Edit Mode</h1>
      )) || (
        <>
          <table class="w-full">
            <caption
              class={
                "text-left text-2xl px-2 py-3 bg-teal-700 text-white font-bold"
              }
            >
              All Articles
            </caption>
          </table>
          {/* Table Features */}
          <div
            class={`${"bg-teal-600"} py-1 flex flex-row md:flex-col lg:flex-row xl:flex-row md:justify-normal lg:justify-normal xl:justify-between items-center px-2 gap-2`}
          >
            {/* show entries data */}
            <select class="py-0 px-8 border-slate-200" name="" id="">
              <option class="" value="">
                Show entries
              </option>
              <option class="" value="">
                10
              </option>
              <option class="" value="">
                10
              </option>
              <option class="" value="">
                10
              </option>
            </select>
            {/* filter */}
            <div class="flex flex-row gap-1">
              <select class="py-0 px-8 border-slate-200" name="" id="">
                <option class="bg-slate-50" default>
                  -- select filter --
                </option>
                <option class="" value="">
                  Article ID
                </option>
                <option class="" value="">
                  10
                </option>
                <option class="" value="">
                  10
                </option>
              </select>
              {/* filter value : when filter is choosen */}
              <select class=" hidden py-0 px-8 border-slate-200" name="" id="">
                <option class="bg-slate-50" value="" default>
                  -- select filter value --
                </option>
                <option class="" value="">
                  Article ID
                </option>
                <option class="" value="">
                  10
                </option>
                <option class="" value="">
                  10
                </option>
              </select>
            </div>
            {/* search */}
            <div class="flex flex-row justify-between gap-1">
              <select class="py-0 px-8 border-slate-200" name="" id="">
                <option class="" value="" default>
                  -- select keyword --
                </option>
                <option class="" value="">
                  Article ID
                </option>
                <option class="" value="">
                  10
                </option>
                <option class="" value="">
                  10
                </option>
              </select>
              <div class="flex flex-row">
                <input type="text" class="py-0 border-slate-200" />
                <button class="px-2 bg-blue-900 text-white border border-blue-900 rounded-r-md">
                  <Search />
                </button>
              </div>
            </div>
          </div>
          {/* Wrap table header and body */}
          <div class="bg-white lg:h-[350px] lg:max-h-[400px] xl:h-[400px] xl:max-h-[400px] overflow-auto thin-scrollbar">
            <table class="w-full bg-white">
              <thead class="bg-teal-50 text-sm shadow-md sticky top-0">
                <tr>
                  <th class="font-semibold border px-2 text-nowrap">No</th>
                  <th class="font-semibold border px-2 text-nowrap">
                    Article ID
                  </th>
                  <th class="font-semibold border px-2 text-nowrap">
                    Title Article
                  </th>
                  <th class="font-semibold border px-2 text-nowrap">Author</th>
                  <th class="font-semibold border px-2 text-nowrap">
                    Doctor Verificator
                  </th>
                  <th class="font-semibold border px-2 text-nowrap">
                    Admin Verificator
                  </th>
                  <th class="font-semibold border px-2 text-nowrap">
                    Verification Status
                  </th>
                  <th class="font-semibold border px-2 text-nowrap">Created</th>
                  <th class="font-semibold border px-2 text-nowrap">Updated</th>
                  <th class="font-semibold border px-2 text-nowrap">
                    Published
                  </th>
                  <th class="font-semibold border px-2 text-nowrap">Viewer</th>
                  <th class="font-semibold border px-2 text-nowrap">Shared</th>
                  <th class="font-semibold border px-2 text-nowrap">
                    Article Status
                  </th>
                  <th class="font-semibold border px-2 text-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((data, index) => (
                  <tr
                    key={index}
                    class={
                      selected() === index
                        ? "group text-sm bg-teal-50 border-y-2 border-teal-500 cursor-pointer"
                        : "group text-sm hover:bg-blue-50 hover:border-y-2 hover:border-blue-300 cursor-pointer"
                    }
                    onclick={() => {
                      setSelected(index);
                    }}
                  >
                    {/* No */}
                    <td class="border text-center px-2 text-nowrap ">
                      {index + 1}
                    </td>
                    {/* Article ID */}
                    <td class="border text-center px-2 text-nowrap ">
                      {data.article_id}
                    </td>
                    {/* Title Article */}
                    <td class="border text-center px-2 text-nowrap ">
                      {data.title_article}
                    </td>
                    {/* Author */}
                    <td class="border text-center px-2 text-nowrap ">
                      {data.author}
                    </td>
                    {/* Doctor Verificator */}
                    <td class="border text-center px-2 text-nowrap ">
                      {data.doctor_verificator}
                    </td>
                    {/* Admin Verificator */}
                    <td class="border text-center px-2 text-nowrap ">
                      {data.admin_verificator}
                    </td>
                    {/* Verification Status */}
                    <td
                      class={`${
                        style[data.verification_status]
                      } border font-semibold text-center px-2 text-nowrap `}
                    >
                      {H_Format_Status(data.verification_status, {
                        1: "ACCEPTED",
                        2: "PENDING",
                        3: "REJECTED",
                        4: "REVISION",
                      })}
                    </td>
                    {/* Created */}
                    <td class="border text-center px-2 text-nowrap ">
                      {H_Format_Date(data.created)}
                    </td>
                    {/* Updated */}
                    <td class="border text-center px-2 text-nowrap ">
                      {H_Format_Date(data.updated)}
                    </td>
                    {/* Published */}
                    <td class="border text-center px-2 text-nowrap ">
                      {H_Format_Date(data.published)}
                    </td>
                    {/* Viewer */}
                    <td class="border text-center px-2 text-nowrap ">
                      {data.viewer}
                    </td>
                    {/* Shared */}
                    <td class="border text-center px-2 text-nowrap ">
                      {data.shared}
                    </td>
                    {/* Article Status */}
                    <td
                      class={`${
                        style[data.article_status]
                      } border font-semibold text-center px-2 text-nowrap `}
                    >
                      {H_Format_Status(data.article_status, {
                        1: "PUBLISHED",
                        2: "UNPUBLISHED",
                        3: "BANNED",
                        4: "DELETED",
                      })}
                    </td>
                    {/* Action */}

                    <td class="flex flex-row border text-center p-2 gap-2 text-nowrap ">
                      <button class="bg-red-500 text-white font-medium rounded-sm p-1">
                        Delete
                      </button>
                      <button class="bg-yellow-500 text-white font-medium rounded-sm p-1">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div class="bg-white flex flex-row items-center justify-between px-5 py-1 rounded-b-lg">
            <h1 class="border rounded-lg px-2">10 of 1000</h1>
            <div class="flex flex-row gap-2">
              <button class="border rounded-md px-2 bg-teal-700 text-white font-semibold">
                {"<<"}
              </button>
              <button class="border rounded-md px-2 bg-teal-700 text-white font-semibold">
                {"<"}
              </button>
              <span class="border rounded-md px-2">1 of 100</span>
              <button class="border rounded-md px-2 bg-teal-700 text-white font-semibold">
                {">"}
              </button>
              <button class="border rounded-md px-2 bg-teal-700 text-white font-semibold">
                {">>"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default All;
