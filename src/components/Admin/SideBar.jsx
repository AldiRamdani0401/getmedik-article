// Icons
import { useLocation } from "@solidjs/router";
import AdminIcon from "../icons/AdminIcon";
import ContentIcon from "../icons/ContentIcon";
import DatabaseIcon from "../icons/DatabaseIcon";
import IconDashboard from "../icons/IconDashboard";
import SettingIcon from "../icons/SettingIcon";
import Footer from "./Footer";
import ArticleIcon from "../icons/ArticleIcon";
import BrushIcon from "../icons/BrushIcon";

const SideBar = () => {
  // style li
  const styleLi = {
    default:
      "group text-[#0b5555] border-b hover:bg-[#0b5555] hover:text-white hover:font-semibold",
    active: ["text-white bg-[#0b5555] font-semibold"],
  };

  // Location hook
  const location = useLocation();

  // Active class handler
  const active = (path) => {
    return location.pathname === path
      ? `${styleLi.default} ${styleLi.active}`
      : styleLi.default;
  };

  return (
    <aside class="sticky top-0 flex flex-col xl:h-full justify-between w-[250px] bg-slate-100 shadow-lg select-none">
      <div class="bg-white">
        <h1 class="p-4 bg-[#0E8181] text-white text-xl font-semibold">
          <a href="/admin">Admin Panel</a>
        </h1>
        <ul class="flex flex-col">
          <li class={active("/admin")}>
            <a href="/admin" class="flex flex-row gap-2 p-3">
              <span>
                <IconDashboard />
              </span>
              <span>Dashboard</span>
            </a>
          </li>
          <li class={active("/admin/management/article")}>
            <a href="/admin/management/article" class="flex flex-row gap-2 p-3">
              <span>
                <ArticleIcon size={24} />
              </span>
              <span>
                Article Management
              </span>
            </a>
          </li>
          <li class={active("/admin/management/creator")}>
            <a href="/admin/management/creator" class="flex flex-row gap-2 p-3">
              <span>
                <BrushIcon size={24} />
              </span>
              <span>
                Creator Management
              </span>
            </a>
          </li>
          <li class={active("/admin/management/content")}>
            <a href="/admin/management/content" class="flex flex-row gap-2 p-3">
              <span>
                <ContentIcon />
              </span>
              <span>
                Content Management
              </span>
            </a>
          </li>
          <li class={active("/admin/management/database")}>
            <a
              href="/admin/management/database"
              class="flex flex-row gap-2 p-3"
            >
              <span>
                <DatabaseIcon />
              </span>
              <span>
                Database Management
              </span>
            </a>
          </li>
          <li class={active("/admin/management/admin")}>
            <a href="/admin/management/admin" class="flex flex-row gap-2 p-3">
              <span>
                <AdminIcon />
              </span>
              <span>
                Admin Management
              </span>
            </a>
          </li>
          <li class={active("/admin/setting")}>
            <a href="/admin/setting" class="flex flex-row gap-2 p-3">
              <span>
                <SettingIcon />
              </span>
              <span>
                Settings
              </span>
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </aside>
  );
};

export default SideBar;
