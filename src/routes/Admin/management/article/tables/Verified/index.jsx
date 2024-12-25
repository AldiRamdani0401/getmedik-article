import Search from "../../../../../../components/icons/Search";

const Verified = () => {
  return (
      <div class="overflow-hidden border-teal-700 rounded-tr-lg">
        <table class="w-full">
          <caption class="text-left text-2xl px-2 py-3 bg-teal-700 text-white font-bold">
            Verified Articles
          </caption>
        </table>
        {/* Table Features */}
        <div class="py-1 flex flex-row md:flex-col lg:flex-row xl:flex-row md:justify-normal lg:justify-normal xl:justify-between items-center px-2 gap-2 bg-teal-600">
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
              <button class="px-2 border">
                <Search />
              </button>
            </div>
          </div>
        </div>
        {/* Wrap table header and body */}
        <div class="overflow-auto max-h-[450px]">
          <table class="w-full bg-white">
            <thead class="bg-teal-50 sticky top-0">
              <tr>
                <th class="font-semibold border px-2 text-nowrap">*</th>
                <th class="font-semibold border px-2 text-nowrap">No</th>
                <th class="font-semibold border px-2 text-nowrap">
                  Article ID
                </th>
                <th class="font-semibold border px-2 text-nowrap">
                  Title Article
                </th>
                <th class="font-semibold border px-2 text-nowrap">Creator</th>
                <th class="font-semibold border px-2 text-nowrap">
                  Doctor Verificator
                </th>
                <th class="font-semibold border px-2 text-nowrap">
                  Admin Verificator
                </th>
                <th class="font-semibold border px-2 text-nowrap">
                  Verif Status
                </th>
                <th class="font-semibold border px-2 text-nowrap">Created</th>
                <th class="font-semibold border px-2 text-nowrap">Updated</th>
                <th class="font-semibold border px-2 text-nowrap">Published</th>
                <th class="font-semibold border px-2 text-nowrap">Viewer</th>
                <th class="font-semibold border px-2 text-nowrap">Shared</th>
                <th class="font-semibold border px-2 text-nowrap">
                  Article Status
                </th>
                <th class="font-semibold border px-2 text-nowrap">
                  Article Status
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, index) => (
                <tr key={index}>
                  {/* Update & Delete Mode */}
                  <td class="border px-2">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td class="border px-2">{index + 1}</td>
                  <td class="border px-2">1</td>
                  <td class="border px-2">1</td>
                  <td class="border px-2">1</td>
                  <td class="border px-2">1</td>
                  <td class="border px-2">1</td>
                  <td class="border px-2">1</td>
                  <td class="border px-2">1</td>
                  <td class="border px-2">1</td>
                  <td class="border px-2">1</td>
                  <td class="border px-2">1</td>
                  <td class="border px-2">1</td>
                  <td class="border px-2">1</td>
                  <td class="border px-2">1</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Verified;
