import { createSignal, onMount } from "solid-js";

// Components
import Header from "../components/Admin/Header";
import SideBar from "../components/Admin/SideBar";

// Effects
import handleScroll from "../utils/effects/Scroll";

// Hooks
import { ContentHeaderProvider } from "../utils/context/ContentHeaderContext";

const AdminLayout = (props) => {
  const [isScrolled, setIsScrolled] = createSignal(false);
  const [contentHeader, setContentHeader] = createSignal("Dashboard");

  let mainLayout = null;

  // Scroll Effect
  onMount(() => {
    mainLayout = document.getElementById("main-layout");
    mainLayout.addEventListener("scroll", () => {
      handleScroll(mainLayout, setIsScrolled);
    });
  });

  return (
    <div id="main-layout" class="flex flex-col h-screen overflow-hidden">
      <Header state={isScrolled} />
      <main class="flex flex-row h-[90%] xl:h-full">
        {/* Sidebar */}
        <SideBar />
        {/* Component / Content */}
        <ContentHeaderProvider state={[contentHeader, setContentHeader]}>
          <div class="flex-1 overflow-y-auto no-scrollbar">
            {/* Content Header */}
            <h1 class="bg-[#15adad] py-[4px] px-10 text-white text-2xl font-bold select-none">
              {contentHeader()}
            </h1>
            <hr class="bg-[#eaeaea] py-[2px] px-3" />
            {props.children}
          </div>
          <SideBar />
        </ContentHeaderProvider>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminLayout;
