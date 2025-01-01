import { createEffect, createSignal } from "solid-js";
import article_management from "../../../../../../../samples/admin/article_management";
import Search from "../../../../../../../components/icons/Search";
import Rows from "./Row";
import H_Article_Format from "../../../../../../../utils/handlers/format/H_Arrticle_Format";
import article_datas from "../../../../../../../samples/article/article_datas";

// datas
const datas = [...article_datas];

// Handlers
function H_Pagination(datas, limit, index, setTotal, filter) {
  let filteredData = datas;
  // example: { "filter": "doctor_verificator", "value": "Dr. Budi"} return only Dr.Budi

  if (filter.filter && filter.value) {
    if (filter.value === "A-Z" || filter.value === "Z-A") {
      filteredData = filteredData.sort((a, b) => {
        if (filter.value === "A-Z") {
          setTotal(filteredData.length);
          return a[filter.filter] > b[filter.filter] ? 1 : -1;
        } else if (filter.value === "Z-A") {
          setTotal(filteredData.length);
          return a[filter.filter] < b[filter.filter] ? 1 : -1;
        }
        return 0;
      });
    } else if (filter.filter === "doctor_verificator") {
      filteredData = filteredData.filter(
        (data) => data.doctor_verificator === filter.value
      );
      setTotal(filteredData.length);
    }
  }

  const paginatedData = filteredData.slice(index * limit, (index + 1) * limit);
  setTotal(filteredData.length);

  return {
    totalPage: Math.ceil(filteredData.length / limit),
    data: paginatedData,
  };
}

