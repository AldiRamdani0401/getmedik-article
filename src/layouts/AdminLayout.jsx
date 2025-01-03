import { createSignal, onMount } from "solid-js";

// Components
import Header from "../components/Admin/Header";
import SideBar from "../components/Admin/SideBar";

// Effects
import handleScroll from "../utils/effects/Scroll";

// Hooks
import { ContentHeaderProvider } from "../utils/context/ContentHeaderContext";
import MessageApp from "../components/Admin/fragments/MessageApp";
import { RenderInParentProvider } from "../utils/context/RenderInParent";
import DetailArticle from "../routes/Admin/management/article/detail";

const AdminLayout = (props) => {
  const [isScrolled, setIsScrolled] = createSignal(false);
  const [contentHeader, setContentHeader] = createSignal("Dashboard");

  // Render In Parent State
  const [renderInParent, setRenderInParent] = createSignal(null);

  // Message App
  const [openMsgApp, setOpenMsgApp] = createSignal(false);

  let mainLayout = null;

  // Scroll Effect
  onMount(() => {
    mainLayout = document.getElementById("main-layout");
    mainLayout.addEventListener("scroll", () => {
      handleScroll(mainLayout, setIsScrolled);
    });
  });

  return (
    <div
      id="main-layout"
      class="bg-slate-100 flex flex-col h-screen overflow-hidden"
    >
      <Header state={isScrolled} setOpenMsgApp={setOpenMsgApp} />
      <main class="relative flex flex-row h-[95%] lg:h-[95%] xl:h-full">
        {/* Sidebar */}
        <SideBar />
        {/* Component / Content */}
        <ContentHeaderProvider state={[contentHeader, setContentHeader]}>
          <RenderInParentProvider state={[renderInParent, setRenderInParent]}>
            <div class="flex-1 overflow-y-auto no-scrollbar">
              {/* Content Header */}
              <h1 class="bg-[#15adad] py-[4px] px-10 text-white text-2xl font-bold select-none">
                {contentHeader()}
              </h1>
              <hr class="bg-[#eaeaea] py-[2px] px-3" />

              {props.children}
            </div>
            {/* Render In Parent */}
            {renderInParent() && (
              renderInParent()
            )}
            {/* <DetailArticle/> */}
          </RenderInParentProvider>
        </ContentHeaderProvider>
        {/* Message App */}
        <MessageApp open={openMsgApp} />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminLayout;
