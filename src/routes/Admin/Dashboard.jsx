import { useContentHeader } from "../../utils/context/ContentHeaderContext";

function Dashboard() {
  // use context
  const [_, setContentHeader] = useContentHeader();
  setContentHeader("Dashboard");

  return (
    <div className="flex flex-col gap-8 px-8 py-1 lg:px-10 border">
      {/* Container Chart 1 */}
      <div class="border">

      </div>
    </div>
  );
}

export default Dashboard;
