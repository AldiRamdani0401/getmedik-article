import { createSignal } from "solid-js";
import NotificationIcon from "../../../../icons/NotificationIcon";

// Sample Notification Datas
const NotificationDatas = [
  {
    title: "Notification 1",
    status: "unseen",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quis quos est repellendus officiis vel quaerat quamoptio fugiat maxime.",
    date: "Today, 09.00 WIB",
  },
  {
    title: "Notification 2",
    status: "seen",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quis quos est repellendus officiis vel quaerat quamoptio fugiat maxime.",
    date: "Yesterday, 09.00 WIB",
  },
  {
    title: "Notification 3",
    status: "unseen",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quis quos est repellendus officiis vel quaerat quamoptio fugiat maxime.",
    date: "Sunday, 04-12-2024 09.00 WIB",
  },
  {
    title: "Notification 4",
    status: "unseen",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quis quos est repellendus officiis vel quaerat quamoptio fugiat maxime.",
    date: "Sunday, 04-12-2024 09.00 WIB",
  },
  {
    title: "Notification 5",
    status: "seen",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quis quos est repellendus officiis vel quaerat quamoptio fugiat maxime.",
    date: "Sunday, 04-12-2024 09.00 WIB",
  },
  {
    title: "Notification 6",
    status: "unseen",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quis quos est repellendus officiis vel quaerat quamoptio fugiat maxime.",
    date: "Sunday, 04-12-2024 09.00 WIB",
  },
  {
    title: "Notification 7",
    status: "unseen",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quis quos est repellendus officiis vel quaerat quamoptio fugiat maxime.",
    date: "Sunday, 04-12-2024 09.00 WIB",
  },
  {
    title: "Notification 8",
    status: "unseen",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quis quos est repellendus officiis vel quaerat quamoptio fugiat maxime.",
    date: "Sunday, 04-12-2024 09.00 WIB",
  },
];

const Notification = () => {
  // Datas
  const [NotifDatas, setNotifDatas] = createSignal([...NotificationDatas]);

  const [isClick, setIsClick] = createSignal(false);
  const [isOpen, setIsOpen] = createSignal(false);

  // Load More
  const [limit, setLimit] = createSignal(3);

  const loadMore = () => {
    setLimit((prev) => prev + 3);
  };

  return (
    <div class="relative cursor-pointer">
      <div
        class={`flex items-center justify-center h-10 w-10 rounded-full hover:text-[#0b5555] hover:border-2 hover:bg-white ${
          isClick() ? "border-[2.5px] bg-white border-white text-[#15adad]" : ""
        }`}
        onclick={() => {
          setIsClick((prev) => !prev);
          setIsOpen((prev) => !prev);
          props.setState((prev) => !prev);
        }}
      >
        <NotificationIcon />
      </div>
      {/* Dropdown */}
      <div
        class={
          isOpen()
            ? "flex flex-col absolute left-[-350px] top-[55px] gap-[2px] bg-white w-96 rounded-lg shadow-md"
            : "hidden"
        }
      >
        <li class="flex flex-row items-center  bg-[#0E8181] py-1 rounded-t-lg">
          <span class="font-medium text-white text-center w-fit px-3">
            Notifications
          </span>
        </li>
        {/* Notification Content */}
        <ul class="flex flex-col px-2 h-72 overflow-auto thin-scrollbar">
          {/* List of Content */}
          {NotifDatas()
            .slice(0, limit())
            .map((data) => (
              <li class="flex flex-col gap-1 p-1 border-y group hover:bg-[#0E8181] cursor-pointer">
                {/* Header Content */}
                <h1 class="flex flex-row justify-between gap-2 text-[#0a4e4e] text-sm font-semibold group-hover:text-white group-hover:font-bold">
                  <span>{data.title}</span>
                  <span
                    class={`${
                      data.status == "seen" ? "text-green-600" : "text-red-600"
                    } group-hover:text-white`}
                  >
                    {data.status}
                  </span>
                </h1>
                {/* Body Content */}
                <div class="flex flex-col gap-1 text-[#0E8181] text-xs group-hover:text-white group-hover:font-semibold">
                  {/* Description */}
                  <h2 class="line-clamp-2">{data.description}</h2>
                  {/* Time */}
                  <h2 class="text-right text-[11px] font-medium">
                    {data.date}
                  </h2>
                </div>
              </li>
            ))}
          {/* Load More */}
          {limit() < NotifDatas().length && (
            <li
              class="text-[#0E8181] font-semibold hover:font-bold mx-auto border"
              onclick={loadMore}
            >
              More
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Notification;
