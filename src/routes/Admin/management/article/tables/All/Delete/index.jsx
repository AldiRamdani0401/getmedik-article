import { createEffect, createSignal, onMount } from "solid-js";
import article_management from "../../../../../../../samples/admin/article_management";
import Search from "../../../../../../../components/icons/Search";
import Rows from "./Row";

// datas
const datas = [...article_management];

// Handlers
// function H_Delete_Mode(index) {
//   console.log(index);
//   selectedDeleteMode((prev) => [...prev, index]);
//   console.log(setSelectedDeleteMode());
// }

const DeleteTable = (props) => {
  // Signals
  const [selected, setSelected] = createSignal(null);

  // Delete Mode
  const [selectedDeleteMode, setSelectedDeleteMode] = createSignal([]);

  const [click, setClick] = createSignal(0);

  // Scroll
  const [scrollXState, setScrollXState] = createSignal(false);

  // EFFECT: Reset Delete Mode
  createEffect(() => {
    if (typeof props.reset_delete === "function" && props.reset_delete()) {
      setSelectedDeleteMode([]);
      setSelected(null);
    } else {
      setSelected(null);
    }
  });

  return (
    <div class="overflow-hidden border-teal-700 rounded-t-lg">
      {/* {console.log(props.delete())} */}
      <table class="w-full">
        <caption
          class={
            "flex flex-row justify-between text-2xl px-5 py-3 bg-red-700 text-white font-bold"
          }
        >
          <span>All Articles</span>
          {/* Confirmation */}
          <div class="flex flex-row justify-end gap-5 px-3">
            <button
              class={
                "bg-yellow-500 px-2 text-base font-medium text-white rounded-lg shadow-lg"
              }
              onClick={() => props.setState(false)}
            >
              Confirm
            </button>
            <button
              class={
                "bg-blue-800 px-2 text-base font-medium text-white rounded-lg shadow-lg"
              }
              onClick={() => {
                props.setState(false);
                // setEditMode(false);
              }}
            >
              Cancel
            </button>
          </div>
        </caption>
      </table>
      {/* Table Features */}
      <div
        class="bg-gray-400
          } py-1 flex flex-row md:flex-col lg:flex-row xl:flex-row md:justify-normal lg:justify-normal xl:justify-between items-center px-2 gap-2"
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
      <div
        class="bg-white lg:h-[350px] lg:max-h-[400px] xl:h-[400px] xl:max-h-[400px] overflow-auto thin-scrollbar"
        onScroll={(event) => {
          if (event.target.scrollLeft) {
            setScrollXState(true);
          } else {
            setScrollXState(false);
            // setTimeout(() => {
            // }, 100)
          }
        }}
      >
        <table class="w-full bg-white">
          <thead class="bg-red-50 text-sm shadow-md sticky top-[-1.5px] z-20">
            <tr>
              <th class="font-semibold border px-2 text-nowrap">*</th>
              <th class="font-semibold border px-2 text-nowrap">No</th>
              <th class="font-semibold border px-2 text-nowrap">Article ID</th>
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
              <th class="font-semibold border px-2 text-nowrap">Published</th>
              <th class="font-semibold border px-2 text-nowrap">Viewer</th>
              <th class="font-semibold border px-2 text-nowrap">Shared</th>
              <th class="font-semibold border px-2 text-nowrap">
                Article Status
              </th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, index) => {
              return (
                <Rows
                  index={index}
                  scrollState={scrollXState}
                  selected={selected}
                  setSelected={setSelected}
                  selectedDeleteMode={selectedDeleteMode}
                  setSelectedDeleteMode={setSelectedDeleteMode}
                  data={data}
                />
              );
            })}
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
    </div>
  );
};

export default DeleteTable;