const DeleteTable = (props) => {
  // ## Signals ##
  const [selected, setSelected] = createSignal(null);
  const [renderData, setRenderData] = createSignal([]);

  // == Delete Mode
  const [selectedDeleteMode, setSelectedDeleteMode] = createSignal([]);

  const [selectedForDelete, setSelectedForDelete] = createSignal([]);

  // == Pagination
  const [limit, setLimit] = createSignal(10);
  const [index, setIndex] = createSignal(0);
  const [currentPage, setCurrentPage] = createSignal(1);
  const [totalData, setTotalData] = createSignal(null);
  const [totalPage, setTotalPage] = createSignal(null);
  const [filter, setFilter] = createSignal({ filter: null, value: null });

  // const [click, setClick] = createSignal(0);

  // == Scroll
  const [scrollXState, setScrollXState] = createSignal(false);

  // EFFECT: Reset Delete Mode
  createEffect(() => {
    if (typeof props.reset_delete === "function" && props.reset_delete()) {
      setSelectedDeleteMode([]);
      setSelectedForDelete([]);
      setSelected(null);
    } else {
      setSelected(null);
    }
    const page = H_Pagination(datas, limit(), index(), setTotalData, filter());
    setTotalPage(page.totalPage);
    setCurrentPage(
      currentPage() < page.totalPage ? index() + 1 : currentPage()
    );
    setRenderData(page.data);
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
            {selectedForDelete().length > 0 && (
              <button
                class={
                  "bg-yellow-500 px-2 text-base font-medium text-white rounded-lg shadow-lg"
                }
                onClick={() => {
                  // props.setState(false);
                  console.log("selectedForDelete : ", selectedForDelete());
                }}
              >
                Confirm
              </button>
            )}
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
            } py-1 flex flex-row md:flex-col lg:flex-col xl:flex-row md:justify-normal lg:justify-normal xl:justify-between items-center px-2 gap-2"
      >
        {/* Group 1 : Limit & Filter*/}
        <div class="flex flex-row justify-center xl:justify-normal gap-1 w-full border">
          {/* show entries data */}
          <div class="flex flex-row items-center gap-1">
            <select
              class="py-0 px-8 border-slate-200"
              name=""
              id="limit"
              onclick={(e) => {
                e.target[0].setAttribute("disabled", true);
              }}
              onChange={(e) => {
                setIndex(0);
                setCurrentPage(1);
                setLimit(Number(e.target.value));
              }}
            >
              <option class="" value="default" defaultValue>
                -- show entries --
              </option>
              {datas.map((_, index) => {
                if (index % 10 == 0 && index > 0) {
                  return <option value={index}>{index}</option>;
                }
              })}
            </select>
            {/* Reset */}
            {limit() > 10 && (
              <button
                class="bg-red-700 hover:bg-red-500 text-white rounded-full px-2 flex flex-row justify-center"
                onClick={() => {
                  setLimit(10);
                  setIndex(0);
                  setCurrentPage(1);
                  document.getElementById("limit").value = "default";
                }}
              >
                {"X"}
              </button>
            )}
          </div>
          {/* filter */}
          <div class="flex flex-row gap-1">
            <div class="flex flex-row items-center gap-1">
              {/* Select Filter */}
              <select
                class="py-0 px-8 border-slate-200"
                name=""
                id="filter"
                onclick={(e) => {
                  e.target[0].setAttribute("disabled", true);
                }}
                onChange={(e) => {
                  setIndex(0);
                  setCurrentPage(1);
                  setFilter((prev) => ({ ...prev, filter: e.target.value }));
                }}
              >
                <option class="" value="default" defaultValue>
                  -- select filter --
                </option>
                {Object.keys(datas[0]).map((key) => {
                  return (
                    <option value={key}>
                      {H_Article_Format.object_key(key)}
                    </option>
                  );
                })}
              </select>
              {/* Select Filter Value */}
              {filter().filter !== null && (
                <select
                  class="py-0 px-8 border-slate-200"
                  name=""
                  id="filter-value"
                  onclick={(e) => {
                    e.target[0].setAttribute("disabled", true);
                  }}
                  onChange={(e) => {
                    setIndex(0);
                    setCurrentPage(1);
                    setFilter((prev) => ({ ...prev, value: e.target.value }));
                    console.log(filter());
                  }}
                >
                  <option class="" value="default" defaultValue>
                    -- select filter value --
                  </option>
                  <option value="A-Z">A - Z</option>
                  <option value="Z-A">Z - A</option>
                  {filter().filter === "doctor_verificator" &&
                    [
                      ...new Set(datas.map((data) => data.doctor_verificator)),
                    ].map((value) => <option value={value}>{value}</option>)}
                </select>
              )}
              {/* Reset */}
              {filter().filter !== null && (
                <button
                  class="bg-red-700 hover:bg-red-500 text-white rounded-full px-2 flex flex-row justify-center"
                  onClick={() => {
                    setIndex(0);
                    setCurrentPage(1);
                    document.getElementById("filter").value = "default";
                    setFilter((prev) => ({
                      ...prev,
                      filter: null,
                      value: null,
                    }));
                  }}
                >
                  {"X"}
                </button>
              )}
            </div>
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
        </div>
        {/* Group 2 : Search*/}
        <div class="flex flex-row justify-center xl:justify-end gap-1 w-full border">
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
            {renderData().map((data, index) => {
              return (
                <Rows
                  index={index}
                  scrollState={scrollXState}
                  selected={selected}
                  setSelected={setSelected}
                  selectedDeleteMode={selectedDeleteMode}
                  setSelectedDeleteMode={setSelectedDeleteMode}
                  setSelectedForDelete={setSelectedForDelete}
                  data={data}
                  limit={limit()}
                  page={currentPage()}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div class="bg-white flex flex-row items-center justify-between px-5 py-1 rounded-b-lg">
        {/* count data */}
        <h1 class="border rounded-lg px-2">
          {index() * limit() + 1} -{" "}
          {Math.min((index() + 1) * limit(), totalData())} of {totalData()}
        </h1>
        <div class="flex flex-row gap-2">
          <button
            class="border rounded-md px-2 bg-red-700 text-white font-semibold disabled:bg-gray-500"
            disabled={currentPage() == 1}
            onClick={() => {
              console.log("last");
              // set first index
              setIndex(0);
              setCurrentPage(1);
            }}
          >
            {"<<"}
          </button>
          <button
            class="border rounded-md px-2 bg-red-700 text-white font-semibold disabled:bg-gray-500"
            disabled={currentPage() == 1}
            onClick={() => {
              console.log("prev");
              console.log("current", currentPage());
              setIndex((prev) => currentPage() > 1 && prev - 1);
              setCurrentPage((prev) => currentPage() > 1 && prev - 1);
            }}
          >
            {"<"}
          </button>
          <span class="border rounded-md px-2">
            {currentPage()} of {totalPage()}
          </span>
          {/* Next */}
          <button
            class="border rounded-md px-2 bg-red-700 text-white font-semibold disabled:bg-gray-500"
            disabled={currentPage() == totalPage()}
            onClick={() => {
              console.log("next");
              setIndex((prev) => currentPage() < totalPage() && prev + 1);
            }}
          >
            {">"}
          </button>
          <button
            class="border rounded-md px-2 bg-red-700 text-white font-semibold disabled:bg-gray-500"
            disabled={currentPage() == totalPage()}
            onClick={() => {
              console.log("last");
              // set last index
              setIndex(totalPage() - 1);
              setCurrentPage(totalPage());
            }}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTable;
