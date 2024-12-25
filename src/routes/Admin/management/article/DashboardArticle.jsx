import { createSignal, onMount } from "solid-js";
import { useContentHeader } from "../../../../utils/context/ContentHeaderContext";

// Fragment
import All from "./tables/All";
import Latest from "./tables/Latest";
import Oldest from "./tables/Oldest";
import Verified from "./tables/Verified";
import Unverified from "./tables/Unverified";

const DashboardArticle = () => {
  const [activeTab, setActiveTab] = createSignal("All");
  const [deleteMode, setDeleteMode] = createSignal(false);

  // Delete Mode : RESET
  const [resetDeleteMode, setResetDeleteMode] = createSignal(false);

  // use context
  const [_, setContentHeader] = useContentHeader();
  onMount(() => {
    setContentHeader("Article Management");
  });

  const tabs = ["All", "Latest", "Oldest", "Verified", "Unverified"];

  // Render Fragment
  const renderFragment = () => {
    if (activeTab() === "Latest") return <Latest delete={deleteMode} />;
    if (activeTab() === "Oldest") return <Oldest delete={deleteMode} />;
    if (activeTab() === "Verified") return <Verified delete={deleteMode} />;
    if (activeTab() === "Unverified") return <Unverified delete={deleteMode} />;
    return <All delete={deleteMode} reset_delete={resetDeleteMode} />;
  };

  return (
    <div
      class={`${
        deleteMode() ? "bg-red-100" : "bg-slate-100"
      } flex flex-col gap-2 px-8 pt-2 pb-10 lg:px-10 h-fit border select-none`}
    >
      {/* Navigation Management Article */}
      {!deleteMode() ? (
        <div class="flex flex-row h-8 justify-end gap-2 border">
          <button
            class="px-2 text-base font-medium bg-blue-700 text-white rounded-lg border"
            onClick={() => setActiveTab("Latest")}
          >
            + Add Article
          </button>
          <button
            class="px-2 text-base font-medium bg-red-600 text-white rounded-lg border"
            onClick={() => {
              setDeleteMode(true);
              setResetDeleteMode(false);
            }}
          >
            - Delete Article
          </button>
          <button class="px-2 text-base font-medium bg-yellow-500 text-white rounded-lg border">
            Edit Article
          </button>
        </div>
      ) : (
        <div class="flex flex-row gap-5 h-8 justify-between">
          <h1 class="bg-red-600 py-1 w-full text-white font-semibold text-center">
            Delete Mode Active
          </h1>
          <div class="flex flex-row gap-2 border">
            <button
              class="border px-2"
              onclick={() => {
                setDeleteMode(false);
                setResetDeleteMode(true);
                console.log(resetDeleteMode());
              }}
            >
              Cancel
            </button>
            <button class="border px-2">Confirm</button>
          </div>
        </div>
      )}
      {/* Table */}
      <div class="max-w-full lg:w-[700px] xl:w-[1440px] shadow-lg overflow-hidden">
        {/* Control Table Article */}
        <div class="flex flex-row justify-between md:gap-5 lg:gap-2 xl:gap-10">
          {/* Tabs */}
          <div class="flex flex-row gap-2">
            {tabs.map((tab) => (
              <button
                class={`px-5 pt-1 ${
                  tab === activeTab()
                    ? deleteMode()
                      ? "bg-red-700 text-white"
                      : "bg-teal-700 text-white"
                    : !deleteMode()
                    ? "text-teal-700 bg-white border border-teal-700 border-b-0"
                    : "hidden"
                } rounded-t-xl font-semibold`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {renderFragment()}
      </div>
    </div>
  );
};

export default DashboardArticle;
