import { useContentHeader } from "../../../utils/context/ContentHeaderContext";

const DashboardSetiing = () => {
    // use context
    const [_, setContentHeader] = useContentHeader();
    setContentHeader("Settings");
  return(
    <h1>Dashboard Setting</h1>
  );
}

export default DashboardSetiing;