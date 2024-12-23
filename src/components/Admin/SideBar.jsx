// Icons
import AdminIcon from "../icons/AdminIcon";
import ArticleIcon from "../icons/ArticleIcon";
import BrushIcon from "../icons/BrushIcon";
import ContentIcon from "../icons/ContentIcon";
import DatabaseIcon from "../icons/DatabaseIcon";
import IconDashboard from "../icons/IconDashboard";
import SettingIcon from "../icons/SettingIcon";
import Footer from "./Footer";

const SideBar = () => {
  return (
    <aside class="sticky top-0 flex flex-col xl:h-[92.5%] justify-between w-[250px] bg-slate-100 select-none">
      <div>
        <h1 class="p-4 bg-[#0E8181] text-white text-xl font-semibold">
          <a href="/admin">Admin Panel</a>
        </h1>
        <ul class="flex flex-col">
          {/* Dashboard */}
          <li class="group text-[#0b5555] border-b hover:bg-[#0b5555]">
            <a href="/admin" class="flex flex-row gap-2 p-3">
              <span class="group-hover:text-white">
                <IconDashboard />
              </span>
              <span class="text-base group-hover:text-white group-hover:font-semibold">
                Dashboard
              </span>
            </a>
          </li>
          {/* Article Management */}
          <li class="group text-[#0b5555] border-b hover:bg-[#0b5555]">
            <a href="/admin/management/article" class="flex flex-row gap-2 p-3">
              <span class="group-hover:text-white">
                <ArticleIcon size={24} />
              </span>
              <span class="text-base group-hover:text-white group-hover:font-semibold">
                Article Management
              </span>
            </a>
          </li>
          {/* Creator Management */}
          <li class="group text-[#0b5555] border-b hover:bg-[#0b5555]">
            <a href="/admin/management/creator" class="flex flex-row gap-2 p-3">
              <span class="group-hover:text-white">
                <BrushIcon size={24} />
              </span>
              <span class="text-base group-hover:text-white group-hover:font-semibold">
                Creator Management
              </span>
            </a>
          </li>
          {/* Content Management */}
          <li class="group text-[#0b5555] border-b hover:bg-[#0b5555]">
            <a href="/admin/management/content" class="flex flex-row gap-2 p-3">
              <span class="group-hover:text-white">
                <ContentIcon />
              </span>
              <span class="text-base group-hover:text-white group-hover:font-semibold">
                Content Management
              </span>
            </a>
          </li>
          {/* Database Management */}
          <li class="group text-[#0b5555] border-b hover:bg-[#0b5555]">
            <a
              href="/admin/management/database"
              class="flex flex-row gap-2 p-3"
            >
              <span class="group-hover:text-white">
                <DatabaseIcon />
              </span>
              <span class="text-base group-hover:text-white group-hover:font-semibold">
                Database Management
              </span>
            </a>
          </li>
          {/* Admin Management */}
          <li class="group text-[#0b5555] border-b hover:bg-[#0b5555]">
            <a href="/admin/management/admin" class="flex flex-row gap-2 p-3">
              <span class="group-hover:text-white">
                <AdminIcon />
              </span>
              <span class="text-base group-hover:text-white group-hover:font-semibold">
                Admin Management
              </span>
            </a>
          </li>
          {/* Settings */}
          <li class="group text-[#0b5555] border-b hover:bg-[#0b5555]">
            <a href="/admin/setting" class="flex flex-row gap-2 p-3">
              <span class="group-hover:text-white">
                <SettingIcon />
              </span>
              <span class="text-base group-hover:text-white group-hover:font-semibold">
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
