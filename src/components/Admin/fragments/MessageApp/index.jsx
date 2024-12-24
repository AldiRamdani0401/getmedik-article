import AdminIcon from "../../../icons/AdminIcon";
import ArticleIcon from "../../../icons/ArticleIcon";
import BrushIcon from "../../../icons/BrushIcon";
import ContentIcon from "../../../icons/ContentIcon";
import DatabaseIcon from "../../../icons/DatabaseIcon";
import IconDashboard from "../../../icons/IconDashboard";
import SettingIcon from "../../../icons/SettingIcon";

const MessageApp = (props) => {
  return (
    <aside
      class={`${
        props.open() ? "absolute" : "hidden"
      } top-12 right-0 flex flex-col md:h-[95%] lg:h-[90%]  xl:h-[90%] justify-between w-[450px] rounded-l-xl shadow-xl bg-[#0E8181] border border-[#0E8181] select-none`}
    >
      <h1 class="px-4 py-2 bg-[#0E8181] text-white text-xl font-semibold rounded-tl-xl">
        <a href="/admin">Message</a>
      </h1>
      <div class="h-full bg-slate-100  rounded-bl-xl overflow-auto">
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
          {/* Settings */}
          <li class="group text-[#0b5555] border-b hover:bg-[#0b5555]">
            <a href="/admin/setting" class="flex flex-row gap-2 p-3">
              <span class="group-hover:text-white">
                <SettingIcon />
              </span>
              <span class="text-base group-hover:text-white group-hover:font-semibold">
                End
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default MessageApp;
