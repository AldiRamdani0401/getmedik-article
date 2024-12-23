import { createSignal, onMount } from "solid-js";

// Components
import Header from "../components/GeneralUser/Header";
import Footer from "../components/GeneralUser/Footer";

// Effects
import handleScroll from "../utils/effects/Scroll";

const MainLayout = (props) => {
  const [isScrolled, setIsScrolled] = createSignal(false);

  let mainLayout = null;

  // Scroll Effect
  onMount(() => {
    mainLayout = document.getElementById("main-layout");
    mainLayout.addEventListener("scroll", () => {
      handleScroll(mainLayout, setIsScrolled);
    });
  });

  return (
    <div id="main-layout" class="flex flex-col h-screen overflow-y-auto">
      <Header state={isScrolled} />
      <main class="flex-1 py-20">{props.children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
